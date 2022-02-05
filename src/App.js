import React  from 'react';

import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

const App = () => {
    return (
    <>
      <NavBar />
      <h1>La tienda online #1 de basquet en Argentina</h1>
      <ItemListContainer greeting= "Elija su producto"></ItemListContainer>        
    </>
  );
};

export default App;
