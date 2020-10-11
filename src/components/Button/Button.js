import React from 'react'
import { StyledButton, Arrow } from './styled';

const Button = ({content, href=''}) => {
    const isLink = href ? true : false;
    if (isLink) {
        return (
            <a href={href}>
                <StyledButton>
                    <strong>{content}</strong> <Arrow/>
                </StyledButton>
            </a>
        )
    } else {
        return (
                <StyledButton>
                    <strong>{content}</strong> <Arrow/>
                </StyledButton>
        )
    }
}

export default Button
