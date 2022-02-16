import React, { useState ,useEffect} from 'react';
import './ItemListContainer.css';
import axios from 'axios';
import Item from '../Item/Item.js';

import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';



const ItemListContainer = ({greeting}) => {


 const [counter, setCounter] = useState(0);
 const [users, setUsers] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
  
 
 useEffect(() => {
    
    axios('https://rickandmortyapi.com/api/character').then((res) => setUsers(res.data.results));
    setTimeout(()=> {
        setIsLoading(false);
    },2000);
},[]);
 
return (
    <>
        {isLoading ? (
            <Spinner/>
        ) : (
            <div className='itemList-prod'>
                 {users.map((user)=>{
                     return (

                         <div key={user.id}>
                            <Link to={`/detail/${user.id}`} className='Link'>
                                <Item  user={user}/>
                            </Link>
                        </div>
                    );  
        
                  })}
             </div>
        )}
    </>
);


function handleAddCounter () {{
     if (counter < "4" ) {
         setCounter(counter+1);
         alert("Producto Agregado");
     }
     else
     alert("No hay  Producto en Stock");
};


 function handleRemoveCounter () {
     if (counter =="0") {
         alert ("Error - No puede Quitar Prodcutos sin haberlos agregado");
     }
     else
     setCounter(counter-1);

 };
   
 
 return (
    <div className='ilc-prod'>
       <p className='contador'>{counter}</p>
       <div className='btn'>
       <button onClick={handleAddCounter}> Agregar al Carrito</button>
       <button onClick={handleRemoveCounter}> Remover del Carrito</button>
       </div>
       <h2 className='greet'>{greeting}</h2>
       
           
   </div>
   )}
 };
 
 export default ItemListContainer;
 




