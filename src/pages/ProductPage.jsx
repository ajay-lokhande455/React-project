import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = ({ cartItems, setCartItems }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some(item => item.id === product.id);
    if (isProductInCart) {
      alert('Product is already in the cart');
      return;
    }

    // Add the full product object, not just the productId, to cart
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert('Product added to Cart');
  };

  return (
    product && (
      <section className="product-detail-container">
        <section className="product-detail flex">
          <div className="product-img">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="text-content">
            <div className="title">
              <h2>{product.title}</h2>
            </div>

            <div
              className="rating"
              style={{ "--rating": product.rating }}
              aria-label={`Rating: ${product.rating}`}
            ></div>

            <div className="pricing">
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
            </div>

            <div className="description">
              <p>{product.description}</p>
            </div>
            <hr />

            <div className="product-size">
              <p>Choose Size</p>
              <button className="small">Small</button>
              <button className="medium">Medium</button>
              <button className="large">Large</button>
              <button className="x-large">X-large</button>
            </div>
            <hr />

            <div className="addToCart">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </section>
      </section>
    )
  );
};

export default ProductPage;
