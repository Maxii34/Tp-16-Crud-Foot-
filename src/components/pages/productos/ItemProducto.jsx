import Table from "react-bootstrap/Table";
import { Link } from "react-router";

const ItemProducto = () => {
  return (
      <tr class="text-center align-middle">
        <td>1</td>
        <td>Pizza margarita clasica</td>
        <td>$ 4.500</td>
        <td>
          <img
            src="https://images.pexels.com/photos/28509915/pexels-photo-28509915.jpeg"
            class="img-fluid rounded table-img"
            alt="Pizza"
          ></img>
        </td>
        <td>Pizza</td>
        <td>
          <div class="d-flex justify-content-center gap-2">
            <Link className="me-lg-2 btn btn-warning" to={`/admin/editar`}>
              <i className="bi bi-pencil-square"></i>
            </Link>
            <Link to="" className="btn btn-danger btn-sm shadow">
              <i className="bi bi-trash"></i>
            </Link>
          </div>
        </td>
      </tr>
  );
};

export default ItemProducto;
