import React  from 'react';


// React Router dom

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


//Views
import Inicio from './views/Inicio/Inicio';
import Capitulos from './views/Capitulos/Capitulos';
import Personajes from './views/Personajes/Personajes';
import Contacto from './views/Contacto/Contacto';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Categoria from './views/Categoria/Categoria';

const App = () => {
  return (
    <Router>
     <div className='App'>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Capitulos' element={<Capitulos />} />
          <Route path='/Personajes' element={<Personajes />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/detail/:id' element={<ItemDetail />} />
          <Route path='/Categoria/:CategoriaId' element={<Categoria />} />

        </Routes>
    </div>

    </Router>
   
  );
};

export default App;
