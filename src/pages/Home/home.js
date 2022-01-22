/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import './home.scss';


const home = () => {

  const API_KEY = 'YFA2WYIUFO88GXUM';
  
  const [stock, setStock] = useState('');
  const [xValue , setXvalue] = useState([]);
  const [yValue , setYvalue] = useState([]);

  //write a function to get the data from the API

  const apicall = () =>{
    
    const xvalue = [];
    const yvalue = [];
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=${API_KEY}`;
    fetch(url)
      .then(
        function(response){
          return response.json();
        })
      .then(
        function(data){
          const obj = data['Time Series (Daily)'];
          for (const key in obj) {
            xvalue.push(key);  
            yvalue.push(obj[key]['4. close']);
          }
          setXvalue(xvalue);
          setYvalue(yvalue);
        })
        .then(
          console.log("Xtrue values :", xValue),
          console.log("Ytrue values :", yValue)
        )}


  return <div className='homePage'>

    {/* Navbar   */}
    <Navbar bg="transparent" expand="lg">
    <Container>
    <Navbar.Brand href="/home" className='brand'>Cryptocks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto navlinks ps-3">
        <Nav.Link href="/sharemarket">Share Market</Nav.Link>
        <Nav.Link href="/crypto">Crypto Currencies</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    {/* Hero section */}

    <div className='hero'>
      <div className='hero-text'>
        <h1>Enter a company name</h1>
      </div>
      <div className='hero-form'>
        <input type='text' placeholder='company name' onChange={(e) => setStock(e.target.value)}/>
        <button onClick={apicall } >Submit</button>
      </div>
    </div>

    {/* Graph section */}
    
  </div>;
};

export default home;
