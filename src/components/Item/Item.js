import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.css';


 const Item = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:60}}>
      <CardActionArea>
        <CardMedia 
        component="img" 
        with='20'
        image={producto.img} 
        alt={producto.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;

/*import React from 'react';
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

export default Item;*/