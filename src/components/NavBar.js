import "./NavBar.css";
import CarWidget from "./CartWidget";

const NavBar = () => {
  return (

  <div>
    <nav className="Navigation">
      <ul>
        <li> <CarWidget /> </li>
        <li>Usuario</li>
        <li>Productos</li>
        <li>Quienes Somos</li>
        <li>Contactos</li>
      </ul>
    </nav>
  </div>
  );
    
};

export default NavBar;
