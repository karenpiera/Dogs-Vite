/* eslint-disable react-hooks/exhaustive-deps */
//import React from "react";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail} from "../../redux/action";
import "./detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogDetail = useSelector((state) => state.detail);

 

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


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



