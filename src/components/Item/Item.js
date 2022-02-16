import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.css';




const Item = ({user}) => {
  return (
    <Card sx={{ maxWidth: 150 }} style={{margin:60}}>
      <CardActionArea>
        <CardMedia 
        component="img" 
        with='20'
        image={user.image} 
        alt={user.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {user.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {user.origen}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );

};
  
export default Item;

