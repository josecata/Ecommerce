import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
  return (<div className='itemList-prod'>
  {
    productos.map((producto)=>(
      <Item key={producto.id} producto={producto}></Item>
    
        ))
      }
  </div>
  )
}

export default ItemList;