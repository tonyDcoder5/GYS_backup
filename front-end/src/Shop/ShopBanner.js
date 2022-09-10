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
        <button className="btn">Shop Preview</button>
      </div>
      <div>
      <img
          src={require("../assets/img/shirts/gys-story-shirt-blue-front.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
         <h3>100% Amercian made tees, find our more below</h3>
        <button className="btn">Read More</button>
      </div>
      <div>
      <img
          src={require("../assets/img/shirts/gys-story-shirt-blue-back.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
         <h3>Buy them at our upcoming meetups & events!</h3>
        <button className="btn">Events</button>
      </div>
      </div>
    </div>
  );
}
