/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getDogByName,filterByName,filterByTemperament,filterByWeight } from "../../redux/action";
import Navbar from "../../componentes/navbar/navbar";
import Cards from "../../componentes/cards/cards";
import "./home.css";



function Home() {

	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const temperament = useSelector((state) => state.temperaments);
  const [name, setName] = useState("");
  const [peso, setPeso] = useState("");
	const [orden, setOrden] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = allDogs.slice(indexOfFirstItem, indexOfLastItem);



  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  dispatch(getDogByName(name));  
  }
  

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  
  function prevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleSort(e) {
    e.preventDefault();
    const selectedValue = e.target.value;
    
    if (selectedValue === "A-Z") {
      dispatch(filterByName("Asc"));
    } else if (selectedValue === "Z-A") {
      dispatch(filterByName("Desc")); 
    }
    
    setCurrentPage(1);
    setOrden(selectedValue);
  }
  


	function handleFilterDogsByWeight(e) {
		e.preventDefault();
		dispatch(filterByWeight(e.target.value));
		setCurrentPage(1);
		setPeso(`${e.target.value}`);
	}


	function handleFilterDogsByTemperament(e) {
      e.preventDefault();
      dispatch(filterByTemperament(e.target.value));
  }

  useEffect(() => {
		dispatch(getDogs());
	}, [dispatch]);
  

  return (
    <div className="home">
      <video autoPlay muted loop id="video-background">
  <source src="video.mp4" type="video/mp4" />
</video>

 <div>
  <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>

  <div className="search-box">
 <div>
  <select  onChange={handleSort} > 
  <option hidden="order default">Default Order</option>
	<option value="A-Z">{" "}A-Z{" "}</option>
  <option value="Z-A">{" "}Z-A{" "}</option>
  </select>          
</div> 

<div>
<select  onChange={handleFilterDogsByWeight} >
<option hidden="AllWeights">Weights</option>
<option value="HeavyWeight">Heaviest breeds</option>
<option value="LightWeight">Lightest breeds	</option>
</select>
</div>

<div>
<select onChange={handleFilterDogsByTemperament}>
<option hidden>Dogs temperaments</option>
  {temperament.map((temperament, index) => (
    <option key={index} value={temperament}>
      {temperament}
    </option>))}
</select>
</div>
</div>


  <div>
  <button className="custom-cursor" onClick={prevPage} disabled={currentPage === 1}>
    Previous
  </button>

  <span>{currentPage}</span>
  <button onClick={nextPage} disabled={indexOfLastItem >= allDogs.length}>
    Next
  </button>
  </div>


         <Cards allDogs={currentItems} />
         <div className="pagination">
</div>

    </div>
  );
}

export default Home;