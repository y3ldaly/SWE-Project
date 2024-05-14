import React from "react";
import './HomeScreen.css'
// If 'sharwarma' is an image, make sure to import it like so:
// import sharwarma from './path_to_shawarma_image.jpg';

function FoodCard(props) {
  return (
    <div className="card">
      {/* This is a JSX comment inside the return */}
      <div>
        <img src={props.img} alt="Shawarma" />
        <h3>{props.title}</h3>
        <p>{props.caption}</p>
        <div className="star-rating">★★★★★</div>
        <p className="price">{props.price}</p>
        <button className="order-button">ORDER</button>
      </div>
    </div>
  );
}

export default FoodCard;
