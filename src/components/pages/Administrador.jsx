import { Link } from "react-router";
import ItemProducto from "./productos/ItemProducto";

const Administrador = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-between align-content-center">
        <h1>Productos disponibles</h1>
        <div>
          <Link to="/admin/crear" className="btn btn-primary shadow m-1">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Link type="button" className="btn btn-info shadow m-1">
            <i className="bi bi-database"></i>
          </Link>
        </div>
      </div>
      <div>
        <ItemProducto />
      </div>
    </section>
  );
};

export default Administrador;
