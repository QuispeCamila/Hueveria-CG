import logo from '../../assets/logo.jpg';
import estilos from './Navbar.module.css';

function Navbar() {
  return (
    <header className={estilos.barra}>
      <img src={logo} alt="Logo de Huevos C&G" className={estilos.logo} />
      <h1 className={estilos.titulo}>Huevos C&G</h1>
      <nav className={estilos.menu}>
        <a href="#">Inicio</a>
        <a href="#">Ventas</a>
        <a href="#">Devoluciones</a>
        <a href="#">Clientes</a>
      </nav>
    </header>
  );
}

export default Navbar;