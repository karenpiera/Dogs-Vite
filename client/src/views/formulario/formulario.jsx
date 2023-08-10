/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogTemperament } from "../../redux/action";
import { Link } from "react-router-dom";
import './formulario.css';
import axios from "axios";

function validate(input){
  let errors={};
  if( !input.name){
    errors.name= "Name is required!";
  }
  
  if( input.heightMin <= 0){
    errors.heightMin= "Height Min is required!";
    }
  if( !input.heightMax){
      errors.heightMax= "Height Max is required!";
      }
  if( input.weightMin <= 0){
        errors.weightMin= "Weight Min is required!";
        }
  if( !input.WeightMax){
    errors.WeightMax= "Weight Max is required!";
    } 
    if( !input.yearsOfLife){
      errors.yearsOfLife= "Years of Life is required!";
      } 
  if(input.yearsOfLife >30){
    errors.yearsOfLife= " Select real age "
  }    
  return errors;
    }


function Formulario() {
  const dispatch = useDispatch();

  const temperament = useSelector((state) => state.temperaments);
  const  [errors,setErrors]=useState({});

  const  [input,setInput]=useState({
  name:"",
  heightMin:"",
  heightMax:"",
  weightMin:"",
  weightMax:"",
  yearsOfLife:"",
  temperament:[]
  })

       

function handleChange(e) {
  const { name, value } = e.target;

  
  setInput({
    ...input,
    [name]: value
  });

  const validationErrors = validate({
    ...input,
    [name]: value
  });

  setErrors(validationErrors);
}
function handleSelect(e) {
  const selectedTemperament = e.target.options[e.target.selectedIndex].value;
  setInput({
    ...input,
    temperament: [...input.temperament, selectedTemperament],
  });
}

function handlerSumit(e){
  e.preventDefault();
  axios.post("http://localhost:3001/dogs",input )
  .then(res=>alert(res))
}

useEffect(() => {
  dispatch(getDogTemperament());
}, [dispatch]);


  return (
    <div className="App"> 
     
 <Link to="/home" className="link" >
  <span>HOME</span>
</Link>
    <form onSubmit={handlerSumit} className="formulario">
 

      <div>
      <label>Name </label>
      <input placeholder="NAME" type="text" name="name" value={input.value} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
      <label> HeightMin</label>
      <input placeholder="HEIGHT" type="number" name="height" value={input.value} onChange={handleChange} min="0" max="30" />  
      {errors.heightMin && <p className="error">{errors.heightMin}</p>}    
      </div>

      <div>
      <label> HeightMax</label>
      <input placeholder="HEIGHT" type="number" name="height" value={input.value} onChange={handleChange} min="0" max="80" /> 
      {errors.heightMax && <span className="error">{errors.heightMax}</span>}
      </div>

      <div>
      <label>WeightMin</label>
      <input placeholder="WEIGHT"type="number" name="weight" value={input.value} onChange={handleChange} min="0" max="30"/>
      {errors.weightMin && <span className="error">{errors.weightMin}</span>}
      </div>

      <div>
      <label>WeightMax</label>
      <input placeholder="WEIGHT"type="number" name="weight" value={input.value} onChange={handleChange} min="0" max="80"/>
      {errors.weightMax && <span className="error">{errors.weightMax}</span>}
      </div>

      <div>
      <label>Years Of Life</label>
      <input placeholder="YEAR OF LIFE" type="number" name="yearsOfLife" value={input.value} onChange={handleChange} min="0" max="30"/>
      {errors.yearsOfLife && <span className="error">{errors.yearsOfLife}</span>}
      </div>

      <div> 
      <label>Temperaments </label>

      <select onChange={handleSelect} className="listTemps">
  <option hidden>Dogs temperaments</option>
  {temperament.map((temperament, index) => (
    <option key={index} value={temperament}>
      {temperament}
    </option>
  ))}
</select>




      </div>
      <button type="submit">Create Dog</button>
    </form>
    </div>
  );
}

export default Formulario;

