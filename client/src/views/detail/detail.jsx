/* eslint-disable react-hooks/exhaustive-deps */
//import React from "react";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail,deleteDetail } from "../../redux/action";
import "./detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogDetail = useSelector((state) => state.detail);

 

  useEffect(() => {
    dispatch(getDetail(id));
    return()=>{dispatch(deleteDetail())}
  }, [dispatch, id]);

  console.log("Dog Detail:", dogDetail);

  return (
    <div className="detailContainer">
      <video autoPlay muted loop id="video-background">
  <source src="../../../public/video.mp4" type="video/mp4" />
</video>
  <div className="top-section">
    <img src="../../../public/patancito.png" alt="Imagen de Cabecera" className="header-image" />
    <div className="linkHome">
    <img src="../../../public/sss.png" className="dogHouse" alt="Imagen de Prueba"></img>
    <br/>
      <Link to="/home" className="link">
        <span>HOME</span>
      </Link>
    </div>
    <br/>
    <div className="linkForm">
      <Link to="/formulario" className="link">
        <span>CREAT DOGS</span>
      </Link>
    <img src="../../../public/dib.png" className="dogCreat" alt="Imagen de Prueba"></img>
    </div>

  </div>

    <div className="card">
      <div className="content">
        <div className="text">
          <h2 className="detailName">{dogDetail.name}</h2>
          <h5>Temperaments:</h5>
 <b className="detailTemperaments">
    {dogDetail.createdInDB && dogDetail.Temperaments
      ? dogDetail.Temperaments.map((temperament) => (
          <span key={temperament.name}>{temperament.name}, </span>
        ))
      : dogDetail.temperament}
  </b>

          <h3></h3>
          <h5>Weight:</h5>
          <b>{dogDetail.weight} kg</b>
          <h3></h3>
          <h5>Height:</h5>
          <b>{dogDetail.height} cm</b>
          <h3></h3>
          <h5>Years Of Life:</h5>
          <b>
            {dogDetail.createdInDB
              ? `${dogDetail.life_span} years approx`
              : dogDetail.life_span}
          </b>
        </div>
              
        <div className="imageCont">
          <img src={dogDetail.image} alt={dogDetail.name} className="imagen" />
        </div>
      </div>
    </div>
  </div>
  );
}





// import axios from "axios"
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import './detail.css';

// const Detail = () => {
//     const {id} = useParams();
//     const [dogs, setdogs] = useState({})

//     useEffect(() => {
//         axios(`http://localhost:3001/dogs/${id}`)
//         .then(({ data }) => {
//            if (data.name) {
//               setdogs(data);
//            } else {
//               window.alert('No hay personajes con ese ID');
//            }
//         });
//         return setdogs({});
//      }, [id]);
//     return(
//         <div className="card">
//         <div className="content">
//           <div className="text">
//             <h1>DOGS</h1>
//             <h2>{dogs?.name}</h2>
//             <h2>{dogs?.status}</h2>
//             <h2>{dogs?.species}</h2>
//             <h2>{dogs?.gender}</h2>
//           </div>
//           <div className="imageContainer">
//             <img className="image" src={dogs?.image} alt={dogs?.name} />
//           </div>
//         </div>
//       </div>
//     )
// }

// export default Detail;

