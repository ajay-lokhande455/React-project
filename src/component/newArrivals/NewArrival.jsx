import React, { useState, useEffect } from "react";
import "./newArrivals.css";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="cards-container">
      <div className="card-heading">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="card-item flex center wrap">
        {products
          .slice(0, showAll ? products.length : 4)
          .map((product, index) => (
            <div className="card" key={index}>
              {/* Product Image */}
              <div className="item-img">
                <Link to={`productPage/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                </Link>
              </div>

              {/* Product Details */}
              <div className="item-text">
                <p>{product.title}</p>

                {/* Product Rating */}
                <div
                  className="rating"
                  style={{ "--rating": product.rating }}
                  aria-label={`Rating: ${product.rating}`}
                ></div>

                {/* Pricing */}
                <div className="pricing">
                  <p>${product.price}</p>
                  <p>{product.discountPercentage}% </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="view-all-btn flex center">
        <button
          className="toggle-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide All" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
