import React, { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import './App.css';
import axios from 'axios';

import URLEndPoint from './misc/URLEndPoint';
import URLProxyPoint from './misc/URLProxyPoint';
function App() {
  async function FetchData() {
    axios.get(URLProxyPoint, { headers: { 'Target-URL': URLEndPoint } })
      .then(function (response) {
        //console.log(response.data)
        ParseAndPrepareData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  function ParseAndPrepareData(respdata: string) {
    const result = respdata.split(/\r?\n/);
    //console.log(result.slice(1));
    //result(1) -> header
    //res(2+) -> other
    console.log(result);
    //.slice(2)
    result.map((res: string) => {
      let spl = res.split('|');
      console.log(spl);
    })
    //let slicedReducedStuff =
    //1 datum
    //2 header
    //last drop - or if not null to <Line> cmp
  }
  useEffect(() => {
    FetchData();
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
