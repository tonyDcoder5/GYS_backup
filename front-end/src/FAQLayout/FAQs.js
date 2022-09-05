import React, { useState } from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import StarBanner from "../components/StarBanner";
import { formatAsDate } from "../utils/api";

export default function FAQs({ data = [] }) {
  // data holds FAQs page content
  console.log(data);
  const [show, setShow] = useState(false);
  const [topDetails, setTopDetails] = useState(null);
  //filter data by top or recent, then pass all data to FAQpage to list all
  const top_faqs = data.filter((faq)=> faq.top) || [
    {
      post_id: 0,
      post_title: "Content loading...",
      post_subtitle: "",
      post_text: "",
      post_url: "#",
      post_date: new Date(),
    }
  ];

  const recent_faqs = [...data] || [
    {
      post_id: 0,
      post_title: "Content loading",
      post_subtitle: "",
      post_text: "",
      post_url: "#",
      post_date: new Date(),
    }
  ];

  return (
    <div className="faqs">
      <div className="faqs-bx">
        <h4>Top FAQs</h4>
        <StarBanner />
        <div className="top-faqs">
          <Row>
            {top_faqs.map((faq, idx) => (
              <Col className="top-faq" id={faq.post_id} key={faq.post_id}>
                <h3>{faq.post_title}</h3>
                <h6>{faq.post_subtitle}</h6>
                <button
                  onClick={(evt) => {
                    setTopDetails(idx);
                    setShow(true);
                    if (topDetails === idx) {
                      setShow(!show);
                    }
                  }}
                >
                  Read More
                </button>
                {topDetails === idx && show ? <p>{faq.post_text}</p> : null}
                <sub>{formatAsDate(faq.post_date)}</sub>
              </Col>
            ))}
          </Row>
        </div>
        <h4>Most recent faqs</h4>
        <StarBanner />
        <div className="recent-faqs">
          <Accordion defaultActiveKey="0" flush>
            {recent_faqs.map((faq, idx) => (
              <Accordion.Item className="recent-faq" eventKey={idx}>
                <Accordion.Header>
                  <h3>{faq.post_title}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.post_subtitle}</p>
                  <p>{formatAsDate(faq.post_date)}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <a href={`faqs/list`} >
            <button className="btn-all">All</button>
          </a>
        </div>
      </div>
    </div>
  );
}
