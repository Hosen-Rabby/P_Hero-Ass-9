import React from 'react';
import './NotFound.css'
import { Col, Container, Image, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                <div>
        <Image src = './notFound.jpg' className = 'img-fluid notfound_img'></Image>
        <h3 className = 'not_found'>Not Found</h3>
        </div>
                </Col>
            </Row>
        </Container>
        );
};

export default NotFound;