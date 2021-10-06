import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css'

const AboutH = () => {
    return (
        
       <Container>
       <Row>
       <div className = 'abouth'>
       <Col xs={12} md={6} classname = 'py-5'>
       <Image src="about.jpg" rounded className = 'img-fluid'/>
       </Col>

       <Col xs={12} md={6}>
       <h3 className = 'py-5'>We Build Future with Education</h3>
       <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explore.</p>
       </Col>

       </div>

       </Row>
       </Container>
       );
   };

   export default AboutH;