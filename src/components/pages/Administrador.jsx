import { Link } from "react-router";
import ItemProducto from "./productos/ItemProducto";
import { Table } from "react-bootstrap";

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
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center align-middle">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
      <ItemProducto />
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
