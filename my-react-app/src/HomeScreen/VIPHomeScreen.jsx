import React from 'react';
import './HomeScreen.css'; // Ensure your CSS paths are correct
import './navbar.css';
import Shawarma from '../users/registered/assets/shawarma.jpg'
import FoodCard from "./foodcard"
import Biryani from '../users/registered/assets/biryani.png'
import Nihari from '../users/registered/assets/nihari.jpg'
import WarningNotification from './WarningNotification'; // Adjust the path based on your file structure
import UserNavbar from '../users/registered/components/UserNavbar';
import '../users/registered/components/UserNavbar.css'


function HomeScreen() {
    return (
        <div>
                    <UserNavbar/>
            <h3 className='third-title'>Welcome, VIP USER</h3>
            <h2 className='second-title'>Top Three Dishes</h2>
            <div className="card-container">
            <WarningNotification/>
            <FoodCard img={Shawarma} title="Shawarma" caption="Your caption here" price="$9.99"/>
            <FoodCard img={Biryani} title="Chicken Biryani" caption="Your caption here" price="$9.99"/>
            <FoodCard img={Nihari} title="Nihari" caption="Your caption here" price="$9.99"/>
           </div>
        </div>

    );
}
export default HomeScreen;
