import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import profile  from '../images/cv.png';

const Container = styled(animated.div)`
height: 470px;
`;

const StyledImg = styled.img`
width: 100%;
height: 100%;
background: #C4C4C4;
box-shadow: 28px 17px 3px -9px rgb(0 0 0 / 25%);
`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            
        </Container>
    );
}

export default Card;