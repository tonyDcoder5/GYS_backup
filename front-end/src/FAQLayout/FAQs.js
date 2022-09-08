import React, { useState } from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import StarBanner from "../components/StarBanner";
import { formatAsDate } from "../utils/api";

export default function FAQs({ data = [] }) {
  // data holds FAQs page content
  console.log(data);

  let faqs = data.filter((post)=> post.post_subtext.includes("faq-post"));

  const recent_faqs = [...faqs] || [
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
        <h2>Frequently Asked Questions</h2>
        <StarBanner />
        <div className="recent-faqs">
          <Accordion defaultActiveKey="0" flush>
            {recent_faqs.map((faq, idx) => (
              <Accordion.Item className="recent-faq" eventKey={idx}>
                <Accordion.Header>
                  <h3>{faq.post_title}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.post_text}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <a href={`faqs/list`} >
            <button className="btn-all">All</button>
          </a>
        </div>
      </div>
  );
}
