import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioProductos = () => {
  return (
    <section>
      <h1 className="border-bottom py-2">Crear Producto</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre del producto"
            name="nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el precio"
            name="precio"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            name="imagenUrl"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            name="categoria"
            aria-label="Selecciona una categoría"
            required
          >
            <option value="">Selecciona una categoría...</option>
            <option value="electronica">Electrónica</option>
            <option value="ropa">Ropa</option>
            <option value="hogar">Hogar y cocina</option>
            <option value="libros">Libros</option>
            <option value="juguetes">Juguetes</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción breve</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Describe el producto (características, detalles, etc.)"
            name="descripcion"
            maxLength={500}
          />
          <Form.Text muted>Máximo 500 caracteres.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción amplia</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe el producto."
            name="descripcion"
          />
          <Form.Text muted>Máximo 500 caracteres.</Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">
          Guardar Producto
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProductos;
