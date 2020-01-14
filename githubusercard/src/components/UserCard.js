import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`


const StyledCard = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-flow: wrap column
    background: green
  
`;

const Image = styled.img`
    width: 30%;
`;

const UserCard = props => {
    // axios call needs to go here and return data from the github api
    //returned data needs to be stored in state and rendered in the card component
        return (
<CardContainer>
    <StyledCard>
    <h1>
        {props.user.login}
    </h1>
    <Image src={props.user.avatar_url}/>
    </StyledCard>
</CardContainer>
        )
    
}

export default UserCard;