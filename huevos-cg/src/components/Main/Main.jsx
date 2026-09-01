import Tarjeta from '../Tarjeta/Tarjeta';
import estilos from './Main.module.css';

function Main() {
  return (
    <main className={estilos.contenido}>
      <h2>Panel de Administración — Huevos C&G</h2>
      <p>
        Sistema interno para que el equipo administrador gestione las ventas
        de maples de huevo, controle las devoluciones de envases y aplique
        los descuentos correspondientes, y lleve el registro de clientes del
        emprendimiento.
      </p>

      <h3>Módulos previstos</h3>
      <section className={estilos.modulos}>
        <Tarjeta
          titulo="Gestión de Ventas"
          descripcion="Registrar ventas por bandeja o por caja, y consultar el historial de operaciones."
          principal
        />
        <Tarjeta
          titulo="Devoluciones y Descuentos"
          descripcion="Registrar maples devueltos por cliente y calcular el descuento correspondiente (hasta $1000 cada 25 maples)."
          estado="En desarrollo"
        />
        <Tarjeta
          titulo="Clientes"
          descripcion="Administrar los datos de los clientes y su historial de compras y devoluciones."
        />
      </section>
    </main>
  );
}

export default Main;