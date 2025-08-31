import Table from "react-bootstrap/Table";

const ItemProducto = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr class="text-center align-middle">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center align-middle">
            <td>1</td>
            <td>Pizza margarita clasica</td>
            <td>$ 4.500</td>
            <td>
              <img src="https://images.pexels.com/photos/28509915/pexels-photo-28509915.jpeg" class="img-fluid rounded table-img" alt="Pizza"></img>
            </td>
            <td>Categoria</td>
            <td>
              <div class="d-flex justify-content-center gap-2">
                <button class="btn btn-warning btn-sm shadow">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger btn-sm shadow">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ItemProducto;
