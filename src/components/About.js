import React from 'react'
import {Container , Row ,Col, Button} from 'react-bootstrap';
import image  from '../images/cv.png';
import { meData } from '../data/data';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring' ;
import hCV from '../images/husseincv.pdf'
import Card from './Card'

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const About = () => {
    // const [props,set] = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })
          
    const data = meData.map((data)=>{
        return(
        <div className='about-content' key={data.id}>        
        <div className='about-text' >
            <h2 className='about-title'>About Me.</h2>
            <p className='about-p'>{data.description}</p>
        </div>
        <div className='about-actions'>
            <ul className='about-icons'>
                {data.social.map((social)=>{
                    return (
                    <li key={social.id} className='icon'> 
                        <a href={social.link} target={social.target}> {social.icon}</a> 
                    </li>
                    )
                })}
            </ul>
           <a href={hCV} download className='btn btn-sm '>
                Download Cv.
            </a>
        </div>
        </div>
        )
    })

   
    return (
        <section className='about-section'>
            <Container className="pt-5">
                <Row>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                            {data}
                            
                    </div>
                    <div className='about-photo-col col-lg-6  col-md-6 col-sm-12'>
                            {/* <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                  style={{ transform: props.xys.interpolate(trans) }}                            
                            > */}
{/* data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" */}
                        {/* <div className='about-photo-container' >
                            <img className='about-photo' src={image} />
                        </div> */}
                        <Card />
                        {/* </animated.div> */}
                    </div>
                </Row>
            </Container>
        </section>
    )
}
