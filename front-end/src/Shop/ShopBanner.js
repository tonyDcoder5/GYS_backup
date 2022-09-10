import React from "react";
import StarBanner from "../components/StarBanner";

export default function ShopBanner() {

  let shirts = ["../assets/img/shirts/gys-shirt-model-blue-logo-back.jpeg", "../assets/img/shirts/gys-story-shirt-blue-front.jpeg", "../assets/img/shirts/gys-story-shirt-blue-back.jpeg"]

  return (
    <div className="shop-banner">
      <StarBanner />
      <div className="shop-banner-content">
      <div>
        <img
          src={require("../assets/img/shirts/gys-shirt-model-blue-logo-back.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
        <h3>See our upcoming designs!</h3>
        <a href="/shop"><button className="btn">Shop Preview</button></a>
      </div>
      <div>
      <img
          src={require("../assets/img/shirts/gys-story-shirt-blue-front.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
         <h3>Show your support with our 100% Amercian made tees</h3>
      </div>
      <div>
      <img
          src={require("../assets/img/shirts/gys-story-shirt-blue-back.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
         <h3>Get yours soon, contact for preorders!</h3>
         <a href="/contact"><button className="btn">Contact</button></a>
      </div>
      </div>
    </div>
  );
}
