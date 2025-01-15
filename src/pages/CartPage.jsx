import { useState, useEffect } from "react";
import "./CartPage.css";

const CartPage = ({ setCartItems }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [summaryTotal, setSummaryTotal] = useState(0);
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false); // State for showing order form modal

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCartProducts(storedProducts);

    const total = storedProducts.reduce((acc, product) => acc + product.price, 0);
    const discount = storedProducts.reduce(
      (acc, product) => acc + product.price * 0.2,
      0
    );
    setTotalPrice(total);
    setTotalDiscount(discount);
    setSummaryTotal(total - discount);
  }, []);

  const handleRemoveProduct = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    setCartItems(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));

    const total = updatedCart.reduce((acc, product) => acc + product.price, 0);
    const discount = updatedCart.reduce(
      (acc, product) => acc + product.price * 0.2,
      0
    );
    setTotalPrice(total);
    setTotalDiscount(discount);
    setSummaryTotal(total - discount);
  };

  const handlePlaceOrder = () => {
    setIsOrderFormVisible(true); // Show the order form modal
  };

  const handleCloseModal = () => {
    setIsOrderFormVisible(false); // Close the modal
  };

  const handleOrderSubmit = () => {
    // Handle order submission logic here
    alert("Order Placed Successfully!");
    setIsOrderFormVisible(false); // Close the modal after placing the order
  };

  return (
    <section className="cart-section flex">
      {/* Left Section */}
      <div className="cart-products">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.id} className="product-cart flex" id={`product-${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-details flex">
                <div>
                  <h2>{product.title}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Return Policy: {product.returnPolicy || "Standard 30-day policy"}</p>
                </div>
                <div className="remove-product">
                  <button className="remove-product-btn" onClick={() => handleRemoveProduct(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Right Section (Order Summary) */}
      <div className="order-summary-sect">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-item discount">
            <span>Discount (-20%)</span>
            <span>-${totalDiscount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-item total">
            <span>Total</span>
            <span>${summaryTotal.toFixed(2)}</span>
          </div>
          <div className="promo-code">
            <input type="text" id="promo-input" placeholder="Add promo code" />
            <button id="apply-promo">Apply</button>
          </div>
          <button className="checkout-btn">Go to Checkout →</button>
          <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>

      {/* Order Form Modal */}
      {isOrderFormVisible && (
        <div className="order-form-modal">
          <div className="order-form-content">
            <h2>Place Your Order</h2>
            <form onSubmit={handleOrderSubmit}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Address:
                <input type="text" name="address" required />
              </label>
              <label>
                Payment Method:
                <select name="paymentMethod" required>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </label>
              <button type="submit" className="submit-order-btn">Submit Order</button>
            </form>
            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
