// card.jsx
import "./card.css";

function Card( props ) {
  const { dog }=props

  return (
    <div className="card-container">
      <h2>{dog.name}</h2>
      <p> {dog.temperaments} </p>
      <div className="imageContainer">
      <img className="style.dogImage" src={dog.image} alt='' />
      </div>
      <p> {dog.height} </p>
      <p> {dog.weight} </p>
    </div>
  );
}

export default Card;
