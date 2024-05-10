import './DishCard.css'

function DishCard(props) {
  return (
    <div className="dish-card">
      <h3>{props.name}</h3>
      <p>Rating: {props.rating} stars</p>
    </div>
  );
}

export default DishCard;
