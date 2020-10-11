import React, { Component } from 'react';
import { Hero, HeroBody, Container, Title } from "bloomer";
import Button from '../../components/Button/Button';
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
                        <Title style={{userSelect: "none"}} isSize={1}> Hello, I'm <span className="emph_text">Martin Štrekelj</span>,<br/>a web <span className="emph_text">developer</span>.</Title>
                        <Button href="#about" content={'Learn more about me'}/>
                        <Button href="#portfolio" content={'My work'}/>
                    </Container>
                </HeroBody>
            </Hero>

        );
    }
}

export default Landing;