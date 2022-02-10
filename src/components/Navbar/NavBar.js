import "./NavBar.css";
import CarWidget from "../CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <div>
    <nav className="Navigation">
       <CarWidget />
      <ul className='List-ul'>
        <Link to="/" className="Link" >Usuario</Link>
        <Link to="Productos" className="Link">Productos</Link>
        <Link to="Servicios" className="Link">Servicios</Link>
        <Link to="Contactos" className="Link">Contactos</Link>
      </ul>
    </nav>
  </div>
  );
    
};

export default NavBar;
