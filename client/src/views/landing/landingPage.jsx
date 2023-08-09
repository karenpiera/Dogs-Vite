//import React from "react";
import './landing.css';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="contenedor">
    <div className="background-image">
      <div>
        <h1>Landing Dogs</h1>
        <div>
          <Link to="/home" className="link">
            <span>HOME</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Landing;