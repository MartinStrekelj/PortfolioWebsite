import React, { Component } from 'react';
import { Container, Subtitle } from "bloomer";



class SampleLogin extends Component {

    render(){
        return (
            <Container >
                <Subtitle style={{padding: "5px"}}>
                <hr></hr>
                    <b>Demo login information</b>
                    <br></br>
                    Username: {this.props.sampleLoginName}
                    <br></br>
                    Password: {this.props.sampleLoginPass}
                </Subtitle>
            </Container>
        );
    }
}

export default SampleLogin;