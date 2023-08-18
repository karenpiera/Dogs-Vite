/* eslint-disable react/prop-types */
// card.jsx
import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  const { dog } = props;

  return (
    <div className="card-container">
       <Link to={"/detail/"+dog.id} > 
        <h2>{dog.name}</h2>
        <div className="imageContainer">
        <img className="dogImage" src={dog.image} alt='' />
        </div>
        <p> {dog.temperament} </p>
        <p> HEIGHT {dog.height} </p>
        <p> WEIGHT {dog.weight} </p>
      </Link>
    </div>
  );
}

export default Card;

