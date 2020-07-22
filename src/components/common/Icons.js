import React from 'react';
import styled from 'styled-components';
import {GoMarkGithub} from 'react-icons/go';

const IconsBlock = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 1rem;
    a{
        display : flex;
        justify-content : center;
        align-items : center;
        text-decoration : none;
        border-radius : 100%;
        border : 1px gray solid;
        padding : 0.2rem;
        background : rgba(0,0,0,0.08); 
    }
`;

const Icons = () => {
    return(
        <IconsBlock>
            <a href='https://github.com/Mun94' target='_blank'>
            <GoMarkGithub size='25'/>
            </a>
        </IconsBlock>
    )
};

export default Icons;