import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarBanner from "../components/StarBanner";
import { listPosts } from "../utils/api";

export default function FAQPage() {
  const history = useNavigate();

  const [faqs,setFaqs] = useState([]);
  const [FAQSerror,setFAQSerror] = useState(null)
 
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listPosts(abortController.signal);
        setFaqs(response)
        
      } catch (error){
        setFAQSerror(error)
      }
    }
    fetchResources()
  },[])


  const table = [
    {
      id: 0,
      title: "test title",
      subtitle: "test subtitle",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 1,
      title: "test title 1",
      subtitle: "test subtitle 1",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 2,
      title: "test title 2",
      subtitle: "test subtitle 2",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 3,
      title: "test title 3",
      subtitle: "test subtitle 3",
      link: "#",
      date: "2020-08-27",
    },
  ];

  const comments = [
    {
      id: 0,
      text: "example text",
      date: "example date",
    },
    {
      id: 1,
      text: "example text",
      date: "example date",
    },
    {
      id: 2,
      text: "example text",
      date: "example date",
    },
  ];

  console.log(faqs);

  return (
    <div className="faq">
      <button
        className="btn btn-secondary"
        onClick={() => {
          history("/faqs");
        }}
      >
        Back
      </button>

      <div className="faq-header">
        <section>
          <h3>Block - FAQ Header OR Media</h3>
          {/* <img src={logo} width="25%" alt="GYS logo/Home Button" /> */}
        </section>
      </div>
      <StarBanner />
      <div className="faq-content">
          <Accordion defaultActiveKey="0" flush>
            {faqs?.map((faq, idx) => (
              <Accordion.Item className="recent-faq" eventKey={idx}>
                <Accordion.Header>
                  <h3>{faq.post_title}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.post_subtitle}</p>
                  <p>{faq.post_date}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
      </div>
      <StarBanner />
      <div className="faq-block">
        <section>
          <h5>Comments/Resources Section?</h5>
          <ul>
            {comments.map((comment, idx) => {
              return (
                <li>
                  <p>{comment.text}</p>
                  <h6>{comment.date}</h6>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
