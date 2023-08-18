import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Formulario from "./views/formulario/formulario";
import Landing from "./views/landing/landingPage";
import './App.css';

function App() {
  return (


<Routes>
<Route path="/home" element={<Home />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/formulario" element={<Formulario />} />
<Route path="/" element={<Landing />} />
</Routes>



   
  );
}

export default App;

