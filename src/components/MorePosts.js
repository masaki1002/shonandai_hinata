import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Navigation.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MorePosts = () => {
  return (
    
    <section id="moreposts">
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">ひなた治療院</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/">トップに戻る</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </section>
  )
}

export default MorePosts