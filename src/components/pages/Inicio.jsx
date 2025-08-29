import CarouselInicio from "./CarouselInicio";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Inicio = () => {
  return (
    <>
      <CarouselInicio />
      <div className="my-3 bord-top">
        <h1>Nuestros productos</h1>
        <div>
          <Form>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del producto."
                className="me-2" 
              />
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form.Group>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Inicio;
