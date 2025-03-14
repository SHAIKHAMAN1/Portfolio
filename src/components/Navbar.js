import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    // Calculate scroll progress
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollWidth(scrollPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        style={{
          backgroundColor: navColour ? "rgba(0, 0, 0, 0.8)" : "transparent",
          transition: "background-color 0.3s ease-in-out",
          position: "fixed",
          width: "100%",
          zIndex: 1000
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <h1 style={{ fontSize: "16px", margin: 0 }}>SHAIKH AMAN</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Scroll Loader */}
        <div
          className="scroll-loader"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "4px",
            background: "linear-gradient(to right, #ff6a00, #ee0979)",
            borderRadius: "4px",
            transition: "width 0.1s ease-in-out",
            width: `${scrollWidth}%`
          }}
        ></div>
      </Navbar>
    </div>
  );
}

export default NavBar;
