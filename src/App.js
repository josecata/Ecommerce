import './App.css';

import NavBar from "./components/NavBar";

const name = "Daniel";

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Usted acaba de ingresar al Sitio Ecommerce de Jose Luis Gomez {name}</h1>
    </>
  );
};

export default App;
