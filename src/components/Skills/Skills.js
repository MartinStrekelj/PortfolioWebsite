import React, { Component } from 'react';
import { Container, Progress} from "bloomer";


class Skills extends Component {

    render(){
        return (
            <Container isFluid="true">
                <b style={{ padding : "5px"}}>{this.props.skill}</b>
                <Progress isSize="medium" isColor="warning" value={this.props.skillvalue} max={100}/> 
            </Container>

        );
    }
}

export default Skills;