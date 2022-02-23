import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.css';




const Item = ({cantProductos}) => {
  return (
    <Card sx={{ maxWidth: 150 }} style={{margin:60}}>
      <CardActionArea>
        <CardMedia 
        component="img" 
        with='20'
        image={cantProductos.img} 
        alt='nombre' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {cantProductos.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {cantProductos.jugador}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {cantProductos.precio}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );

};
  
export default Item;

