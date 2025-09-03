import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioLogueado }) => {
  //Si no estoy logueado.
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <Outlet></Outlet>
};

export default ProtectorAdmin;
