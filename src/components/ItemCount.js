import React, { useState }  from 'react';

const ItemCount = () => {

    const [counter, setCounter] = React.useState(0);
  
const handlerCounterUp = () => {
  if (counter <"4") {
    setCounter(counter + 1);
    alert("Producto Agregado");
  }
  else
    alert("No hay producto en Stock");
  
};

const handlerCounterDown = () => {
if (counter =="0") {
    alert ("Error - No puede quitar productos sin haberlos agregado");
}
  else
    setCounter(counter - 1);
};



return (
    <div className='stock'>
        <p style={{marginLeft:220}} >{counter} </p>
        <button onClick={handlerCounterUp} style={{marginLeft:80}} >Agregar al Carrito</button>
        <button onClick={handlerCounterDown} style={{marginLeft:10}} >Quitar del Carrito</button>
    </div>
)

}

export default ItemCount;