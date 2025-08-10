import React from 'react';
import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar }  from 'react-bootstrap';

const Navigation = () => {
    return (
        <div class="w3-top">
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{backgroundSize: "100px", backgroundColor: "#3f8d1dff"}}>
            <Container fluid style={{ minHeight: "6vh"}}>
                <Navbar.Brand href="/">ひなた治療院</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link  href="#post">季節の便り</Nav.Link>
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
        </div>

  )
}

export default Navigation
