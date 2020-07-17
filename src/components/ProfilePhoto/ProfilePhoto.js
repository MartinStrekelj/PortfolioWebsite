import React, { Component } from 'react';
import photo from "./martin.jpg"
import "./ProfilePhoto.css"


class ProfilePhoto extends Component {
    render(){
        return (
            <img src={photo} alt="profile"></img>
        );
    }
}

export default ProfilePhoto;