import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import ServiceH from './ServiceH';
import Home from '../Home/Home';



const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    console.log(services);

    const sliceSer = services.slice(0,4);

    console.log(sliceSer);

    
    return (

        <div>
        <Container>
        <Row>
        
        <h1 className = 'top_title'>Our Services</h1>
        {
            services.map(service => <ServiceH service = {service}></ServiceH>)
        }


        </Row>
        </Container>

        </div>
        );
};


export default Service;