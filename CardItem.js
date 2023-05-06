import React from 'react'
import {Link} from 'react-router-dom'
import './CardItem.css'
function CardItem(props) {
  return (
    <>
    <div class="main-item">
    <div class="avatar-bg">
      <div class="avatar">
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='option-title'>{props.text}</h5>
          </div>
        </Link>
      </li>
      </div>
      </div>
      </div>
    </>
  );
}

export default CardItem