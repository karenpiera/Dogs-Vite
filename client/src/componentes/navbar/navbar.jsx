
import PropTypes from "prop-types";
import "./navbar.css";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="search-box">
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