import React from 'react';
import './landing.scss'

const landing = () => {
    
  const redirect = () => {
      window.location.href = '/home';  
    } 

  return <div className='landingPage'>
    <div className='landingPage_container'>
        <div className='landingPage_container_title'>
            <h1>Welcome to the <span>Cryptocks</span></h1>
        </div>
        <div className='landingPage_container_subtitle'>
            <h2>Stay updated with crypto and stock market</h2>
        </div>
        <div className='landingPage_container_button'>
            <button onClick={redirect}>Get Started</button>
        </div>
    </div>
  </div>;
};

export default landing;
