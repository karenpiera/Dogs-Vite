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
  // const [filtered,setFiltered] = useState(allDogs)
  // const [searchString, setSearchString]=useState("")
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

  // function handleChange(e) {
  //   e.preventDefault()// para que pagina no refesque  
  //   serachString(e.target.value) 
  // }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDogByName(name));
    //setName("");
  }

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  
  function prevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleSort(e) {
		e.preventDefault();
		dispatch(filterByName(e.target.value));
		setCurrentPage(1);
		setOrden(`${e.target.value}`);
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

  // function handleSubmit (){
  //   const filtered= allDogs.filter(dog=> dog.name.includes(serachString));
  //   setFiltered(filtered)
  // }

  useEffect(() => {
		dispatch(getDogs());
		// return (()=>{
		// clearDetail()
		// })
	}, [dispatch]);
  

	// useEffect(() => {
	// 	dispatch(getDetail());
	// }, [dispatch]);
  


  return (
    <div className="home">
      <video autoPlay muted loop id="video-background">
  <source src="video.mp4" type="video/mp4" />
</video>

 <div>
  <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
  
  <h2 className="home-title">Henry Dogs</h2>
  </div>

  <div className="search-box">
 <div>
  <select placeholder="A-Z" onChange={handleSort} > 
  <option hidden="order default">Default Order</option>
	<option value="A-Z">{" "}A-Z{" "}</option>
  <option value="Z-a">{" "}Z-A{" "}</option>
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