import React,{useState} from 'react'
import {Container , Row ,Col, Form , Input, Button } from 'react-bootstrap';
import {BsFacebook , BsWhatsapp , BsLinkedin } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {FiSend} from 'react-icons/fi';
import image  from '../images/cv.png';
import { meData , contactData } from '../data/data';

export const Contact = () => {
    const [email,setEmail] = useState('hussein.alaa12199@gmail.com"');
    const [subj,setSubj] = useState('');
    
    // const getData = (e)=>{
    //     setEmail(");
    // }
    const getSubj = (e)=>{
        setSubj(e.target.value);

    }


    const data = contactData.map((data)=>{
        return (
            <li key={data.id} className='single-data'> {data.icon} {data.text}</li>
        )
    })
    const icons = meData.map((data)=>{
        return ( 
            data.social.map((social)=>{
                return (
                    <li key={social.id} className='icon'>
                        <a href={social.link} target={social.target}> {social.icon}</a> 
    
                    </li>

                )
            })
        )
    })
    return (
        <section className='contact-section'>
            <Container fluid>
                <Row>
                    <div className='contact-left col-lg-6 col-md-6 col-sm-12'>
                        <div className='contact-content'>
                            <div className='contact-text'>
                                <h2 className='contact-title'> Get in Touch.</h2>
                                <ul className='contact-data'>
                                    {data}
                                   
                                </ul>
                            </div>
                            <div className='contact-actions'>
                                <ul className='contact-icons'>
                                    {icons}
                                   {/* <li className='icon'> <BsFacebook /> </li>
                                   <li className='icon'> <BsWhatsapp /> </li>
                                   <li className='icon'> <BsLinkedin /> </li>
                                   <li className='icon'> <SiGmail/> </li> */}
                                </ul>
                               
                            </div>
                        </div>
                    </div>


                    <div className='contact-form-col col-lg-6 col-md-6 col-sm-12'>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" className='contact-form-container'>
                            <Form >
                               
                                <Form.Group className="mb-3 contact-input" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" onChange={getSubj} rows={7} > 
                                        Write Your Message
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className=" text-center contact-input" >
                                    <a  href={"mailto:"+email+"?body="+subj} className='sendbtn'>Send <FiSend /> </a>
                                </Form.Group>
                                
                            </Form>

                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
