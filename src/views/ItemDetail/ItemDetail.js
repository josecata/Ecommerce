import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Spinner from '../../components/Spinner/Spinner';
import Item from '../../components/Item/Item';
import './ItemDetail.css'
import ItemCount from '../../components/ItemCount/ItemCount'




const ItemDetail = (data) => {
	const [personaje, setpersonaje] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	
	let id = useParams();

	
	let userID = id.id;

		

	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${userID}`).then((res) => setpersonaje(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [userID]);

	return (
		<div className='personaje-Container'>
		  {isLoading ? (
				<Spinner />
			) : (
				<div className='personaje-detail'>
					
					<img className='imgdetalle' src={personaje.image} alt='img'/>
					<p className='detalle'>{personaje.name}</p>
					<p className='detalle' >{personaje.status}</p>
					<ItemCount stock={data.stock} initial={1}/>
					
					
				</div>
				)
		   }	
		</div>
		
	);
};

export default ItemDetail;


