import React from 'react';
import styled from 'styled-components';
import './App.css';

import UserList from './components/UserList'

function App() {

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <div className="App">

      <Container>
        <UserList/>
      </Container>
    </div>
  );
}

export default App;
