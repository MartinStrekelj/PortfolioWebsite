import React, { Component } from 'react';
import { Footer, Title, Hero, HeroHeader, HeroBody, Level, LevelItem, LevelLeft, Subtitle } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

class Contact extends Component{
    render(){
        return(
            <Footer id="contact" style={{backgroundColor: "#14213D"}} >
                <Hero isColor="dark" style={{backgroundColor: "#14213D"}}>
                    <HeroHeader>
                        <Title isSize={2}>Contact</Title>
                        <Subtitle isSize={4}>Please get in touch and let's create something exciting!</Subtitle>
                    </HeroHeader>
                    <HeroBody>
                        <Level>
                            <LevelLeft>
                                <LevelItem><span style={{padding: "5px"}}><FontAwesomeIcon icon={faEnvelope}/></span>martin.strekelj123@gmail.com</LevelItem>
                                <LevelItem style={{color: "white"}} href="https://github.com/MartinStrekelj"><span style={{padding: "5px"}}><FontAwesomeIcon icon={faGithub}/></span>MartinStrekelj</LevelItem>
                                <LevelItem style={{color: "white"}} href="https://www.linkedin.com/in/martin-%C5%A1trekelj-951b2818a/"><span style={{padding: "5px"}}><FontAwesomeIcon icon={faLinkedin}/></span>Martin Štrekelj</LevelItem>
                            </LevelLeft>
                        </Level>
                    </HeroBody>
                </Hero>
            </Footer>
        );
    }
}


export default Contact;