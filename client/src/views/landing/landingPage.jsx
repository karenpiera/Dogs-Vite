//import React from "react";
import './landing.css';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="contenedor">
    <div className="content-section">
      <img src="welcomw.png" alt="Imagen de Prueba"></img>
      <div>
        <Link to="/home" >
        <img src="home-huella.png" alt="Imagen Botón Home" className="home-button-image"/>
        </Link>
      </div>
    </div>
    <div className="background-image"></div>
  </div>
  
  
  
  );
}

export default Landing;