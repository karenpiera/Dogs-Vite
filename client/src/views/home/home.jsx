
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/action";
import Navbar from "../../componentes/navbar/navbar";
import Cards from "../../componentes/cards/cards";
import "./home.css";



function Home() {

	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.dogs);
	//const temperament = useSelector((state) => state.temperaments);

  useEffect(() => {
		dispatch(getDogs());
		//  return (()=>{
		// 	clearDetail()
		// })
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(getDogTemperament());
	// }, []);



  return (
    <div className="home">
      <h1 className="home-title">Henry Dogs</h1>
      <Navbar />
      <Cards allDogs={allDogs}  />
    </div>
  );
}

export default Home;