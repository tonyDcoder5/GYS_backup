import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function LocalSupport({ contacts = [] }) {
  console.log(contacts);

  const [showDetails, setShowDetails] = useState(false);
  const [supportDetails, setSupportDetails] = useState(null);

  const contactsPage = [...contacts];

  const localCounseling = contacts?.filter(
    (contact) => contact.contact_level === "local"
  );

  console.log(localCounseling);

  const localHotlines = [
    {
    contact_title: "Orange, Osceola, Seminole, & Brevard County",
    contact_number: "211",
    contact_orgUrl: "#",
    contact_desc: "Main Number"
  },
    {
      contact_title: "Hillsborough County",
      contact_number: "813-234-1234",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },
    {
      contact_title: "Lake County",
      contact_number: "352-483-2800",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },
    {
      contact_title: "Maitland",
      contact_number: "407-740-7477",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    }, 
    {
      contact_title: "Marion County",
      contact_number: "352-629-9595",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },
    {
      contact_title: "LifeLine of Central Florida",
      contact_number: "407-425-2624",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },
    {
      contact_title: "Pinellas County - Suicide Hotline",
      contact_number: "727-791-3131",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },    {
      contact_title: "Pinellas County - Suicide Hotline",
      contact_number: "727-541-4628",
      contact_orgUrl: "#",
      contact_desc: "Main Number"
    },
  ]


  let logos = [
    require("../assets/img/logos/local-contacts/HD_Counseling_Logo.png"),
    "https://www.healingheartstherapies.com/storage/app/media/healing-hearts-new-logo-large.png",
    require("../assets/img/logos/local-contacts/camaraderiefoundation-logo.png"),
  ];

  const handleShow = (idx) => {
    setSupportDetails(idx);
    setShowDetails(true);
    if (supportDetails === idx) {
      setShowDetails(!showDetails);
    }
  };

  // const initialCard = {
  //   id: 0,
  //   orgName: "Click an Icon",
  //   orgDesc:
  //     "To see more details on our local partnered organizations, or click below to find out how to become one!",
  //   orgUrl: "#",
  //   contact: "Org Contact",
  //   contact_email: "sameple@sample.com",
  //   icon: require("../assets/img/GYS_logo.jpg"),
  // };
  // const [hiCard, setHiCard] = useState(initialCard);

  // const clickHandle = (contact) => {
  //   setHiCard(contact);
  // };

  return (
    <div className="local-support-block">      
      <section className="local-hotlines">
        <h3>Local Support Hotlines</h3>
        <StarBanner />
        <div className="contact-list">
          <div className="contact-group">
            {localHotlines.map((contact, idx) => (
              <div
                key={idx}
                className="contact-line"
              >
                <div className="contact-brand">
                  <h4>{contact.contact_title}</h4>
                </div>
                <div className="contact-info">
                <p>{contact.contact_desc}</p>
                <h5>{contact.contact_number}</h5>
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
            {localCounseling.map((contact, idx) => (
              <div
                key={idx}
                className="contact-line contact-line-counseling"
              >
                <div className="contact-brand">
                  <h4>{contact.contact_org_name}</h4>
                  <img
                    key={contact.contact_id}
                    src={logos[idx]}
                  />
                </div>
                <div className="contact-info">
                <button  className="btn local-support-detail-btn"
                        onClick={() => handleShow(idx)} >
                          Show Details
                          </button>
                {showDetails && supportDetails === idx ? 
                (<>
                <p>{contact.contact_desc}</p>
                <Button className="local-orgsite">
                  <a href={contact.orgUrl} target="_blank">Website</a>
                </Button> </>): null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
