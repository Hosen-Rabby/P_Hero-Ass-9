import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap'
import AboutH from '../AboutH/AboutH';
import Service from '../Service/Service';
import HomeH from './HomeH';
import './Home.css'



const Home = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    const sliceSer = services.slice(0,4);

    return (
        <div>

        <div className = 'banner'>
        <Image src="edu.jpg" rounded className = 'img-fluid'/>

            </div>        
        <AboutH></AboutH>
        
        <Container>

        <Row>
        <h1>Our Services</h1>
        
        
        {
            sliceSer.map(sllicer => <HomeH sllicer = {sllicer}></HomeH>)
        }
        </Row>
        </Container>
        </div>
        );
        };

        export default Home;