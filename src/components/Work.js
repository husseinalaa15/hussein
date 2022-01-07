import React,{useEffect , useCallback , useRef} from 'react';
import {Container , Row ,Col, Form , Input, Button,ProgressBar } from 'react-bootstrap';
import { workData } from '../data/data';
import { useInView } from 'react-hook-inview'

const Work = () => {
    const [ref, isVisible] = useInView({
        threshold: 1,
      })
 



      const data = workData.map((work)=>{
       
        return(
        <Container id={"work"+work.id} ref={ref}  key={work.id} fluid className='work-container' 
        style={{backgroundImage: `url(${work.image})`}}
        >

            <Row className="work-row">
                <Col data-aos="flip-left" data-aos-duration="1500" className='col-lg-6 work-left'>
                <div className='work-content' >        
                    <div className='work-text' >
                        <h2 className='work-title'>{work.title}</h2>
                        <p className='work-p'>{work.description} </p>
                        <ul className='work-list-skills'>
                            {work.skills.map((skill)=>{
                                return (
                                    <li key={skill.id} className='work-skill'>{skill.title}</li>
                                )
                            })}
                        </ul>
                        <div className="work-action text-center" >
                            <a href={work.link} className='btn btn-sm '>
                                View Project
                            </a>
                        </div>
                       
                    </div>
                </div>
                </Col>
                <Col className="col-lg-6">
                    <div></div>
                </Col>
            </Row>
            
        </Container>
        )
    })
    return (
        <section className='work-section'>
        {data}
        </section>
    )
}

export default Work
