import React, { useState } from "react";
import { Row, Col, Card, OverlayTrigger, Popover } from "react-bootstrap";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function UrgentSupport({ contacts = [] }) {
  // console.log(contacts);

  return (
    <div className="resource-block urgent-resources">
      <StarBanner />
      <div className="support-card-urgent">
        <div className="urgent-contact">      
        <h3>{contacts[0]?.contact_org_name}</h3>
          <section>
            <p>{contacts[0]?.contact_desc}</p>
            <span className="support-btns-urgent">
              <strong>Main Phone: {contacts[0]?.mobile_number}</strong>
              <button className="btn btn-orgsite">
                <a href={contacts[0]?.contact_url} target="_blank">
                  Website
                </a>
              </button>
            </span>
          </section>
        </div>
      </div>

      {/* highlight just 988 lifeline and other websites to find out more about what they can offer  */}
      {/* <Row xs={1} sm={2} className="g-4">
        {contactsPage.map((contact, idx) => (
          <Col key={contact.id}>

          </Col>
        ))}
      </Row> */}
    </div>
  );
}
