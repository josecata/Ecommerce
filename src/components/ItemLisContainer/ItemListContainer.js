import React, { useState ,useEffect} from 'react';
import './ItemListContainer.css';
import axios from 'axios';
import Item from '../Item/Item';

import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';


const ItemListContainer = () => {


 //const [counter, setCounter] = useState(0);
 const [users, setUsers] = useState({});
 const [isLoading, setIsLoading] = useState(true);
  
 
 useEffect(() => {
    
    axios('https://rickandmortyapi.com/api/character/').then((res) => 
    setUsers(res.data.results)
    
    );
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
                 {users.map((char)=>{
                     return (

                         <div key={char.id}>
                            <Link to={`/detail/${char.id}`} className='Link'>
                                <Item   data={char}/>
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
 




