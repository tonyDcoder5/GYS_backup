import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function AboutSupport({ prompts = [] }) {
  console.log(prompts);
  // store in prompts from database here in desired format or default to database columns
  const promptsPage = prompts?.filter((prompt)=> prompt.section_name.includes("support-card"));

  console.log(promptsPage);


  return (
    <div className="about-support">
      <h3>{prompts[0]?.section_title}</h3>
      <h4>{prompts[0]?.section_text}</h4>
      <Row xs={1} sm={2} className="g-4">
        {promptsPage.map((prompt, idx) => (
          <Col key={prompt?.prompt_id}>
            <Card className="support-card">
              <img
                src={require("../assets/img/GYS_logo.jpg")}
                width={"50%"}
                alt={prompt.title + "icon"}
              />
              <StarBanner />
              <section>
                <p>
                  {prompt?.section_title}
                </p>
                <button className="btn">
                  <a href={prompt?.section_link} target="_blank">
                    Link
                  </a>
                </button>
              </section>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
