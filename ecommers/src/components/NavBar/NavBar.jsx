import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"}>
        <h4>Mundo Movil</h4>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-dark mx-2">Inicio</button>
        </Link>
        <Link to={"/category/IPhone"}>
          <button className="btn btn-outline-dark mx-2">IPhone</button>
        </Link>
        <Link to={"/category/Accesorios"}>
          <button className="btn btn-outline-dark mx-2">Accesorios</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};
