import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logaut = () => {
    //Volver a false el estado.
    setUsuarioLogueado(false);
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titulo fs-2">
          <i className="bi bi-egg-fried fs-2 me-2"></i>Crud Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className={"nav-link"}>
              Inicio
            </NavLink>
            {usuarioLogueado ? (
              <>
                <NavLink to={"/admin"} className={"nav-link"}>
                  <i class="bi bi-person-fill-slash"></i> Administrador
                </NavLink>
                <Button variant="link" className="nav-link" onClick={logaut}>
                  <i class="bi bi-box-arrow-left"></i> Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <NavLink to={"/login"} className={"nav-link"}>
                  <i class="bi bi-box-arrow-right"></i> Iniciar Sesión
                </NavLink>
                <NavLink to={"/registro"} className={"nav-link"}>
                  <i class="bi bi-person-plus-fill"></i> Registro
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
