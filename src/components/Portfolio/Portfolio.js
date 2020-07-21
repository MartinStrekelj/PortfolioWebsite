import React from 'react';
import { Hero, Columns, Column, Title, Container } from 'bloomer';
import Project from "../Project/Project"
import image from "../Project/img/Pametnozodpadki_ws.jpg"
import image1 from "../Project/img/podskalco.jpg"
import image2 from "../Project/img/UTP.jpg"
import image3 from "../Project/img/robofriends.jpg"
import image4 from "../Project/img/facerecog.jpg"



const Portfolio = () => {
    const projects = [
        {
            projectName: "Pametno z odpadki - website",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: "",
            pic: image
        },
        {
            projectName: "Kam spada moj odpadek?",
            techs: ["Flutter"],
            bio: "info",
            github: "",
            demo: "",
            pic: "./img/pametnozodpadki_ws.jpg"
        },
        {
            projectName: "Pod Skalco",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: "",
            pic: image1
        },
        {
            projectName: "Ultimate Trip Planner",
            techs: ["HTML", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: "",
            pic: image2
        },
        {
            projectName: "RoboFriends",
            techs: ["React", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: "",
            pic: image3
        },
        {
            projectName: "FaceRecognitionApp",
            techs: ["React", "Node.js", "CSS", "JavaScript"],
            bio: "info",
            github: "",
            demo: "",
            pic: image4
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
                            <Column isSize="1/3"> <Project projectPhoto={project.pic} projectName={project.projectName} techs={project.techs} projectBio={project.bio} projectGithub={project.bio} projectDemo={project.demo} /></Column>
                        )
                    })
                }
                </Columns>
                </Container>
            </Hero>
        );
    }

export default Portfolio;