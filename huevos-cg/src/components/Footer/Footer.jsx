import estilos from './Footer.module.css';

function Footer() {
  return (
    <footer className={estilos.pie}>
      <p>Huevos C&G — Panel de Administración</p>
      <p>Equipo: Camila Quispe Rosa y Gustavo Siñanis</p>
      <p>Contacto: hueveriacg26@gmail.com</p>
      <p>Instituto Superior Del Milagro N.º 8207 — 2026</p>
    </footer>
  );
}

export default Footer;