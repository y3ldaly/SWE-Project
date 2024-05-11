import React, { useState } from "react";
import './HomeScreen.css'

function FoodCard(props) {
  // State to track the current rating
  const [rating, setRating] = useState(0);

  // Function to handle clicking on a star
  const handleStarClick = (star) => {
    setRating(star);
  };

  // Function to render the stars based on the current rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star-filled" : "star-empty"}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card">
      <div>
        <img src={props.img} alt="Shawarma" />
        <h3>{props.title}</h3>
        <p>{props.caption}</p>
        <div className="star-rating">
          {renderStars()}
        </div>
        <p className="price">{props.price}</p>
        <button className="order-button">ORDER</button>
      </div>
    </div>
  );
}

export default FoodCard;
