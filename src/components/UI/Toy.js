import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import calculator from '../Img/calculator.PNG';
import todolist from '../Img/todolist.PNG';
import rps from '../Img/rps.PNG';
import paint from '../Img/paint.PNG';
import movieapp from '../Img/movieapp.PNG';
import weatherapp from '../Img/weatherapp.jpg';
import newsapp from '../Img/newsapp.PNG';

const ToyBlock = styled.div`
    margin-left : 2rem;
    margin-right : 2rem;
    a{
        display : flex;
    justify-content : center;
    }
`;

const StyledImg = styled.div`
    width : 100%;
    img{
        max-width : 100%;
        height : auto;
    }
`;

const ToySpacer = styled.div`
    border : 1px solid gray;
    width : 100%;
    margin-top : 1rem;
    margin-bottom : 1rem;
`;

const Text = styled.div`
    text-align : center;
    margin-bottom : 1rem;
`;

const Toy = () => {
    return(
        <ToyBlock>
            <Text>
                토이 프로젝트
            </Text>
            <StyledImg>
                <Link to = '/project/calculator'>
                <img src = {calculator}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/todolist'>
                <img src = {todolist}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/rps'>
                <img src = {rps}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/paint'>
                <img src = {paint}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/movieapp'>
                <img src = {movieapp}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/weatherapp'>
                <img src = {weatherapp}/>
                </Link>
                <ToySpacer/>
                <Link to = '/project/newsapp'>
                <img src = {newsapp}/>
                </Link>
                <ToySpacer/>
            </StyledImg>
        </ToyBlock>
    )
};

export default Toy;