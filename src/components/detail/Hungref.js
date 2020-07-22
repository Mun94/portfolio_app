import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header.js';

const HungrefBlock = styled.div`
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

const Hungref = () => {
    return(
        <>
        <Header/>
        <HungrefBlock>
            <Contents>
                <Title>
                    Hungref
                </Title>
                <Description>
                    프로젝트 설명
                </Description>
                <LinkTo>
                    <a href = 'https://mun94.github.io/HungRef/' target='_blank'>이용하기</a>
                    <a href = 'https://github.com/HungRef/HungRef' target='_blank'>코드보기</a>
                </LinkTo>
            </Contents>
        </HungrefBlock>
        </>
    )
};

export default Hungref;