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
        ParseAndStore(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  function ParseAndStore(respdata: string) {
    const result = respdata.split(/\r?\n/);
    const initInfo = result.at(0);
    //info # - initInfo - txt
    console.log(initInfo)
    result.shift();
    console.log(result);
    let tableBody = result.map((res: any) => res.split('|'));
    const tableHeader = tableBody.at(0);
    //info #1 - tableHeader - list of 5
    console.log(tableHeader);
    tableBody.shift();
    if (tableBody[tableBody.length - 1].at(0) === "") {
      console.log("ano, last [\"\"] removing last")
      tableBody = tableBody.slice(0, -1)
    }
    //info #2 - tableBody - list of [5 strings]
    console.log(tableBody);
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
