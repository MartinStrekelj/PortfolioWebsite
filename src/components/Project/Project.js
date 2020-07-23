import { Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, Level,  Subtitle, CardFooter,CardFooterItem } from "bloomer";
import React, { Component } from 'react';
import TechStack from "../TechStack/TechStack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode } from '@fortawesome/free-solid-svg-icons'


class Project extends Component {

    render(){
        return (
            <Card style={{height: "100%", display:"flex", flexDirection: "column"}}>
                <CardHeader style={{borderBottom: "1px solid black"}}>
                    <CardHeaderTitle>{this.props.projectName}</CardHeaderTitle>
                </CardHeader>
                <CardImage>
                    <Image isRatio="" src={this.props.projectPhoto}></Image>
                </CardImage>
                <CardContent>
                    <Level>
                        <TechStack techs={this.props.techs}></TechStack>
                    </Level>
                    <Subtitle>
                        {this.props.projectBio}
                    </Subtitle>
                </CardContent>
                <CardFooter style={{marginTop: "auto"}}>
                    <CardFooterItem target="_blank" href={this.props.projectDemo}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faFileCode}/></span> Preview</CardFooterItem>
                    <CardFooterItem href={this.props.projectGithub}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faCode}/></span> Project code </CardFooterItem>
                </CardFooter>
            </Card>
        );
    }
}


export default Project;