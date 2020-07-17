import React, { Component } from 'react';
import { Container, Subtitle} from "bloomer";
import "./Bio.css"


class Bio extends Component {

    render(){
        return (
            <Container isFluid="true"  hasTextAlign="left" style={{marginTop: "20px"}} >
                <Subtitle isSize={5}>I'm a Computer Science Student with passion for Web Applications that are <span className="emph_bio">performant</span>, <span className="emph_bio">responsive</span>,
                    <span className="emph_bio"> visually appealing</span> and <span className="emph_bio">intuitive</span>.
                    <br></br>
                    </Subtitle>
                    <Container style={{padding: "20px", border: "2px solid #14213D"}}>
                        <Subtitle> <span className="emph_bio">My Background</span></Subtitle>
                        <Subtitle isSize={6}>
                        <ul> 
                            <li style={{padding: "5px"}}><span className="emph_bio">2018</span> - <b>Introduction to programming</b> with Python and basics of HTML/CSS in High school Informatics class <br/></li>
                            <li style={{padding: "5px"}}><span className="emph_bio">2019</span> - University of Computer Science and Informatics in Ljubljana. Start of my journey with fundamentals of programming with <b>Python and Java</b>. During summer I enrolled in Smart Ninja Introduction to Web Development course where I studied front-end <b>HTML/CSS/JS</b> and back-end <b>Python/Flask</b>. <br></br></li>
                            <li style={{padding: "5px"}}><span className="emph_bio">2020</span> - Started learning <b>React</b> with online courses and personal projects. When working on my projects I experimented and learned back-end technologies <b>PHP, Node.js/Express.js and Python/Flask</b>. My latest experience is working on a student project "Pametno z odpadki" where I developed a mobile application in <b>Flutter</b> and builded a project website.</li>
                            <li> To find out more about me, see <a href="#portfolio" className="emph_bio">my work</a> or <a className="emph_bio" href="contact">contact me!</a> </li>
                        </ul> 
                        </Subtitle>
                    </Container>
                    <br></br>
                        <Subtitle isSpaced="true" isSize={4}>
                        I'm inquisitive and ready to tackle new challenges and projects.
                    </Subtitle>
            </Container>
        );
    }
}

export default Bio;