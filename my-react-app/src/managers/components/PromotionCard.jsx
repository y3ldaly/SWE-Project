import React, { useState } from 'react';
import profilePic1 from '../assets/chef-profile-pic.png';
import profilePic2 from '../assets/chef-profile-pic.png';
import './PromotionCard.css';
import DishCard from './DishCard';

function PromotionCard({ chef }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`promotion-card ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className="title">
        <img src={chef.profilePic} alt="Chef Profile" className="profile-pic" />
        <h2 className="chef-name">{chef.name}</h2>
      </div>
      <p className="star-message">Dishes with 4+ stars:</p>
      <ul className="dishes-list">
        {chef.dishes.map((dish, index) => (
          <li key={index}>
            <DishCard name={dish.name} rating={dish.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const chefs = [
  {
    profilePic: profilePic2,
    name: 'Chef Furqan',
    dishes: [
      { name: 'Nihari', rating: 5 },
      { name: 'Biryani', rating: 4 },
    ],
  },
  {
    profilePic: profilePic2,
    name: 'Chef Youssef',
    dishes: [
      { name: 'Koshari', rating: 5 },
      { name: 'Hummus', rating: 4 },
      { name: 'Labneh', rating: 4 },
    ],
  },
  {
    profilePic: profilePic2,
    name: 'Chef Ismail',
    dishes: [
      { name: 'Biryani', rating: 5 },
      { name: 'Hummus', rating: 4 },
      { name: 'Piyaju', rating: 5 },
    ],
  },
  {
    profilePic: profilePic2,
    name: 'Chef Hassan',
    dishes: [
      { name: 'Biryani', rating: 5 },
      { name: 'Hummus', rating: 4 },
      { name: 'Piyaju', rating: 5 },
    ],
  }
];

function PromotionCards() {
  return (
    <div className="promotion-cards">
      {chefs.map((chef, index) => (
        <PromotionCard key={index} chef={chef} />
      ))}
    </div>
  );
}

export default PromotionCards;
