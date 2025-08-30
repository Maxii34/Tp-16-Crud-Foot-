import Table from "react-bootstrap/Table";

const ItemProducto = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pizza margarita clasica</td>
            <td>$ 4.500</td>
            <td>Imagen</td>
            <td>Categoria</td>
            <td>
              <div class="d-flex justify-content-center gap-2">
                <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ItemProducto;
