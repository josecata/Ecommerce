import "./NavBar.css";
import CarWidget from "../CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <div>
    <nav className="Navigation">
       <CarWidget />
      <ul className='List-ul'>
        <Link to='/' className="Link">Inicio</Link>
        <Link to='/Capitulos' className="Link">Capitulos</Link>
        <Link to='/Personajes' className="Link">Personajes</Link>
        <Link to='/Contacto' className="Link">Contacto</Link>
      </ul>
    </nav>
    
  </div>
  );
    
};

export default NavBar;
