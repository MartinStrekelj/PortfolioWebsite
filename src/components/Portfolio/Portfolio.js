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
            projectName: "www.pametnozodpadki.si",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "Product for Student project ŠIPK. Website was an overview of group activity and results.",
            github: "https://github.com/SWManagement/SWManagementWebsite",
            demo: "www.pametnozodpadki.si",
            pic: image
        },
        {
            projectName: "Kam spada moj odpadek?",
            techs: ["Flutter"],
            bio: "",
            github: "https://github.com/SWManagement/FlutterMobileApp",
            demo: "",
            pic: "./img/pametnozodpadki_ws.jpg"
        },
        {
            projectName: "Pod Skalco",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "Activity and event management web application. Portfolio project was made for a fictional Sport club  to manage events and gather interes for its members.",
            github: "https://github.com/MartinStrekelj/podSkalco",
            demo: "",
            pic: image1
        },
        {
            projectName: "Ultimate Trip Planner",
            techs: ["HTML", "CSS", "JavaScript"],
            bio: "Trip planner implemented with Google directions API.",
            github: "https://github.com/MartinStrekelj/UltimateTripPlanner",
            demo: "https://martinstrekelj.github.io/UltimateTripPlanner/",
            pic: image2
        },
        {
            projectName: "RoboFriends",
            techs: ["React", "CSS", "JavaScript"],
            bio: "Introductory project for learning React framework. RoboFriends is a responsive application with funky randomly generated and searchable robots.",
            github: "",
            demo: "",
            pic: image3
        },
        {
            projectName: "FaceRecognitionApp",
            techs: ["React", "Node.js", "CSS", "JavaScript"],
            bio: "My first bigger project to learn React and Node.js. Application with help of Clarifai API recognises faces on pictures.",
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
                            <Column isSize="1/3"> <Project projectPhoto={project.pic} projectName={project.projectName} techs={project.techs} projectBio={project.bio} projectGithub={project.github} projectDemo={project.demo} /></Column>
                        )
                    })
                }
                </Columns>
                </Container>
            </Hero>
        );
    }

export default Portfolio;