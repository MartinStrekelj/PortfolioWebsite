import React from 'react';
import { Tag, LevelLeft} from 'bloomer';

const TechStack = ({techs}) => {
        let color = "";

        return (    
                <LevelLeft >
                {
                    techs.map((tech) => {
                        if (tech === "React"){
                            color = "info" 
                        }else if (tech === "PHP"){
                            color = "dark"
                        }else if (tech === "HTML"){
                            color = "warning"
                        }else if (tech === "CSS"){
                            color = "primary"
                        }else if (tech === "JavaScript"){
                            color = "danger"
                        }else if (tech === "Flutter"){
                            color = "success"
                        }else if (tech === "Node.js / Express.js"){
                            color = "black"
                        }  else{
                            color = "light"
                        }
                        return (
                            <Tag isColor={color} style={{margin: "5px", padding:"15px"}}>
                                <b>{tech}</b>
                            </Tag>
                        )
                    })
                }
                </LevelLeft>
        );
    }


export default TechStack;