import React from 'react'
import {StyledSkills} from './styled';

const Skills = ({field, skills}) => {
    return (
        <StyledSkills>
            <b>{field}</b>
            {skills && skills.map(skill => <h1>{skill}</h1>)}
        </StyledSkills>
    )
}

export default Skills

