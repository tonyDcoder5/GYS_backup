import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function LocalSupport({ contacts = [] }) {
  console.log(contacts);

  const contactsPage = [...contacts];

  const localCounseling = contacts?.filter(
    (contact) => contact.contact_level === "local"
  );

  let logos = [
    require("../assets/img/logos/local-contacts/HD_Counseling_Logo.png"),
    require("../assets/img/GYS_logo.jpg"),
    require("../assets/img/logos/local-contacts/camaraderiefoundation-logo.png"),
  ];

  const initialCard = {
    id: 0,
    orgName: "Click an Icon",
    orgDesc:
      "To see more details on our local partnered organizations, or click below to find out how to become one!",
    orgUrl: "#",
    contact: "Org Contact",
    contact_email: "sameple@sample.com",
    icon: require("../assets/img/GYS_logo.jpg"),
  };
  const [hiCard, setHiCard] = useState(initialCard);

  const clickHandle = (contact) => {
    setHiCard(contact);
  };

  return (
    <div className="local-support-block">
    {/* Change to side by side cards listing all local hotlines & support resources available */}
      
      <section className="local-hotlines">
        <h3>Local Support Hotlines</h3>
        <StarBanner />
        <div className="contact-list">
          <div className="contact-group">
            {contactsPage.map((contact, idx) => (
              <div
                onClick={() => clickHandle(contact)}
                key={idx}
                className="contact-line"
              >
                <div>
                  <h4>{contact.contact_org_name}</h4>
                  <img
                    key={contact.contact_id}
                    src={logos[idx]}
                    width={"50%"}
                  />
                </div>
                <div>
                <p>{contact.contact_desc}</p>
                <Button className="local-orgsite">
                  <a href={contact.orgUrl} target="_blank">Website</a>
                </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="local-counseling">
        <h3>Local Counseling Support</h3>
        <StarBanner />
        <div className="contact-list">
          <div className="contact-group">
            {contactsPage.map((contact, idx) => (
              <div
                onClick={() => clickHandle(contact)}
                key={idx}
                className="contact-line"
              >
                <div>
                  <h4>{contact.contact_org_name}</h4>
                  <img
                    key={contact.contact_id}
                    src={logos[idx]}
                    width={"50%"}
                  />
                </div>
                <div>
                <p>{contact.contact_desc}</p>
                <Button className="local-orgsite">
                  <a href={contact.orgUrl} target="_blank">Website</a>
                </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
