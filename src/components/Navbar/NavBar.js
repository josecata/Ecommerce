import "./NavBar.css";
import CarWidget from "../CartWidget";

const NavBar = () => {
  return (

  <div>
    <nav className="Navigation">
       <CarWidget />
      <ul>
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
