import React from 'react';
import { Hero, Columns, Column, Title, Container } from 'bloomer';
import Project from "../Project/Project"
import image from "../Project/img/pametnozodpadki.png"
import image1 from "../Project/img/podskalco.png"
import image2 from "../Project/img/UTP.png"
import image3 from "../Project/img/robofriends.png"
import image4 from "../Project/img/faceRecog.png"



const Portfolio = () => {
    const projects = [
        {
            projectName: "www.pametnozodpadki.si",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "Product for Student project ŠIPK. Website was an overview of group activity and results.",
            github: "https://github.com/SWManagement/SWManagementWebsite",
            demo: "http://www.pametnozodpadki.si/",
            sampleLogin: "",
            pic: image
        },
        {
            projectName: "FaceRecognitionApp",
            techs: ["React", "Node.js / Express.js", "CSS", "JavaScript"],
            bio: "My first bigger project to learn React and Node.js. Application with help of Clarifai API recognises faces on pictures. I also build my own back-end with Express.js and Postgres DB.",
            github: "https://github.com/MartinStrekelj/face-recognition",
            demo: "https://ms-face-recognition.herokuapp.com/",
            sampleLogin: true,
            sampleLoginName: "test@email.com",
            sampleLoginPass: "test",
            pic: image4
        },
        {
            projectName: "Pod Skalco",
            techs: ["PHP", "HTML", "CSS", "JavaScript"],
            bio: "Activity and event management web application. Portfolio project was made for a fictional Sport club and its members to manage events.",
            github: "https://github.com/MartinStrekelj/podSkalco",
            sampleLogin: true,
            sampleLoginName: "test@email.com",
            sampleLoginPass: "test",
            demo: "",
            pic: image1
        },
        {
            projectName: "Ultimate Trip Planner",
            techs: ["HTML", "CSS", "JavaScript"],
            bio: "Trip planner implemented with Google directions API.",
            github: "https://github.com/MartinStrekelj/UltimateTripPlanner",
            demo: "https://martinstrekelj.github.io/UltimateTripPlanner/",
            sampleLogin: false,
            sampleLoginName: "test@email.com",
            sampleLoginPass: "test",
            pic: image2
        },
        {
            projectName: "RoboFriends",
            techs: ["React", "CSS", "JavaScript"],
            bio: "Introductory project for learning React framework. RoboFriends is a responsive application with funky randomly generated and searchable robots.",
            github: "https://github.com/MartinStrekelj/RoboFriends",
            demo: "https://martinstrekelj.github.io/RoboFriends/",
            sampleLogin: false,
            sampleLoginName: "test@email.com",
            sampleLoginPass: "test",
            pic: image3
        },
        {
            projectName: "Kam spada moj odpadek?",
            techs: ["Flutter"],
            bio: "Product for Student project ŠIPK. Main mobile application functionality is to scan products barcode and provide recycling information. Successful scans rewards user with points to water the plant which grows on achieved thresholds. Application is available on Google Play.",
            github: "https://github.com/SWManagement/FlutterMobileApp",
            sampleLogin: false,
            sampleLoginName: "test@email.com",
            sampleLoginPass: "test",
            demo: "",
            pic: image
        },
    ];

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