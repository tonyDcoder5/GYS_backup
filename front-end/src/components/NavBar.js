import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/GYS_logo.jpg";

export default function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="header-nav row">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        {scrolled ? 
        <div className="scroll-brand">
          <a href="/home"><img src={logo} alt="GYS logo" /></a>
          <a href="/home"><h3 className="m-2">Golf Yankee Six</h3></a>
        </div> : null
        }
        <span className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/contact"><b>Contact Us</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </span>
      </Navbar>
    </div>
  );
}
