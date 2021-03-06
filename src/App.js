import React from 'react';
import Routes from './routes';
import Menu from './menu';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Menu />
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
