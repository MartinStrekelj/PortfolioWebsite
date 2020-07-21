import React, { Component } from 'react';
import { Hero, HeroBody, Container, Title, Button } from "bloomer";
import "./Landing.css";
import Particles from 'react-particles-js';

const particleParams = {
            particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
    }
}
class Landing extends Component {
    render(){
        return (
            <Hero isSize="large" isFullHeight="true" isColor="dark" style={{background: "#14213D"}}>
                 <Particles className="particles" params={particleParams} />
                <HeroBody>
                    <Container className="containerZ" hasTextAlign="centered">
                        <Title isSize={1}> Hello, I'm <span className="emph_text">Martin Štrekelj</span>.<br/>I'm a full-stack web <span className="emph_text">developer</span>.</Title>
                        <Button href="#about" isOutlined="true" isSize="medium" isColor="dark" style={{border: "2px solid #fca311", margin: "20px", color: "#fca311"}}>Learn more about me</Button>
                        <Button href="#portfolio" isOutlined="true" isSize="medium" isColor="dark" style={{border: "2px solid #fca311", margin: "20px", color: "#fca311"}}>My work</Button>
                    </Container>
                </HeroBody>
            </Hero>

        );
    }
}

export default Landing;