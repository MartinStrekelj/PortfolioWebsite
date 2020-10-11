import { Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, Level,  Subtitle, CardFooter,CardFooterItem } from "bloomer";
import React, { Component } from 'react';
import TechStack from "../TechStack/TechStack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode } from '@fortawesome/free-solid-svg-icons'
import SampleLogin from "./SampleLogin/SampleLogin"


class Project extends Component {


    render(){
        const sampleLogin = this.props.projectSample
        const sampleLoginName = this.props.projectSampleName
        const sampleLoginPass = this.props.projectSamplePass
        let sample;
        if(sampleLogin){
            sample = 
            <SampleLogin 
            sampleLoginName={sampleLoginName}
            sampleLoginPass={sampleLoginPass}
            />
        }else{
            sample = "";
        }

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
                    {sample}
                </CardContent>
                <CardFooter style={{marginTop: "auto"}}>
                    <CardFooterItem target="_blank" href={this.props.projectDemo}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faFileCode}/></span> Preview</CardFooterItem>
                    <CardFooterItem target="_blank" href={this.props.projectGithub}> <span style={{padding: "5px"}}><FontAwesomeIcon icon={faCode}/></span> Project code </CardFooterItem>
                </CardFooter>
            </Card>
        );
    }
}


export default Project;