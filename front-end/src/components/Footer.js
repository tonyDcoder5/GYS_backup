import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../assets/img/GYS_logo.jpg";
import { Link } from "react-router-dom";
import StarBanner from "./StarBanner";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/resources">Resources</a>
          <a href="/faqs">FAQs</a>
        </div>
        <div className="footer-logo">
          <a href="/home">
            <img src={logo} alt="GYS logo" />
          </a>
        </div>
        <div className="footer-links">
          <a href="/events">Events</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-text">
       <a href="/home"> <h3>
          <b>Golf Yankee Six</b>
        </h3>
        <h4>We Got Your Back</h4></a>
      </div>
      <StarBanner />
      <div className="footer-socials">
        {/* TODO: CREATE CUSTOM FACEBOOK URL */}
        <span>
          <SocialIcon url="https://facebook.com/" target="_blank" /> 
        </span>
        <span>
          <SocialIcon
            url="https://www.instagram.com/golfyankeesix/"
            target="_blank"
          />
        </span>
        <span>
          <SocialIcon
            url="https://github.com/tonyDcoder5/GYS_monorepo"
            target="_blank"
          />
        </span>
      </div>
      <div className="footer-copy">
        <p>Designed by Straw Hat Media Agency</p>
        <p>With collaborations from: <a href="https://tonydcoder5.github.io/react-portfolio/" target="_blank">TonyDCoder</a>, <a href="https://github.com/NR-Papaya" target="_blank">NR-Papaya</a></p>
        <p>Built using ReactJS, Bootstrap, & CSS</p>
        <a href="/users" target="_blank" >Admin</a>
      </div>
    </div>
  );
}
