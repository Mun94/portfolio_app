import React from 'react';
import styled from 'styled-components';
import Profile from './Profile.js';
import Icons from './Icons.js';
import Category from './Category.js';

const HeaderBlock = styled.div`
    margin-right : 2rem;
    margin-left : 2rem;
`;

const Spacer = styled.div`
    height : 2rem;
`;

const Header = () => {
    return(
        <HeaderBlock>
            <Spacer/>
            <Profile/>
            <Icons/>
            <Category/>
            <Spacer/>
        </HeaderBlock>
    )
};

export default Header;
