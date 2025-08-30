import CarouselInicio from "./CarouselInicio";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DetalleProducto from "./DetalleProducto";
import { Row, Col } from "react-bootstrap";



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
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <DetalleProducto />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Inicio;
