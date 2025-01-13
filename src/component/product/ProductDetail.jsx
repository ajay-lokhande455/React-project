import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css"


const ProductDetail = () => {
  const { productId } = useParams(); 



  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
    fetchProduct();
    }, [productId]);

    console.log(product)

  const handleAddToCart = (id) => {
    console.log(`Product with ID ${id} added to cart!`);
  };

  return (
    product && (
      <section className="product-detail-container">
        {/* Product Detail Section */}
        <section className="product-detail flex">
          <div className="product-img">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="text-content">
            {/* Title */}
            <div className="title">
              <h2>{product.title}</h2>
            </div>

            {/* Rating */}
            <div
                  className="rating"
                  style={{ "--rating": product.rating }}
                  aria-label={`Rating: ${product.rating}`}
                ></div>

            {/* Pricing */}
            <div className="pricing">
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
            </div>

            {/* Description */}
            <div className="description">
              <p>{product.description}</p>
            </div>
            <hr />

            {/* Product Size */}
            <div className="product-size">
              <p>Choose Size</p>
              <button className="small">Small</button>
              <button className="medium">Medium</button>
              <button className="large">Large</button>
              <button className="x-large">X-large</button>
            </div>
            <hr />

            {/* Add to Cart */}
            <div className="addToCart">
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="rating-container">
          {/* Add any additional rating or review functionality here */}
        </section>
      </section>
    )
  );
}

export default ProductDetail;
