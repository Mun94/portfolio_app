import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header.js';
import {Link} from 'react-router-dom';

const WeatherappBlock = styled.div`
    margin-left : 2rem;
    margin-right : 2rem;
`;

const Contents = styled.div``;

const Title = styled.div`
    text-align : center;
    letter-spacing : 0.2rem;
    font-weight : 700;
    margin-bottom : 1rem;
`;

const Description = styled.div`
    margin-bottom : 1rem;
`;

const LinkTo = styled.div`
    display : flex;
    flex-direction : column;
    a{
        text-decoration : none;
    }
`;

const Weatherapp = () => {
    return(
        <>
        <Header/>
        <WeatherappBlock>
            <Contents>
                <Title>
                    Weatherapp
                </Title>
                <Description>
                    프로젝트 설명
                </Description>
                <LinkTo>
                    <Link to = 'https://expo.io/@danggu/weather_app' target='_blank'>이용하기</Link>
                    <Link to = 'https://github.com/Mun94/weather-app' target='_blank'>코드보기</Link>
                </LinkTo>
            </Contents>
        </WeatherappBlock>
        </>
    )
};

export default Weatherapp;