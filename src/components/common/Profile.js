import React from 'react';
import styled from 'styled-components';
import profile from '../Img/profile.jpg';

const ProfileBlock = styled.div`
    margin-bottom : 1rem;
    display : flex;
    justify-content : center;
    .avatar{
        width : 150px;
        height : 150px;
        border-radius : 70%;
        overflow : hidden;
    }

    .avatar>img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`;


const Profile = () => {
    return (
        
        <ProfileBlock> 
                <div className = 'avatar'>
                    <img src = {profile}/>
                </div>
        </ProfileBlock>
        
    )
};

export default Profile;