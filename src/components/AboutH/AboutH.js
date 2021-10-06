import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import './AboutH.css'

const AboutH = () => {
    return (
        
        
        <div className = 'aboutH'>
        <Container>
       <Row>
       <Col xs={12} md={12} className = 'aboutH_title'>
        <h1>About Us</h1>

       </Col>
       <Col xs={12} md={6}>
       <Image src="about.jpg" rounded className = 'img-fluid'/>
       </Col>

       <Col xs={12} md={6} className = 'aboutH_p'>
       <h3>We Build Future with Education</h3>
       <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explore.</p>
       </Col>

       </Row>
       </Container>
        </div>
       );
};

export default AboutH;