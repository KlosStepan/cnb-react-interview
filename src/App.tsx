import React, { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import './App.css';
import axios from 'axios';

import URLEndPoint from './misc/URLEndPoint';
import URLProxyPoint from './misc/URLProxyPoint';
function App() {
  function ParseAndPrepareData(respdata: string) {
    const result = respdata.split(/\r?\n/);
    //console.log(result.slice(1));
    //result(1) -> header
    //res(2+) -> other
    var currencies = result.slice(2).map((res: string) => {
      let spl = res.split('|');
      console.log(spl);
    })
    console.log("currencies");
    console.log(currencies)
  }
  useEffect(() => {
    axios.get(URLProxyPoint, { headers: { 'Target-URL': URLEndPoint } })
      .then(function (response) {
        ParseAndPrepareData(response.data);
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
