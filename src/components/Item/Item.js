import React from 'react';
import './Item.css';

const Item = ({producto}) => {
  return (
  <div className='item-prod'>
    <img src={producto.img} alt={producto.title} />
    <p>{producto.title}</p>
    <p>{producto.precio}</p>
    <p>{producto.descripcion}</p>
    
  </div>
  )
};

export default Item;