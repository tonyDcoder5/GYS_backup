import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import StarBanner from "../components/StarBanner";
import { listContacts } from "../utils/api";
const logo = require("../assets/img/GYS_logo.jpg");

export default function AboutUs({prompts = [] }) {

  const i = {
    section_title: "Loading section content..."
  }
  
  // ADD API CALL for andria and Jacqui's contact/bio for about page 
  const [contacts,setContacts] = useState([]);
  const [contactsError,setContactsError] = useState(null)
 
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listContacts(abortController.signal);
        const founders = response.filter((data)=> data.contact_level === "founder");

        
        setContacts(founders);        

      } catch (error){
        setContactsError(error)
      }
    }
    fetchResources()
  },[])


  const team = [...contacts] || [];
  let headshots = [require("../assets/img/andria-about-headshot.jpg"), require("../assets/img/jacqui-about-headshot.jpg")]

  // store prompts for header & values sections
  const values = [
    {
      id: 0,
      title: "Teamwork",
      subtitle: "Teamwork subtitle",
      link: "#",
    },
    {
      id: 2,
      title: "Relentlessness",
      subtitle: "Relentlessness subtitle",
      link: "#",
    },
    {
      id: 3,
      title: "Determination",
      subtitle: "Determination subtitle",
      link: "#",
    },
    {
      id: 4,
      title: "Compassion",
      subtitle: "Compassion subtitle",
      link: "#",
    },
  ];


  return (
    <div className="about-us">
      <div className="row why-block">
        <h2>{prompts[0]?.section_title || i.section_title}</h2>
        <StarBanner />
        <div className="why-row">
          <img src={require("../assets/img/GYS_logo.jpg")} alt="media/logo" />
          <section className="why-text">
            <h4>{prompts[0]?.section_subtitle}</h4>
            <p>{prompts[0]?.section_text}</p>
          </section>
        </div>
      </div>
      <div className="who-block">
        <h2>Who is GYS?</h2>
        <div>
        {team ? (
          team.map((i, idx) => {
            return (
              <div className="who-row" key={i.contact_id}>
                <img src={headshots[idx]} className="who-headshot" alt="media/logo" />
                <section className="who-text">
                  <h4>{i.first_name + " " + i.last_name}</h4>
                  <h5>{i.contact_title}</h5>
                  <h6>{i.contact_org_name}</h6>
                  <p>{i.contact_desc}</p>
                </section>
              </div>
            );
          })
        ) : (
          <div className="who-row">
            <h3>Loading ...</h3>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
