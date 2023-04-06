import React from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import Mob from "../assets/mob2.jpg"

import anssible from "../assets/ans.jpg"

const Home = () => {
  return (
    <div>
        <div style={{ backgroundColor: "white" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={Mob} alt="Mob" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-default" />
          <Navbar.Collapse id="navbar-default">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link to="/signin">
              Sign In
           </Link>
              
              </Nav.Item>
              <Nav.Item   className="ms-3">
                <Link to="/signup">
              Sign Up
           </Link>
             
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold mb-5 text-black" style={{ fontSize: "3rem", lineHeight: 1.2 }}>
              Ansible Everything
            </h1>
            <p className="lead mb-5" style={{ fontSize: "1.2rem", color: "#444" }}>
            The easy-to-use ,integrated,glanceable,and open<br/> web-based interface for your servers
            </p>
            <Nav.Item   className="ms-3">
            <Link to="/signin">
            <Button size="lg" variant="primary" className="bg-black" style={{ borderRadius: "30px", padding: "10px 40px" }}>
              Get Started
            </Button> 
            
           </Link>
           </Nav.Item>
          </Col>
          
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Home;
