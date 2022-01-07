import React from 'react'
import {Container , Row ,Col, Form , Input, Button,ProgressBar } from 'react-bootstrap';
import {skillsData} from '../data/data';
import codes from '../images/skills/codes.gif'

const Skills = () => {
    const data = skillsData.map((skill)=>{
        return(
            <li className='skill' key={skill.id}>
            <div className='skill-img'>
                <img src={skill.img}/>

            </div>
            <div className='skill-content'>
                <div className='skill-header'>
                    <h5>{skill.tite}</h5>
                    <h5>{skill.progress}%</h5>
                </div>
                <div className='skill-footer'>
                    <ProgressBar  now={skill.progress} />
                </div>
            </div>
            
        </li>
        )
    })
    return (
        <section className='skills-section'>
        <Container fluid className='skills-container'>
            <Row className="skills-row">
                <div className="skills-left col-lg-6 col-md-6 col-sm-12">
                    <div className='skills-content'>
                        <img src={codes} />
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                    </div>
                </div>


                <div className='skills-right col-lg-6 col-md-6 col-sm-12'>
                    <ul className="skills-list">
                      {data}
                    </ul>
                </div>
            </Row>
        </Container>
    </section>
    )
}

export default Skills
