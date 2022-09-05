import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import StarBanner from "../components/StarBanner";
const logo = require("../assets/img/GYS_logo.jpg");

export default function ShopBlock({ prompts = [] }) {
  // console.log(prompts);

  const shirtPrompts = prompts.filter((prompt) =>
    prompt.section_name.includes("shirt-info")
  );

  const purchasePrompt = prompts.filter((prompt) =>
    prompt.section_name.includes("purchase")
  );

  const supplierPrompts = prompts.filter((prompt) =>
    prompt.section_name.includes("supplier")
  );

  console.log(shirtPrompts, purchasePrompt, supplierPrompts);

  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => setShowDetails(!showDetails);

  const shirts = [...shirtPrompts] || [
    {
      prompt_id: 0,
      section_title: "Shirt content loading...",
      section_image: logo,
      section_text: "",
      subtitle: "",
      date: new Date(),
    },
  ];

  const supplyPrompt = [...supplierPrompts] || [
    {
      prompt_id: 0,
      section_title: "Shirt content loading...",
      section_image: logo,
      section_text: "",
      subtitle: "",
      date: new Date(),
    },
  ];

  return (
    <div className="shop-block">
      <div className="shirt-block">
        <h2>DESIGNS COMING SOON</h2>
        <div className="shirt-content">
          <section>
            {shirts.map((shirt, idx) => {
              return (
                <div className="shirt-row">
                  <img
                    src={require("../assets/img/shirts/gys-shirt-model-gray-1.jpeg")}
                    width={"25%"}
                    alt={shirt?.section_subtext}
                  />
                  <span className="shirt-text">
                    <h3>{shirt?.section_title}</h3>
                    <button
                      className="btn shirt-detail-btn"
                      onClick={handleShow}
                    >
                      More details
                    </button>
                    <Offcanvas
                      show={showDetails}
                      onHide={handleShow}
                      placement="end"
                      backdrop="true"
                      keyboard="true"
                      className="offcanvas-details"
                    >
                      <Offcanvas.Body>
                        <Offcanvas.Header closeButton />
                        <h3>{shirt?.section_title}</h3>
                        <h5>{shirt?.section_subtitle}</h5>
                        {}
                      </Offcanvas.Body>
                    </Offcanvas>
                  </span>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <StarBanner />
      <div className="shop-bx">
        <h2>DESIGNS BY {supplierPrompts[0]?.section_title} & Breaking Free Apparel Co.</h2>
        <div className="shop-row">
          <section>
            <img
              src={require("../assets/img/logos/bayside-logo.png")}
              alt="headshot"
            />
            <img
              src={require("../assets/img/logos/Breaking_Free_Apparel_logo.png")}
              alt="headshot"
            />
          </section>
          <section className="shop-text">
            <h4>{supplierPrompts[0]?.section_subtitle}</h4>
            <p>{supplierPrompts[0]?.section_text}</p>
            <button><a href={"#"} target="_blank">Website</a></button>
          </section>
        </div>
      </div>
    </div>
  );
}
