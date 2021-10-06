import React from 'react';
import { Col, Image } from 'react-bootstrap';

const HomeH = (props) => {
    const {title, para, img} = props.sllicer;


    return (
        <Col xs={12} md={3} className = 'main'>
        <div>
        <Image src = {img} className = 'img-fluid img'></Image>
        <h1 className = 'h4'>{title}</h1>
        <p className = 'p'>{para}</p>
        </div>
        </Col>        
        );
    };

    export default HomeH;