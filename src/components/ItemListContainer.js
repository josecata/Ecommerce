import React  from "react";
import {Card, CardBody, CardTitle,CardSubtitle,CardText} from 'reactstrap';

import './ItemListContainer.css'
import './ItemCount'


const ItemListContainer = ({producto,precio, descripcion,img}) => (
<div className="contenedor">
  <Card>
    <CardBody>
      <CardTitle className="subtitulo" tag="h5">{producto}</CardTitle>
      <img className="pelota" src={img} alt='user-img' with={200}/>
    <CardSubtitle
        className="mb-2 text-muted"
        tag="h6" 
      >
        {precio}
      </CardSubtitle>
      <CardText>
        {descripcion}
        <p>Stock 4 Unidades</p>
      </CardText>
    </CardBody>
    
  </Card>
  
</div>




);





export default ItemListContainer;