import React from 'react';
import { Hero, Title, Container, Columns, Column} from "bloomer";
import Skills from "../../components/Skills/Skills";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto";
import Bio from "../Bio/Bio";


const About = () => {


        return (
            <Hero className="containerZ" isSize="large" isColor="white">
                    <Container className="containerZ" isFluid="true">
                        <Title isSpaced="true" isSize={2} style={{paddingTop: "20px"}} id="about">About</Title>
                        <Columns style={{marginTop: "25px"}} hasTextAlign="centered">
                            <Column isSize="2/3">
                                <Columns >
                                    <Column isSize="1/3">
                                        <ProfilePhoto />
                                    </Column>
                                    <Column isSize="2/3">
                                        <Bio />
                                    </Column>
                                </Columns>
                            </Column>
                            <Column isSize="1/3">
                                <Title isSize={2} > Skills </Title>
                                <Skills field="Web Development" skills={["html", "css"]} />
                                </Column>
                        </Columns>  
                    </Container>
            </Hero>
        );
    }

export default About;