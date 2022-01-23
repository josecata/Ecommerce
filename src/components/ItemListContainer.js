import React from "react";
import {Card, CardBody, CardTitle,CardSubtitle,CardText} from 'reactstrap';

import './ItemListContainer.css'

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
      </CardText>
    </CardBody>
  </Card>
</div>
);

export default ItemListContainer;