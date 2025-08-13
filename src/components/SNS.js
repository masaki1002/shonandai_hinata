import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './SNS.css';


const SNS = () => {

   const instagramNewWindow = () => {
      window.open('https://www.instagram.com/p/DL4RtXrSSCc/', '_blank', 'noopener,noreferrer');
    }

  return (
     <section id="sns">
      <br></br>
      <div class="container">
        <div class="snsIcon">
          <Button 
          class="btn"
          onClick={instagramNewWindow}
          style={{
          backgroundImage:"url('./Instagram_Glyph_Gradient.png')",
          backgroundSize:"cover",
          backgroundColor: "transparent", 
          border:"none",
          width:"50px", 
          height:"50px"}}>
          </Button>
          <br></br>
          <br></br>
          <div class="copy-right">
            <p>© 2025 ひなた治療院</p>
          </div>
        </div>
       
      </div>
     
        
    </section>
  )
}

export default SNS