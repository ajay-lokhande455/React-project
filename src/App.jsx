import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Footer from "./component/footer/Footer";
import { useState, useEffect } from "react";
import CartPage from "./pages/CartPage";

function App() {
  const initialState = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productPage/:productId"
          element={
            <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/cartPage" element={<CartPage setCartItems={setCartItems}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
