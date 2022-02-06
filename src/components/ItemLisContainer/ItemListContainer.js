import React, { useState ,useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import catalogo from '../../Api/api';
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
 const [counter, setCounter] = useState(0);
  
 
 useEffect(() => {
      const promiseProductos = new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(catalogo)
         },2000)
     })
     promiseProductos
     .then((res)=> {setProductos(res);
     })
     .catch((error)=>{
         console.log(error)
     })
     console.log(productos);
    
 },[]);
 
 function handleAddCounter () {
     setCounter(counter+1)
 }
 function handleRemoveCounter () {
     setCounter(counter-1)
 }
   return (
   <div className='ilc-prod'>
       <p className='contador'>{counter}</p>
       <div className='btn'>
       <button onClick={handleAddCounter}> Agregar al Carrito</button>
       <button onClick={handleRemoveCounter}> Remover del Carrito</button>
       </div>
       <h2 className='greet'>{greeting}</h2>
       <ItemList productos={productos}></ItemList>
           
   </div>
   )
 };
 
 export default ItemListContainer;
 




