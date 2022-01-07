import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { servicesData } from '../data/data';




const Services = () => {
    const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
    const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
    const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
    const [gone] = useState(() => new Set()) // The set flags all the servicesData that are flicked out
    
    

    const [props, set] = useSprings(servicesData.length, i => ({ ...to(i), from: from(i) })) ;// Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 ;// If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 ;// Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set(i => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active servicesData lift up a bit
        return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
      })
      if (!down && gone.size === servicesData.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })

    const getData= (num)=>{
        if (num == 0 ){
            return (
                <Card.Body className="service-cardbody">
                     <Card.Title className="">{servicesData[0].icon}</Card.Title>
                     <Card.Text className="">
                     {servicesData[0].text}
                     </Card.Text>
                </Card.Body>
                
            )
        }else if( num == 1){
            return (
                <Card.Body className="service-cardbody">
                     <Card.Title className="">{servicesData[1].icon}</Card.Title>
                     <Card.Text className="">
                     {servicesData[1].text}
                     </Card.Text>
                </Card.Body>
            )
        }else if( num == 2){
            return (
                <Card.Body className="service-cardbody">
                <Card.Title className="">{servicesData[2].icon}</Card.Title>
                <Card.Text className="">
                {servicesData[2].text}
                </Card.Text>
           </Card.Body>
            )
        }else if( num == 3){
            return (
                <Card.Body className="service-cardbody">
                <Card.Title className="">{servicesData[3].icon}</Card.Title>
                <Card.Text className="">
                {servicesData[3].text}
                </Card.Text>
           </Card.Body>
            )
        }else if( num == 4){
            return (
                <Card.Body className="service-cardbody">
                <Card.Title className="">{servicesData[4].icon}</Card.Title>
                <Card.Text className="">
                {servicesData[4].text}
                </Card.Text>
           </Card.Body>
            )
        }else if( num == 5){
            return (
                <Card.Body className="service-cardbody">
                <Card.Title className="">{servicesData[5].icon}</Card.Title>
                <Card.Text className="">
                {servicesData[5].text}
                </Card.Text>
           </Card.Body>
            )
        }
    }

    const anim =  props.map(({ x, y, rot, scale }, i) => {

        return (
           
        <animated.div className='service-transform' key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
         
          <animated.div  {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${servicesData.map((service)=>{return service.text})})` }} >
          <Card className="service-card" >
                    {getData(i)}
            </Card> 
            </animated.div>

        </animated.div>
      )})
       

     
    return (
        <section class="services-section">
        <Container>
            <Row className='services-row'>     
            
            {anim}
            


            </Row>
        </Container>

        </section>
    )
}

export default Services
