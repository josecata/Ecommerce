import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import './ItemCount.css';


const ItemCount = ({ initial, stock, onAdd }) => {
 
  const [value, setValue] = useState(initial);
  const [showButton, setshowButton] = useState(false);

  const navigate = useNavigate();

  const addProduct = (num) => {
    setValue(value + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={value === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__value">{value}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={value === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {onAdd(value); setshowButton(true)}}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
      { (showButton && navigate('/Categoria/:CategoriaId',{location:true} ) && <button
        onClick={()=>{navigate.push('/categoria/:CategoriaId')}}
        className="button-primary button-finalizar-compra"
      >
        Finalizar compra
      </button>)}
    </div>
  );
};

export default ItemCount;



