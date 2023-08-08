//import React from "react";
//import './landing.css';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div >
    
      <h1>Landing Dogs</h1>
      
      <Link to="/home" >
  <span>HOME</span>
</Link>
    </div>
  );
}

export default Landing;