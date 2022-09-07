import React, { useState } from "react";
import { Row, Col, Card, OverlayTrigger, Popover } from "react-bootstrap";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function UrgentSupport({ contacts = [] }) {
  // console.log(contacts);

  let urgentLogo = "https://988lifeline.org/wp-content/uploads/2022/07/modal-992x558.png";

  return (
    <div className="resource-block urgent-resources">
      <StarBanner />
      <div className="support-card-urgent">
        <div className="urgent-contact">
        <img src={urgentLogo} alt="" width="100%"/>      
        <h3>{contacts[0]?.contact_org_name}</h3>
          <section>
            <p>{contacts[0]?.contact_desc}</p>
            <span className="support-btns-urgent">
              <strong>Main Phone: 988 </strong>
              <button className="btn btn-orgsite">
                <a href={contacts[0]?.contact_url} target="_blank">
                  Website
                </a>
              </button>
            </span>
          </section>
        </div>
      </div>

      {/* <Row xs={1} sm={2} className="g-4">
        {contactsPage.map((contact, idx) => (
          <Col key={contact.id}>

          </Col>
        ))}
      </Row> */}
    </div>
  );
}
