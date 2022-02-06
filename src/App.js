import React  from 'react';

import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';

const App = () => {
    return (
    <>
      
      <Header/>
      <ItemListContainer greeting= "Productos 100% originales"></ItemListContainer>        
    </>
  );
};

export default App;
