import React from 'react';
import './App.css';


import ItemListContainer from './components/ItemListContainer';

import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      
      <h1>La tienda online #1 de basquet en Argentina</h1>
    <div className='articulos'>
        <ItemListContainer
        producto='Pelota de Basquet'
        precio='$3500'
        descripcion='Mini Pelota Basquet Spalding Nba Junior Nº 1 -Material: Caucho'
        img='https://http2.mlstatic.com/D_NQ_NP_741447-MLA31356025439_072019-O.webp'
      />

        <ItemListContainer
        producto='Pelota de Basquet'
        precio='$4500'
        descripcion='Pelota De Básquet N° 6 Spalding Marble - All Surface'
        img='https://www.deportesmd.com.ar/sistema/uploads/699/articulos/pelotas-de-basquet-spalding-n-6-marble-all-surface-femenino.jpg'
      />
        <ItemListContainer
        producto='Pelota de Basquet'
        precio='3000'
        descripcion='PELOTA BASQUET Nº 6 MOLTEN LIBERTRIA 3 X 3'
        img='https://www.deportesmd.com.ar/sistema/uploads/699/articulos/molten-3x3.jpg'
      />
    </div>
      
    </>
  );
};

export default App;
