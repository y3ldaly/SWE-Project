import React from 'react';
import './HomeScreen.css'; // Ensure your CSS paths are correct
import './navbar.css';
import Shawarma from './AMAZING-30-minute-HEALTHY-Chickpea-Shawarma-Wraps-with-a-simple-Garlic-Dill-Sauce-An-easy-weeknight-vegan-plantbased-meal-healthy-recipe-mediterranean-minimalistbaker.jpg'
import FoodCard from "./foodcard"
import ChickenBiryani from './chicken-biryani.jpg.webp'
import Nihari from './Nihari.png'
function HomeScreen() {
    return (
        <div>
            <h1>HIFRY HALAL</h1>
            <nav className="navbar">
                <ul>
                    <li><a href="main.html" className="navButton">Home</a></li>
                    <li><a href="menu.html" className="navButton">Menu</a></li>
                    <li><a href="review.html" className="navButton">Review</a></li>
                    <li><a href="about.html" className="navButton">About</a></li>
                    <li><a href="sign-up.html" className='sign-up'>Sign Up</a></li>
                    <li><a href="login.html" className="login">Login</a></li>
                </ul>
            </nav>
            <h3 className='third-title'>Welcome, User</h3>
            <h2 className='second-title'>Top Three Dishes</h2>
            <div className="card-container">
              
            <FoodCard img={Shawarma} title="Shawarma" caption="Your caption here" price="$9.99"/>
            <FoodCard img={ChickenBiryani} title="Chicken Biryani" caption="Your caption here" price="$9.99"/>
            <FoodCard img={Nihari} title="Nihari" caption="Your caption here" price="$9.99"/>

            </div>
        </div>

    );
}

export default HomeScreen;
