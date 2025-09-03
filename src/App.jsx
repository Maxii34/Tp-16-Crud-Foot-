import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import Administrador from "./components/pages/Administrador";
import FormularioProductos from "./components/pages/productos/FormularioProductos";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";

function App() {
  const sesionUsusuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsusuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <>
      <BrowserRouter>
        {/*Nombre de la prop UsuarioLogeado={UsuarioLogeado}<-- estado /igual pasa con lo que esta aki ---*/}
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <main className="container my-3">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>} />
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            />
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
            />

            <Route
              path="/admin"
              element={
                <ProtectorAdmin
                  usuarioLogueado={usuarioLogueado}
                ></ProtectorAdmin>
              }
            >
              <Route index element={<Administrador></Administrador>} />
              <Route
                path="crear"
                element={<FormularioProductos></FormularioProductos>}
              />
              <Route
                path="editar"
                element={<FormularioProductos></FormularioProductos>}
              />
            </Route>

            <Route path="*" element={<Error404></Error404>} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
