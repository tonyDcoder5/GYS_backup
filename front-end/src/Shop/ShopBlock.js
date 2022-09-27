import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarBanner from "../components/StarBanner";
const logo = require("../assets/img/GYS_logo.jpg");

export default function ShopBlock({ prompts = [] }) {
  // console.log(prompts);

  const navigate = useNavigate();

  const shirtPrompts = prompts.filter((prompt) =>
    prompt.section_name.includes("shirt-info")
  );

  const purchasePrompt = prompts.filter((prompt) =>
    prompt.section_name.includes("purchase")
  );

  const supplierPrompts = prompts.filter((prompt) =>
    prompt.section_name.includes("supplier")
  );

  // let blueLogoShirts = [ "../assets/img/shirts/gys-shirt-model-blue-logo-front.jpeg", "../assets/img/shirts/gys-shirt-model-blue-logo-back.jpeg", "../assets/img/shirts/gys-shirt-model-blue-logo.jpeg"];

  // let blueStoryShirts = ["../assets/img/shirts/gys-story-shirt-blue.jpeg", "../assets/img/shirts/gys-story-shirt-blue-front.jpeg", "../assets/img/shirts/gys-story-shirt-blue-back.jpeg"];

  // let grayLogoShirts = ["../assets/img/shirts/gys-shirt-model-gray-logo-front.jpeg", "../assets/img/shirts/gys-shirt-model-gray-logo-back.jpeg", "../assets/img/shirts/gys-shirt-model-gray-logo.jpeg"];

  // let grayStoryShirts = ["../assets/img/shirts/gys-story-shirt-gray.jpeg", "../assets/img/shirts/gys-story-shirt-gray-front.jpeg", "../assets/img/shirts/gys-story-shirt-gray-back.jpeg"];

  let shirtPics = [require("../assets/img/shirts/gys-shirt-model-gray-logo.jpeg"), require("../assets/img/shirts/gys-shirt-model-blue-logo.jpeg"), require("../assets/img/shirts/gys-story-shirt-blue.jpeg"), require("../assets/img/shirts/gys-story-shirt-gray.jpeg")];

  const [showDetails, setShowDetails] = useState(false);
  const [shirtDetails, setShirtDetails] = useState(null);

  const handleShow = (idx) => {
    setShirtDetails(idx);
    setShowDetails(true);
    if (shirtDetails === idx) {
      setShowDetails(!showDetails);
    }
  };

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
      <Row className="shirt-block">
        <h2>DESIGNS COMING SOON</h2>
            {shirts.map((shirt, idx) => {
              return (
                <Col className="shirt-content" key={idx}>
                    <img
                      src={shirtPics[idx]}
                      alt={shirt?.section_subtext}
                    />
                    <span className="shirt-text">
                      <h3>{shirt?.section_title}</h3>
                      {/* add shopify link on navigate callback */}
                      <button
                        className="btn shirt-detail-btn"
                      >
                        <a target="_blank" href="https://golfyankeesix.myshopify.com/">
                        More details
                        </a>
                      </button>
                      {/* {shirtDetails === idx && showDetails ? (
                        <>
                          <h3>{shirt?.section_title}</h3>
                          <h5>{shirt?.section_text}</h5>
                          <button className="btn shirt-detail-btn"><a href={shirt?.section_link}>Button</a></button>
                        </>
                      ) : null} */}
                    </span>
                </Col>
              );
            })}
      </Row>
      <StarBanner />
      <div className="shop-bx">
        <h3>
          DESIGNS BY Breaking Free Apparel Co.
        </h3>
        <h4>Shirts By Bayside Amercian</h4>
        <div className="shop-row">
          <section className="supplier-logos">
             <img
              src={require("../assets/img/logos/Breaking_Free_Apparel_logo.png")}
              alt="headshot"
            />
            <img
              src={require("../assets/img/logos/bayside-logo.png")}
              alt="headshot"
            />
           
          </section>
          <section className="shop-text">
            <h4>{supplierPrompts[0]?.section_subtitle}</h4>
            <p>{supplierPrompts[0]?.section_text}</p>
            <button>
              <a href={"https://breakingfreeindustries.com/"} target="_blank">
                Website
              </a>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
