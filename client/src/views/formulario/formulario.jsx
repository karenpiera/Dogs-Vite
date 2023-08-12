/* eslint-disable no-unused-vars */


/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogTemperament } from "../../redux/action";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './formulario.css';
import axios from "axios";

function validate(input){
  let errors={};
  if( !input.name){
    errors.name= "Name is required!";
  }
  
  if( !input.heightMin ){
    errors.heightMin= "Height Min is required!";
    }
  if( !input.heightMax ){
      errors.heightMax= "Height Max is required!";
      }
  if( !input.weightMin){
        errors.weightMin= "Weight Min is required!";
        }
  if( !input.weightMax ){
    errors.weightMax= "Weight Max is required!";
    } 
    if( !input.life_span){
      errors.life_span= "Years of Life is required!";
      } 
  if(input.life_span >30){
    errors.life_span= " Select real age "
  }    
  return errors;
    }


function Formulario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const temperament = useSelector((state) => state.temperaments);
  const  [errors,setErrors]=useState({});

  const  [input,setInput]=useState({
  name:"",
  heightMin:"",
  heightMax:"",
  weightMin:"",
  weightMax:"",
  life_span:"",
  image: "",
  temperament:[]
  })

       
  function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

 
function handleSelect(e) {
  const selectedTemperament = e.target.options[e.target.selectedIndex].value;
  setInput({
    ...input,
    temperament: [...input.temperament, selectedTemperament],
  });
}


function handleSubmit(e) {
  e.preventDefault();
  const validationErrors = validate(input);
  setErrors(validationErrors);

  if (Object.values(validationErrors).length !== 0) {
    alert(
      "Por favor, completa TODAS las condiciones requeridas en el formulario para poder crear tu perro."
    );
    return;
  }

  

  axios
    .post("http://localhost:3001/dogs", input)
    .then((response) => {
      alert("¡Perro creado exitosamente!");
      setInput({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_span: "",
        image: "",
        temperament: [],
      });
    })
    .catch((error) => {
      console.error("Error al crear el perro:", error);
      alert("Ocurrió un error al crear el perro. Por favor, intenta de nuevo.");
    });
    navigate("/home");
}

function refreshPage() {
  window.location.reload(false);
}



useEffect(() => {
  dispatch(getDogTemperament());
}, [dispatch]);


  return (
    <div className="App"> 
      <img src="../../../public/pa.png" alt="Imagen de Cabecera" className="header-image" />

     <div className="refresh">
      <span onClick={refreshPage} className="refresh">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="48" viewBox="0 0 24 24">
          <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" />
        </svg>
      </span>
    </div>
      <div className="linkHome">
    <img src="../../../public/sss.png" className="dogHous" alt="Imagen de Prueba"></img>
    <br/>
      <Link to="/home" className="link">
        <span>HOME</span>
      </Link>
    </div>

    <form onSubmit={handleSubmit} className="formulario">
 <div className="formulario">
      <div className="inputConteiner">
      
      <label>Name </label>
      <input placeholder="NAME" type="text" name="name" value={input.value} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="input-container">
      <label> HeightMin</label>
      <input placeholder="HEIGHT" type="number" name="heightMin" value={input.value} onChange={handleChange} min="1" max="30" />  
      {errors.heightMin && <p className="error">{errors.heightMin}</p>}    
      </div>

      <div className="input-container">
      <label> HeightMax</label>
      <input placeholder="HEIGHT" type="number" name="heightMax" value={input.value} onChange={handleChange} min="1" max="80" /> 
      {errors.heightMax && <span className="error">{errors.heightMax}</span>}
      </div>

      <div className="input-container">
      <label>WeightMin</label>
      <input placeholder="WEIGHT"type="number" name="weightMin" value={input.value} onChange={handleChange} min="1" max="30"/>
      {errors.weightMin && <span className="error">{errors.weightMin}</span>}
      </div>

      <div className="input-container">
      <label>WeightMax</label>
      <input placeholder="WEIGHT"type="number" name="weightMax" value={input.value} onChange={handleChange} min="1" max="80"/>
      {errors.weightMax && <span className="error">{errors.weightMax}</span>}
      </div>

      <div className="input-container">
      <label>Years Of Life</label>
      <input placeholder="YEAR OF LIFE" type="number" name="life_span" value={input.value} onChange={handleChange} min="1" max="30"/>
      {errors.life_span && <span className="error">{errors.life_span}</span>}
      </div>

      <div>

      <label className="input-container">Image</label>
			<input placeholder="image" type="text" name="image"	value={input.value}  onChange={handleChange}/>
			</div>


      <div className="input-container">
  <label>Temperaments</label>
  <select onChange={handleSelect} className="listTemps">
    <option hidden>Select Temperaments</option>
    {temperament.map((temperament, index) => (
      <option key={index} value={temperament}>
        {temperament}
      </option>
    ))}
  </select>
  <div >
    {input.temperament.map((temp, index) => (
      <span key={index} >
        {temp}
      </span>
    ))}
  </div>
</div>


      <button type="submit">Create Dog</button>
     </div>
    </form>
    </div>


  );
}

export default Formulario;

