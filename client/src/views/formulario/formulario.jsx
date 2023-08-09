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
  axios.post("http://localhost:3001/dog",input )
  .then(res=>alert(res))
}

useEffect(() => {
  dispatch(getDogTemperament());
}, [dispatch]);


  return (
    <div className="App"> 
      <h1>Form Dogs</h1>
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



// handleChanmge (para que no sea menos a cero)
// if (["heightMin", "heightMax", "weightMin", "weightMax"].includes(name)) {
//   if (parseFloat(value) < 0) {
//     return; // Si el valor es menor a 0, no actualizamos el estado
//   }
// }










































// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDogTemperament, createBreed } from "../../redux/action";
// import "./formulario.css"


// const validate = function (input) {
// 	let errors = {};
// 	if (!input.name) {
// 		errors.name = "Completing with a *BREED'S NAME* is required!";
// 	}
// 	if (!input.minimHeight) {
// 		errors.minimHeight =
// 			"Completing with a *MINIMAL HEIGHT* is required!";
// 	}
// 	if (input.minimHeight <= 0) {
// 		errors.minimHeight =
// 			"*MIN HEIGHT* should be higher greater than 0";
// 	}
// 	if (!input.maximHeight) {
// 		errors.maximHeight =
// 			"Completing with a *MAXIMAL HEIGHT* is required!";
// 	}
// 	if (input.maximHeight <= 0) {
// 		errors.minimHeight =
// 			"*MAX HEIGHT* should be higher greater than 0";
// 	}
// 	if (!input.minimWeight) {
// 		errors.minimWeight =
// 			"Completing with a *MINIMAL WEIGHT* is required!";
// 	}
// 	if (input.minimWeight <= 0) {
// 		errors.minimWeight =
// 			"*MIN WEIGHT* should be higher greater than 0";
// 	}
// 	if (!input.maximWeight) {
// 		errors.maximWeight =
// 			"Completing with a *MAXIMAL WEIGHT* is required!";
// 	}
// 	if (input.maximWeight <= 0) {
// 		errors.minimWeight =
// 			"*MAX WEIGHT* should be higher greater than 0";
// 	}
// 	if (parseInt(input.minimHeight) > parseInt(input.maximHeight)) {
// 		errors.minimHeight =
// 			"*MIN HEIGHT* must not surmount the *MAX HEIGHT* value!";
// 	}
// 	if (parseInt(input.minimWeight) > parseInt(input.maximWeight)) {
// 		errors.minimWeight =
// 			"*MIN WEIGHT* must not surmount the *MAX WEIGHT* value!";
// 	}
// 	if (!input.life_span) {
// 		errors.life_span = "Completing with a *LIFE SPAN* is required!";
// 	}

// 	if (input.life_span < 0) {
// 		errors.life_span =
// 			"A life span should be higher greater than 0";
// 	}
// 	if (input.life_span > 21) {
// 		errors.life_span =
// 			"Please, select a reasonable life span for your dog.";
// 	}
// 	return errors;
// };

// export default function DogCreate() {
// 	const dispatch = useDispatch();


// 	const temperament = useSelector((state) => state.temperaments);
// 	const [errors, setErrors] = useState({});

// 	const [input, setInput] = useState({
// 		name: "",
// 		minimHeight: "",
// 		maximHeight: "",
// 		minimWeight: "",
// 		maximWeight: "",
// 		life_span: "",
// 		image: "",
// 		temperament: [],
// 	});

// 	function handleChange(e) {
// 		setInput({
// 			...input,
// 			[e.target.name]: e.target.value,
// 		});
// 	}

// 	function handleSelect(e) {
// 		setInput({
// 			...input,
// 			temperament: [...input.temperament, e.target.value],
// 		});
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		setErrors(validate(input));
// 		const errorSaver = validate(input);
// 		if (Object.values(errorSaver).length !== 0) {
// 			return alert(
// 				"Please, fulfill ALL of the required conditions in the form so you could create your dog"
// 			);
// 		}
// 		if (input.life_span) {
// 			input.life_span = input.life_span + " years";
// 		}
// 		dispatch(createBreed(input));
// 		alert("Dog created successfully!");
// 		setInput({
// 			name: "",
// 			minimHeight: "",
// 			maximHeight: "",
// 			minimWeight: "",
// 			maximWeight: "",
// 			life_span: "",
// 			image: "",
// 			temperament: [],
// 		});

// 	}

// 	function handleDelete(el) {
// 		setInput({
// 			...input,
// 			temperament: input.temperament.filter(
// 				(temp) => temp !== el
// 			),
// 		});
// 	}

// 	useEffect(() => {
// 		dispatch(getDogTemperament());
// 	}, [dispatch]);

// 	return (
// 		<>

// 	<div className="creationContainer">
// 	<form onSubmit={(e) => handleSubmit(e)}>
// 	<h2 className="creationTitle">Create your own dog breed</h2>
// 	<h3>Fill the form with information	and then click "Create Dog"	</h3>

// 	<div className="creationWrapper">{/* ----------- NAME ----------- */}
// 	<div className="creationBreed creationInput">
		
// 	<label>Breed</label>
// 	<input className="breedInput"
// 	type="text"
// 	value={input.name}
// 	name="name"
// 	placeholder="Breed's name"
// 	onChange={(e) =>handleChange(e)}/>

// 	{errors.name && (<p className="error">{	errors.name	}</p>)}
//     </div>
	
// 	{/* ----------- HEIGHT ----------- */}

// 	<div className="creationHeight creationInput">
// 	<label>	Min Height	</label>
// 	<input	className="minHeightInput"
// 	type="number"
// 	min="1"
// 	max="99"
// 	value={input.minimHeight}
// 	name="minimHeight"
// 	placeholder="Minimal height"
// 	onChange={(e) =>handleChange(e)}/>
// 	{errors.minimHeight && (<p className="error">{errors.minimHeight}</p>)}

// 	</div>

// 	<div className="maxHeight creationInput">

// 	<label>	Max Height</label>
// 	<input	className="maxHeightInput"
// 	type="number"
// 	min="1"
// 	max="99"
// 	value={input.maximHeight}
// 	name="maximHeight"
// 	placeholder="Maximal height"
// 	onChange={(e) =>handleChange(e)}/>
// 	{errors.maximHeight && (<p className="error">
// 	{errors.maximHeight}</p>)}


// 	</div>{/* ----------- WEIGTH ----------- */}
// 	<div className="minWeight creationInput">
// 	<label>	Min Weight</label>
// 	<input
// 	className="minWeightInput"
// 	type="number"
// 	min="1"
// 	max="99"
// 	value={input.minimWeight}
// 	name="minimWeight"
// 	placeholder="Minimal weight"
// 	onChange={(e) =>handleChange(e)}/>
// 	{errors.minimWeight && (<p className="error">
// 	{errors.minimWeight}</p>)}

// 	</div>

// 	<div className="maxWeight creationInput">
// 	<label>	Max Weight</label>
// 	<input
// 	className="maxWeightInput"	
// 	type="number"	
// 	min="1"	
// 	max="99"	
// 	value={input.maximWeight}
// 	name="maximWeight"	
// 	placeholder="Maximal weight"	
// 	onChange={(e) =>handleChange(e)}/>
// 	{errors.maximWeight && (<p className="error">
//     {errors.maximWeight}</p>)}

// 	</div>{/* ----------- LIFE_SPAN ----------- */}
// 	<div className="life_span creationInput">

// 	<label>Life Span</label>
// 	<input
// 		className="lifeSpanInput"		
// 		value={input.life_span}
// 		name="life_span"
// 		placeholder="Breed's life span"
// 		onChange={(e) =>handleChange(e)}/>
// 	{errors.life_span && (<label className="error">
// 	{errors.life_span}</label>)}

// 	</div>{/* ----------- IMAGE ----------- */}
// 	<div className="picture creationInput">
							
// 	<label>Image</label>
// 	<input className="pictureInput"
// 	type="text"
// 	value={input.image}
// 	name="image"
// 	placeholder="Breed's image URL"
// 	onChange={(e) =>handleChange(e)}/>

// 	</div>{/* ----------- TEMPERAMENTS ----------- */}
						
// 	<div className="creationInput">

// 	<select	onChange={(e) =>handleSelect(e)}className="listTemps">
// 	<option hidden>	Dogs	temperaments</option>
// 	{temperament.map((temperament) => (	<option	value={	temperament}>{temperament}</option>))}
// 	</select>

// 	</div>

// 	<div className="temperamentsItemsContainer">
// 	<div className="temperamentsItems">
// 	{input.temperament?.map((type) => (<div	key={type}>
// 	<span>{	type}</span>
// 	<button	type="button"	onClick={() =>handleDelete(type)}>x	</button>
// 	</div>)	)}

// 	</div>
// 	</div>{/* ----------- BUTTON ----------- */}

// 	<div className="creationButtons">


// 	<button	className="createDogButton"	type="submit">	Create Dog	</button>
// 	</div>
// 	</div>
// 	</form>
// 	</div>
// 		</>
// 	);
// }






















