import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.css';




const Item = ({data}) => {
  return (
    <Card sx={{ maxWidth: 150 }} style={{margin:60}}>
      <CardActionArea>
        <CardMedia 
        component="img" 
        with='20'
        image={data.image} 
        alt='nombre' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.house}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );

};
  
export default Item;

