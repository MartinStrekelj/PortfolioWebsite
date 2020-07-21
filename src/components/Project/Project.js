import { Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, Level,  Subtitle, CardFooter,CardFooterItem } from "bloomer";
import React, { Component } from 'react';
import TechStack from "../TechStack/TechStack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode } from '@fortawesome/free-solid-svg-icons'


class Project extends Component {

    render(){
        return (
            <Card>
                <CardHeader style={{borderBottom: "1px solid black"}}>
                    <CardHeaderTitle>{this.props.projectName}</CardHeaderTitle>
                </CardHeader>
                <CardImage>
                    <Image isRatio="3:2" src={this.props.projectPhoto}></Image>
                </CardImage>
                <CardContent>
                    <Level>
                        <TechStack techs={this.props.techs}></TechStack>
                    </Level>
                    <Subtitle>
                        {this.props.projectBio}
                    </Subtitle>
                </CardContent>
                <CardFooter>
                    <CardFooterItem href={this.props.projectDemo}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faFileCode}/></span> Demo</CardFooterItem>
                    <CardFooterItem href={this.props.projectGithub}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faCode}/></span> Project code </CardFooterItem>
                </CardFooter>
            </Card>
        );
    }
}


export default Project;