import styled from 'styled-components';
import { theme } from '../theme';

export const BranchContainer = styled.div`
    max-width: 100%;
    width: 250px;
    height: 250px;
    border-radius: 10px;
    padding: ${theme.padding.md};

    
    background-image: url(${props => props.image});
    background-color: ${theme.colors.dark_blue};
    background-size: cover;

    &:hover{
        cursor: pointer;
        background-blend-mode: screen;
        background-color: ${theme.colors.dark_blue};
    }

    @media ${theme.mobile} {
        width: 500px;
        height: 500px;
    }
`;
