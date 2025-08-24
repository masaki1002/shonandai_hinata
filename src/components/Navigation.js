import React from 'react';
import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar }  from 'react-bootstrap';
import hinata_logo_image from "../images/hinata_logo.jpg"

const Navigation = () => {
    return (
        <div class="w3-top">
            <Navbar className="w3-card custom-navbar-bg" expand="lg"sticky="top">
            <Container fluid style={{ minHeight: "3vh"}}>
                <Navbar.Brand href="#">
                <img class="w3-image w3-round-large image-max-width"   style={{ maxWidth: "75%", width: "100px",  margin: "0 auto" }} src={hinata_logo_image} alt="misuzu oeda"></img>
                {/* <b>ひなた治療院</b> */}
                
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="#post">季節の便り</Nav.Link>
                    <Nav.Link href="#intro">当院/施術士の紹介</Nav.Link>
                    <Nav.Link href="#approach">施術アプローチ</Nav.Link>
                    <Nav.Link href="#menu">治療メニュー</Nav.Link>
                    <Nav.Link href="#patientsvoices">患者さんの声</Nav.Link>
                    <Nav.Link href="#accessmap">アクセスマップ</Nav.Link>          
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
  )
}

export default Navigation
