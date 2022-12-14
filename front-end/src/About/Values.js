import React from "react";
import { Row, Col } from "react-bootstrap";
import StarBanner from "../components/StarBanner";

export default function Values({prompts = []}) {
  
    let values = prompts.filter((prompt)=> prompt.section_name.includes("values-block"));
  
    return (
    <div className="values-block">
        <h3>{prompts[0]?.section_title}</h3>
        <Row className="g-4">
          {values ? (
            values.map((value) => {
              return (
                <Col className="value" key={value?.prompt_id}>
                  <h3>{value?.section_title}</h3>
                  <StarBanner />
                  {/* <p>{value?.section_text}</p> */}
                </Col>
              );
            })
          ) : (
            <div className="value-block">Loading...</div>
          )}
        </Row>
      </div>
  );
}
