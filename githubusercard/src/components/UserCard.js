import React from "react";
import styled from "styled-components";
// import axios from 'axios';

import invertColor from "../tools/oppositeColor";






const UserCard = props => {
  // axios call needs to go here and return data from the github api
  //returned data needs to be stored in state and rendered in the card component

  const StyledCard = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-flow: wrap column;
  background: ${props.color};
  margin: 1%;
  padding-bottom: 2%;
`;

const LinkText = styled.a`
    text-decoration: none;
    color: ${props.color};
    font-size: 1.5rem;
    background: ${invertColor(props.color)};
    border: black solid 1px;
    padding: 2%;
    margin: 1%;
    &:hover{
      background: ${props.color};
      color: ${invertColor(props.color)};
      font-size: 1.75rem;
    }
`;


const Image = styled.img`
  width: 30%;
  margin: 1%;
`;

  return (
    <StyledCard>
      <h1>{props.user.login}</h1>
      <LinkText href={props.user.html_url} target="_blank">Check out my work!</LinkText>
      <Image src={props.user.avatar_url} />
    </StyledCard>
  );
};

export default UserCard;
