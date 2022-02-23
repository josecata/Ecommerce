import React, { useState ,useEffect} from 'react';
import './ItemListContainer.css';

import Item from '../Item/Item';

import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

import {db} from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {



 const [cantProductos, setcantProductos] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
  

 useEffect(() => {
        const getProductos = async() => {
        const q = query(collection(db,"Basquet"));
        const docs =[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
 });
    setcantProductos(docs);
 };
getProductos();

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
                 {cantProductos.map((data)=>{
                     return (

                         <div key={data.id}>
                            <Link to={`/detail/${data.id}`} className='Link'>
                                <Item   cantProductos={data}/>
                            </Link>

                        </div>
                    );  
        
                  })}
             </div>
        )}
    </>
);


};
 

export default ItemListContainer;
 




