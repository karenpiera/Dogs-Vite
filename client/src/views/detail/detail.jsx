//import React from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/action";
import "./detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedDog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  if (!selectedDog) {
    return <h2>Breed not found</h2>;
  }

  return (
    <div className="detailContainer">
      <h2 className="detailName">{selectedDog.name}</h2>
      <img
        src={selectedDog.image}
        alt={selectedDog.name}
        width="476"
        height="300"
        className="detailImage"
      />
      <div className="detailTemperamentsContainer">
        <h3> temperaments:</h3>
        <h4 className="detailTemperaments">
          {selectedDog.createdInDB
            ? selectedDog.temperaments.map((temperament) => (
                <span key={temperament.id}>{temperament.name}, </span>
              ))
            : selectedDog.temperament}
        </h4>
      </div>

      <div className="heightAndWeightAndSpan">
        <h3>weight:</h3>
        <h4>{selectedDog.weight} kg</h4>
      </div>

      <div className="heightAndWeightAndSpan">
        <h3>Height:</h3>
        <h4>{selectedDog.height} cm</h4>
      </div>

      <div className="heightAndWeightAndSpan">
        <h3>life span:</h3>
        <h4>
          {selectedDog.createdInDB
            ? `${selectedDog.life_span} years approx`
            : selectedDog.life_span}
        </h4>
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

