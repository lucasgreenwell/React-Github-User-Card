import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
    display: flex;
    justify-content: center
`


const StyledCard = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-flow: wrap column
    background: green
`;

class Card extends React.Component {
    constructor(){
        super();
        this.state = {}
    }
    // axios call needs to go here and return data from the github api
    //returned data needs to be stored in state and rendered in the card component

    // axios.get('githubapiurlgoeshere')
    //     .then((res) => {
    //          console.log(res)
    //          //reset state here
    //     })
    //     .catch(err => {
    //         concole.log(err);
    //     })
    
    render(){
        return <CardContainer>
            <StyledCard>Github User Card</StyledCard>
        </CardContainer>;
    }
}

export default Card 