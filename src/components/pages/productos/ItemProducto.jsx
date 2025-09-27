import Table from "react-bootstrap/Table";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ itemProducto }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Producto eliminado",
          text: `El producto eliminado correctamente`,
          icon: "success",
        });
      }
    });
  };

  return (
    <tr class="text-center align-middle">
      <td>1</td>
      <td>{itemProducto.nombreProducto}</td>
      <td>${itemProducto.precio}</td>
      <td>
        <img
          src={itemProducto.imagen}
          class="img-fluid rounded table-img"
          alt={itemProducto.nombreProducto}
          loading="lazy"
        ></img>
      </td>
      <td>{itemProducto.categoria}</td>
      <td>
        <div class="d-flex justify-content-center gap-2">
          <Link className="btn btn-warning btn-sm" to={`/admin/editar`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Link
            onClick={eliminarProducto}
            className="btn btn-danger btn-sm"
          >
            <i className="bi bi-trash"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ItemProducto;
