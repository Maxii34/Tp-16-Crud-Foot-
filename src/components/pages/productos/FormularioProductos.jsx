import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const FormularioProductos = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <section className=" container my-2">
      <div className="d-flex align-items-center justify-content-between mb-3 border-bottom py-2">
        <h1 className=" mb-0">Crear Producto</h1>
        <Link to="/admin" className="btn btn-primary shadow">
          <i className="bi bi-arrow-left me-2"></i>
          Volver
        </Link>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre del producto"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe tener almenos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del producto debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Agrega el precio"
            {...register("precio", {
              required: "El precio es un campo obligatorio",
              minLength: {
                value: 1,
                message: "El precio debe tener al menos 1 dígito",
              },
              maxLength: {
                value: 6,
                message: "El precio no puede superar los 6 dígitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            {...register("imagenUrl", {
              required: "La URL de la imagen es obligatoria",
              minLength: {
                value: 10,
                message: "La URL debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 200,
                message: "La URL no puede superar los 200 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagenUrl?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            name="categoria"
            aria-label="Selecciona una categoría"
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
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
            {...register("descripcionBreve", {
              required: "La descripción breve es obligatoria",
              minLength: {
                value: 10,
                message: "La descripción debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 300,
                message: "La descripción no puede superar los 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción amplia</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe el producto (características, detalles, etc.)"
            {...register("descripcionAmplia", {
              required: "La descripción amplia es obligatoria",
              minLength: {
                value: 20,
                message: "La descripción debe tener al menos 20 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "La descripción no puede superar los 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit" className="shadow">
          Guardar Producto
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProductos;
