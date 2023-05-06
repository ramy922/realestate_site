import React from 'react'
import {Link} from 'react-router-dom'
import './CardsItems.css'
function Product(props) {
  return (
    <>
    <div className='card_div'>
    <li>
    <Link className='cards__item__link ' to={props.path}>
        <figure className='.cards__item__img' data-catagory={props.label}>
          <div>
            <img  src={props.src} alt='travel Image'/>
        
            </div>
        </figure>
        <div className='cards__item__info'>
            <h5 className='cards__item__text '>{props.text}</h5>
        </div>
    </Link>
    </li>
    </div>
    </>
  );
}

export default Product