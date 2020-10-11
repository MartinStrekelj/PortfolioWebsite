import { Button } from 'bloomer';
import styled from 'styled-components';
import { theme } from '../theme';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export const Arrow = styled(KeyboardArrowRightIcon)``;


export const StyledButton = styled(Button)`
    border: 2px solid ${theme.colors.yellow};
    margin: ${theme.margin.md};
    color: ${theme.colors.yellow};
    background-color: ${theme.colors.dark_blue};

    &:hover{
        background-color: ${theme.colors.yellow};
        color: ${theme.colors.white};
        border: none;
        transition: ease-in 0.2s;
        ${Arrow}{
            transform: rotate(90deg);
        }
    }

    &:active{
        color: ${theme.colors.yellow};
        background-color: ${theme.colors.dark_blue};
    }
`;