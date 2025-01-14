import React from "react";
import "./StyleContainer.css";

const StyleContainer = () => {
  return (
    <section className="style-container">
      <div className="style-box bg-color">
        <div className="style-heading">
          <h2>BROWSE BY DRESS STYLE</h2>
        </div>
        <div className="style-card">
          <div className="item item-1">
            <div className="item-text">
              <p>Casual</p>
            </div>
            <img
              style={{ transform: "scaleX(-1)" }}
              src="https://ajay-lokhande455.github.io/e-commerce/assets/causal.png"
              alt="casual"
            />
          </div>
          <div className="item item-2">
            <div className="item-text">
              <p>Formal</p>
            </div>
            <img src="https://ajay-lokhande455.github.io/e-commerce/assets/formalshirt.png" alt="formal" />
          </div>
          <div className="item item-3">
            <div className="item-text">
              <p>Party</p>
            </div>
            <img src="https://ajay-lokhande455.github.io/e-commerce/assets/party.png" alt="party" />
          </div>
          <div className="item item-4">
            <div className="item-text">
              <p>Gym</p>
            </div>
            <img src="https://ajay-lokhande455.github.io/e-commerce/assets/gym.png" alt="gym" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleContainer;
