import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./header.css";

const Header = ({ cartItems }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // Cart count based on cartItems length
  const cartCount = cartItems.length;

  useEffect(() => {
    async function searchProduct() {
      const req = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await req.json();
      setProducts(data.products);
    }

    if (search) {
      searchProduct();
    } else {
      setProducts([]);
    }
  }, [search]);

  return (
    <header>
      <div className="sign-up">
        <p>
          Sign up and get 20% off on your first order.{" "}
          <a href="#">Sign Up Now</a>
        </p>
      </div>
      <div className="navbar flex">
        <div className="main-logo flex gap">
          <a href="/">
            <h2>SHOP.CO</h2>
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for product"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {products.length > 0 && (
            <div className="search-results">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hugs">
          <Link to="cartPage" >
            <div className="cart-icon">
              <img
                src="https://ajay-lokhande455.github.io/e-commerce/assets/cart.svg"
                alt="Cart"
              />
              <span className="cart-count">{cartCount}</span>
            </div>
          </Link>
          <Link href="/account">
            <img
              src="https://ajay-lokhande455.github.io/e-commerce/assets/account.svg"
              alt="Account"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
