import React from "react";
import styled from "styled-components";
import profile from "../../Img/profile.jpg";

const ProfileBlock = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  .avatar {
    width: 11.5rem;
    height: 11.5rem;
    border-radius: 70%;
    overflow: hidden;
    border: 1px gray solid;
  }

  .avatar > img {
    width: 100%;
    height: 115%;
    object-fit: cover;
  }
`;

const Profile = () => {
  return (
    <ProfileBlock>
      <div className="avatar">
        <img src={profile} alt="profile" />
      </div>
    </ProfileBlock>
  );
};

export default Profile;
