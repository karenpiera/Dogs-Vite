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
  
  if( input.heightMin < 0){
    errors.heightMin= "Height Min is required!";
    }
  if( !input.heightMax < 0){
      errors.heightMax= "Height Max is required!";
      }
  if( input.weightMin < 0){
        errors.weightMin= "Weight Min is required!";
        }
  if( !input.weightMax < 0){
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




useEffect(() => {
  dispatch(getDogTemperament());
}, [dispatch]);


  return (
    <div className="App"> 
      <h1>Formulario Dogs</h1>
 <Link to="/home" className="link" >
  <span>HOME</span>
</Link>
    <form onSubmit={handleSubmit} className="formulario">
 

      <div>
      <label>Name </label>
      <input placeholder="NAME" type="text" name="name" value={input.value} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
      <label> HeightMin</label>
      <input placeholder="HEIGHT" type="number" name="heightMin" value={input.value} onChange={handleChange} min="1" max="30" />  
      {errors.heightMin && <p className="error">{errors.heightMin}</p>}    
      </div>

      <div>
      <label> HeightMax</label>
      <input placeholder="HEIGHT" type="number" name="heightMax" value={input.value} onChange={handleChange} min="1" max="80" /> 
      {errors.heightMax && <span className="error">{errors.heightMax}</span>}
      </div>

      <div>
      <label>WeightMin</label>
      <input placeholder="WEIGHT"type="number" name="weightMin" value={input.value} onChange={handleChange} min="1" max="30"/>
      {errors.weightMin && <span className="error">{errors.weightMin}</span>}
      </div>

      <div>
      <label>WeightMax</label>
      <input placeholder="WEIGHT"type="number" name="weightMax" value={input.value} onChange={handleChange} min="1" max="80"/>
      {errors.weightMax && <span className="error">{errors.weightMax}</span>}
      </div>

      <div>
      <label>Years Of Life</label>
      <input placeholder="YEAR OF LIFE" type="number" name="life_span" value={input.value} onChange={handleChange} min="1" max="30"/>
      {errors.life_span && <span className="error">{errors.life_span}</span>}
      </div>

      <div>

      <label>Image</label>
			<input placeholder="image" type="text" name="image"	value={input.value}  onChange={handleChange}/>
			</div>


      <div>
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
    </form>
    </div>
  );
}

export default Formulario;

