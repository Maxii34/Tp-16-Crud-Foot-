import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DetalleProducto = () => {
  return (
    <Card className="mb-3 DetalleCard">
      <Row className="g-0"> {/* g-0 quita el gap entre columnas */}
        <Col md={4} lg={12}>
          <Card.Img
            src="https://images.pexels.com/photos/28509915/pexels-photo-28509915.jpeg"
            alt="imagen"
            className="img-Detalle" /* para que ocupe toda la altura */
          />
        </Col>
        <Col md={8} lg={12}>
          <Card.Body>
            <Card.Title>Pizza margarita clasica</Card.Title>
            <Card.Text>
              Nuetra pizza margarita artezanal hecha con masa madre, salsa de
              tomate casera, queso mozzarella de búfala premiun y hojas fresas
              de albahaca. Horneada en horno de piedra para obtener ese crujiente
              perfecto.
            </Card.Text>
            <p className="text-muted m-0 mb-2 ">Categoria: Comida</p>
            <h6>Precio: $4,500</h6>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default DetalleProducto;
