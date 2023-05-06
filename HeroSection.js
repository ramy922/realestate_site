import React from 'react'
import {Button} from './Button'
import './HeroSection.css';
import '../App.css';
function HeroSection() {
  return (

    <div className='hero-container'>
      <img src='./mainPhoto.jpg' alt='coding phot' />
      <h1> לחפש.למצוא.לרכוש</h1>
    
     <input className='searchInput' type='search'></input>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}



export default HeroSection