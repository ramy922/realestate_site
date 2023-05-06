import React from 'react';
// import {link} from 'react-router-dom';
import Product from './Product'
import './Products.css'


function Products() {
  return (
    <div className='cards'>
        <h1> </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
               
                <Product
                src='./ecom.jpg'
                text='אספקת קונטריים מהירה ומחירים הוגנים '
                label='finacial'
                path='/services'
                />
               
                 <Product
                src='./important.jpg'
                text=" ליווי צוות מקצועי שילווה אותכם מתחילת התהליך של היבוא "
                label='finacial'
                path='/services'
                />
           
                 <Product
                src='./logistics.jpg'
                text=' שירות לוגיסתי יעיל ומהיר'
                label='finacial'
                path='/services'  
                />
                </ul>
                {/* <ul  className='cards__items'>
               <Product
                src='./collabrtion.jpg'
                text=' '
                label='finacial'
                path='/services'  
                />

                <Product
                src='./money1.jpg'
                text=''
                label='finacial'
                path='/services'  
                />
                </ul> */}
                 
            </div>
        </div>
    </div>
  )
}

export default Products