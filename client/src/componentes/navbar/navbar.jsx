import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navbar.css";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="search-box">
<Link to="/"  >
  <span>LANDING PAGE</span>
  </Link>    

<Link to="/formulario"  >
  <span>CREAT DOGS</span>
  </Link>
 
 
      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search" />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
}

Navbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Navbar;