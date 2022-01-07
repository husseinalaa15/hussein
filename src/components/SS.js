import React from 'react'
import {Container , Row ,Col, Form , Input, Button } from 'react-bootstrap';
import {BsFacebook , BsWhatsapp , BsLinkedin } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import { Link } from 'react-router-dom';
import image  from '../images/cv.png';
export const SS = () => {
    return (
        <section className='SS-section'>
            <Container fluid>
                <Row className="SS-row">
                    <Col className="skills-col">
                           <Link to="/skills" >
                               <h2>Skills</h2>
                           </Link>
                    </Col>


                    <Col className='services-col'>
                            <Link to="/services" >
                               <h2>Services</h2>
                           </Link>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
