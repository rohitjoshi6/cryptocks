/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useEffect } from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import './news.scss';
import axios from 'axios';

const news = () => {

    const [news, setNews] = React.useState([]);

    const getNews = () => {
        const headers = {
            'x-rapidapi-host': 'cryptocurrency-news-live1.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_NEWS
        }
        axios.get('https://cryptocurrency-news-live1.p.rapidapi.com/news', {headers})
        .then(res => {
            setNews(res.data);
        })
    }


    useEffect(() => {
        getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return <div className='news'>
    <Navbar bg="transparent" expand="lg">
    <Container>
    <Navbar.Brand href="/" className='brand'>Cryptocks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navlinks ps-3">
        {/* <Nav.Link href="/sharemarket">Share Market</Nav.Link> */}
        <Nav.Link href="/crypto">Crypto Currencies</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    <div className='news-container'>
            {/* Display data from news in cards */}
              {console.log(news)}
              <div className="card-container">
                {news.map(news => (
                    <div className='news-card' key={news.id}>
                        <div className='news-card-header' onClick={news.url}>
                          <a href={news.url}><h3>{news.title}</h3></a>
                            <p>{news.name}</p>
                        </div>
                    </div>
                ))}
                </div>
    </div>

  </div>;
};

export default news;
