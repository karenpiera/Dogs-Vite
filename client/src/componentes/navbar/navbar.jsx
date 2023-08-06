import './navbar.css';

function Navbar() {
  return (
    <div className="search-box">
      <form >
        <input placeholder="Busqueda" type="search" />
        <button >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Navbar;