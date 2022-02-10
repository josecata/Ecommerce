import React  from 'react';

// React Router dom

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

//Views
import Usuario from './views/Usuario/Usuario';
import Servicios from './views/Servicios/Servicios';
import Productos from './views/Productos/Productos';
import Contactos from './views/Contactos/Contactos';
import ItemDetail from './views/ItemDetail/ItemDetail';

const App = () => {
    return (
      <Router>
 <>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Usuario/>} />
        <Route path='/Servicios' element={<Servicios/>} />
        <Route path='/Productos' element={<Productos/>} />
        <Route path='/Contactos' element={<Contactos/>} />
        <Route path='/detail/:id' element={<ItemDetail/>} />
      </Routes>


      <ItemListContainer greeting= "Productos 100% originales"></ItemListContainer>        
 </>

      </Router>
   
  );
};

export default App;
