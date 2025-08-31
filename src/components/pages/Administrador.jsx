import ItemProducto from "./productos/ItemProducto";


const Administrador = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-content-center">
            <h1>Productos disponibles</h1>
            <div>
            <button type="button" className="btn btn-primary shadow m-1"><i className="bi bi-file-earmark-plus"></i></button>
            <button type="button" className="btn btn-info shadow m-1"><i className="bi bi-database"></i></button>
            </div>
            </div>
            <div>
            <ItemProducto />
            </div>
        </section>
    );
};

export default Administrador;