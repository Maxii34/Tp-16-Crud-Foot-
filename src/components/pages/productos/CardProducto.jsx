import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router";

const CardProducto = () => {
  return (
    <Card className="mb-3 Card-producto p-0">
      <Row className="g-0">
        <Col md={4} lg={12}>
          <Card.Img
            src="https://images.pexels.com/photos/28509915/pexels-photo-28509915.jpeg"
            alt="imagen"
            className="img-Detalle"
          />
        </Col>
        <Col md={8} lg={12}>
          <Card.Body>
            <Card.Title>Pizza margarita clasica</Card.Title>
            <Card.Text className="contenedor-fijo">
              Nuetra pizza margarita artezanal hecha con masa madre, salsa de
              tomate casera, queso mozzarella de búfala premiun y hojas fresas
              de albahaca. Horneada en horno de piedra para obtener ese
              crujiente perfecto.
            </Card.Text>
            <p className="text-muted m-0 mb-2 ">Categoria: Comida</p>
            <h6>Precio: $4,500</h6>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link className="me-2 btn btn-success" to={"/detalle/"}>
              <i className="bi bi-eye ms-1"></i> Ver más
            </Link>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
};

export default CardProducto;
