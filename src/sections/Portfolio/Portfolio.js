import React from 'react';
import { Hero, Columns, Column, Title, Container } from 'bloomer';
import Project from '../../components/Project/Project'
import { projects } from './projectList';

const Portfolio = () => {
        return (
            <Hero isSize="large" isColor="white">
                <Container className="containerZ" isFluid="true">
                <Title isSpaced="true" isSize={2} style={{paddingTop: "20px"}} id="portfolio">Portfolio</Title>
                <Columns isMultiline="true">
                {
                    projects.map((project) =>{
                        return (
                            <Column isSize="1/3"> 
                                <Project 
                                    projectPhoto={project.pic} 
                                    projectName={project.projectName} 
                                    techs={project.techs} 
                                    projectBio={project.bio} 
                                    projectGithub={project.github} 
                                    projectDemo={project.demo}
                                    projectSample={project.sampleLogin}
                                    projectSampleName={project.sampleLoginName}
                                    projectSamplePass={project.sampleLoginPass}  
                                />
                            </Column>
                        )
                    })
                }
                </Columns>
                </Container>
            </Hero>
        );
    }

export default Portfolio;