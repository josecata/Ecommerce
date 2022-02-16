import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Spinner from '../../components/Spinner/Spinner';
import Item from '../../components/Item/Item';


const ItemDetail = () => {
  const [user,setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

let id = useParams();
let userID =id.id;


  useEffect(() => {
    axios (`https://rickandmortyapi.com/api/character/${userID}`).then((res) => setUser(res.data.results));
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
},[userID]);

  return (
    
      <div>
          {isLoading ? (
            <Spinner/>
          ) : (
              <div>
                {user.map((user)=>{
                  return (
                    <div  >
                        <Item key={user.id} user={user}/>
                    </div> 
                ); 
              })}
              </div>
          )}
      </div>
    );

};

export default ItemDetail;
