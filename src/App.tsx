import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
//Page blocks
import Header from './blocks/Header';
import Body from './blocks/Body';
import Footer from './blocks/Footer';
//Redux set state functions
import { setDate } from './redux/actions/currenciesActions';
import { setHeader } from './redux/actions/currenciesActions';
import { setBody } from './redux/actions/currenciesActions';
//Ajax call endpoints
import URLEndPoint from './misc/URLEndPoint';
import URLProxyPoint from './misc/URLProxyPoint';

function App() {
  const dispatch = useDispatch();
  //Axios GET call via our proxy at cors-proxy.stkl.cz
  async function FetchData() {
    axios.get(URLProxyPoint, { headers: { 'Target-URL': URLEndPoint } })
      .then(function (response) {
        //console.log(response.data)
        ParseAndStoreData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  //Further call - parse and store reponse data
  function ParseAndStoreData(respdata: string) {
    const result = respdata.split(/\r?\n/);
    const initInfo = result.at(0);
    //info #0 - initInfo - txt
    //console.log(initInfo)
    dispatch(setDate(initInfo));
    result.shift();
    let tableBody = result.map((res: any) => res.split('|'));
    const tableHeader = tableBody.at(0);
    //info #1 - tableHeader - list of 5
    //console.log(tableHeader);
    dispatch(setHeader(tableHeader));
    tableBody.shift();
    if (tableBody[tableBody.length - 1].at(0) === "") {
      //console.log("yes, last [\"\"] removing last")
      tableBody = tableBody.slice(0, -1)
    }
    //rewrap from API's '|'sep. values [["",...],...] to list of objects with injected keys from header [{head[0]: bodyrow[0], head[1]: bodyrow[1], head[2]: bodyrow[2], ...},...]
    let listOfObjects = [];
    for (const curr of tableBody) {
      const obj = curr.reduce((obj: any, cur: any, i: any) => { return { ...obj, [(tableHeader[i]).toLowerCase()]: cur }; }, {});
      listOfObjects.push(obj);
    }
    //info #2 - listOfObjects
    //console.log(listOfObjects);
    dispatch(setBody(listOfObjects));
  }
  useEffect(() => {
    FetchData();
  }, [])
  return (
    <div className="App">
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
