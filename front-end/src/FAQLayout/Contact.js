import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button } from "react-bootstrap";
import StarBanner from "../components/StarBanner";

export default function Contact() {

  const form = useRef();
  const [sentNotice, setSentNotice] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current[0].value ||
      !form.current[1].value ||
      !form.current[2].value
    ) {
      setSentNotice({message: "Message not sent, please review and complete form again"});
      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
    }

    else {
      emailjs
        .sendForm(
          "service_4b4urgv",
          "template_vt2t2da",
          form.current,
          "G-ApjuZDYtqcWDa-9"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setSentNotice({ message: "Message Sent Successfully!" });
          },
          (error) => {
            console.log(error.text);
            setSentNotice({ message: error.text });
          }
        );

      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-bx">
        <Form ref={form} onSubmit={sendEmail}>
          <Row>
            <h2>Contact Form</h2>
          </Row>
          <StarBanner />
          <Row>
            <Form.Group as={Col} controlId="user_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={form.user_name}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="emailInput">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
                value={form.user_email}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="messageInput">Message</Form.Label>
              <Form.Control value={form.message} type="text" name="message" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" name="contact-send-btn">
            Send
          </Button>
        </Form>
      </div>
      {sentNotice && (
        <div className="send-notice">
          <h2>{sentNotice.message}</h2>
        </div>
      )}
    </div>
  );
}
