import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>header</Row>
        <Row>menu</Row>
        <Row>body</Row>
        <Row>footer</Row>
      </Container>
    </div>
  );
}

export default App;
