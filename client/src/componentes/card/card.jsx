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
        <p> {dog.temperament} </p>
        <div className="imageContainer">
        <img className="dogImage" src={dog.image} alt='' />
        </div>
        <p> ALTURA {dog.height} </p>
        <p> PESO {dog.weight} </p>
      </Link>
    </div>
  );
}

export default Card;

