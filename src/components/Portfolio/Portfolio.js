import React from 'react';
import { Hero, Columns, Column, Title, Container } from 'bloomer';
import Project from "../Project/Project"



const Portfolio = () => {
    const projects = [
        {
            projectName: "Pametno z odpadki - website",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: ""
        },
        {
            projectName: "Pametno z odpadki - mobile app",
            techs: ["Flutter"],
            bio: "info",
            github: "",
            demo: ""
        },
        {
            projectName: "Pod Skalco",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: ""
        },
        {
            projectName: "Ultimate Trip Planner",
            techs: ["HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: ""
        },
        {
            projectName: "RoboFriends",
            techs: ["React", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: ""
        },
        {
            projectName: "FaceRecognitionApp",
            techs: ["React", "Node.js", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: ""
        },
    ];

        return (
            <Hero isSize="large" isColor="white">
                <Container isFluid="true">
                <Title isSpaced="true" isSize={2} style={{paddingTop: "20px"}} id="portfolio">Portfolio</Title>
                <Columns isMultiline="true">
                {
                    projects.map((project) =>{
                        return (
                            <Column isSize="1/3"> <Project projectName={project.projectName} techs={project.techs} projectBio={project.bio} projectGithub={project.bio} projectDemo={project.demo} /></Column>
                        )
                    })
                }
                </Columns>
                </Container>
            </Hero>
        );
    }

export default Portfolio;