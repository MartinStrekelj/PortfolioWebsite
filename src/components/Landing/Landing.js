import React, { Component } from 'react';
import { Hero, HeroBody, Container, Title, Button } from "bloomer";
import "./Landing.css";

class Landing extends Component {
    render(){
        return (
            <Hero isSize="large" isFullHeight="true" isColor="dark" style={{background: "#14213D"}}> 
                <HeroBody>
                    <Container hasTextAlign="centered">
                        <Title isSize={1}> Hello, I'm <span className="emph_text">Martin Štrekelj</span>.<br/>I'm a full-stack web <span className="emph_text">developer</span>.</Title>
                        <Button href="#about" isOutlined="true" isSize="medium" isColor="dark" style={{border: "2px solid #fca311", margin: "20px", color: "#fca311"}}>Learn more about me</Button>
                        <Button isOutlined="true" isSize="medium" isColor="dark" style={{border: "2px solid #fca311", margin: "20px", color: "#fca311"}}>My work</Button>
                    </Container>
                </HeroBody>
            </Hero>

        );
    }
}

export default Landing;