import React from 'react';
import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
 <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">ひなた治療院</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#post">季節の便り</Nav.Link>
            <Nav.Link href="#intro">当院の紹介</Nav.Link>
            <Nav.Link href="#approach">施術アプローチ</Nav.Link>
            <Nav.Link href="#patientsvoices">患者さんの声</Nav.Link>
            <Nav.Link href="#members">鍼灸師</Nav.Link>
            <Nav.Link href="#menu">治療メニュー</Nav.Link>
            <Nav.Link href="#accessmap">アクセスマップ</Nav.Link>      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
