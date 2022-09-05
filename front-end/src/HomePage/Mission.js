import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";
import ShopHeader from "../Shop/ShopHeader";

export default function Mission({ prompts }) {
  const flag = require("../assets/img/flag-gif.gif");

  //TODO: create api call for specific prompts at each component for easier rendering
  const missionContent = prompts.find(
    (prompt) => prompt.section_name === "mission-sect"
  );

  const statsContent = prompts.filter((prompt) =>
    prompt.section_name.includes("mission-stats")
  );

  console.log(missionContent, statsContent);

  return (
    <div className="mission-sect" name="mission-sect">
      <div className="intro-animation">
        <img
          src={require("../assets/img/intro-media.png")}
          alt="Waving flag gif"
          name="flag animation"
          id="intro-animation"
        />
        <section className="intro-subhead">
          <h3>Golf Yankee Six - Got Your Back</h3>
          <p>{missionContent?.section_text || null}</p>
        </section>
      </div>
      <ShopHeader />

      <div className="mission-stats">
          <StarBanner />
          <Row className="mt-2 g-4">
        {statsContent ? (
          statsContent.map((stat) => {
            return (
                <Col>
                  <h3>{stat.section_title}</h3>
                  <p>{stat.section_text}</p>
                </Col>
            );
          })) : (
          <div className="row mb-5">
            <div className="col">
              <h3>Loading ....</h3>
            </div>
          </div>
        )}
        </Row>
      </div>
    </div>
  );
}
