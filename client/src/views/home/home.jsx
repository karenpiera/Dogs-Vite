import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getDogByName } from "../../redux/action";
import Navbar from "../../componentes/navbar/navbar";
import Cards from "../../componentes/cards/cards";
import "./home.css";



function Home() {

	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.dogs);
	//const temperament = useSelector((state) => state.temperaments);
  // const [filtered,setFiltered] = useState(allDogs)
  // const [searchString, setSearchString]=useState("")
  const [name, setName] = useState("");


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
      <h1 className="home-title">Henry Dogs</h1>
      {/* {
            location.pathname !== '/'&& <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            
         } */}
         <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allDogs={allDogs}  />
    </div>
  );
}

export default Home;