import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './crypto.scss';
import Coin from './Coin';
import { Navbar,Container,Nav} from 'react-bootstrap';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (    
     <div className='crypto'>

     {/* Navbar   */}
    <Navbar bg="transparent" expand="lg">
    <Container>
    <Navbar.Brand href="/" className='brand'>Cryptocks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto navlinks ps-3">
        {/* <Nav.Link href="/sharemarket"></Nav.Link> */}
        <Nav.Link href="/crypto">Crypto Currencies</Nav.Link>
        <Nav.Link href="/news" className="newslink">News</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
    </div>
  );
}

export default App;