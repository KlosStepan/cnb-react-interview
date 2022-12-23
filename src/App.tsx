import React, { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import './App.css';
import axios from 'axios';

import URLEndPoint from './misc/URLEndPoint';
import URLProxyPoint from './misc/URLProxyPoint';

function App() {
  useEffect(() => {
    axios.get(URLProxyPoint, { headers: { 'Target-URL': URLEndPoint } })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
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
