import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navbar.css";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="search-box">
      <div>
        <Link to="/" className="link">
          <span>LANDING PAGE</span>
        </Link>

        <Link to="/formulario" className="link">
          <span>CREATE DOGS</span>
        </Link>
      </div>

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