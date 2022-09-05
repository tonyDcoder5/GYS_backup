import React from "react";
import StarBanner from "../components/StarBanner";

export default function ShopHeader({ prompts = [] }) {
  // console.log(prompts);

  return (
    <div className="row shop-header">
      <StarBanner />
      <div className="shop-header-content">
      <div>
        <img
          src={require("../assets/img/shirts/gys-shirt-model-blue-1.jpeg")}
          alt="GYS Shirt-Model-Blue"
        />
      </div>
      <div>
        <section>
          <h2>{prompts[0]?.section_title}</h2>

          <h4>{prompts[0]?.section_subtitle}</h4>

          <p>{prompts[0]?.section_text}</p>
        </section>
      </div>
      </div>
    </div>
  );
}
