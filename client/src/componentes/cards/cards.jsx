
import PropTypes from "prop-types";
import Card from "../card/card";
import "./cards.css";

function Cards({ allDogs }) {
  return (
    <div className="card-list">
      {allDogs?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  allDogs: PropTypes.array, // Aquí puedes ajustar el tipo según la estructura de datos de allDogs
};

export default Cards;








