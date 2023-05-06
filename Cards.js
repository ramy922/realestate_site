import React from 'react';
import {link} from 'react-router-dom';
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    
    <div className='cards'>
    {/* <h1>Check out our EPIC development fields!</h1> */}
    <p className='p'>Re`em expertises</p>
    <div className='cards__container'>
      <div className='cards__wrapper'>
      <ul className='cards__items'> 
          <CardItem
          className='reveal'
            src='./design.jpg'
            text='Explore the hidden power of perfect design'
            label='design'
            path='/services'
          />
        
          <CardItem
             className='reveal'
            src='./alderly.jpg'
            text='our websites is build for all people'
            label='Terget audience'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
             className='reveal'
            src='./ecom.jpg'
            text='We build the most proftibale e commerce sites  '
            label='e commerce'
            path='/services'
          />
          <CardItem
             className='reveal'
            src='./phone.jpg'
            text='we also build phone and web apps'
            label='apps'
            path='/products'
          />
          {/* <CardItem
            src='images/img-8.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
          /> */}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Cards