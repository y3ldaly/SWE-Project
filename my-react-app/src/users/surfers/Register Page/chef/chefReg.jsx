
import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import restaurant_icon from '../Assets/restaurant.png'
import address_icon from '../Assets/address.png'


const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">HIFRY HALAL</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>
            
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>

            <div className="input">
                <img src={restaurant_icon} alt="" />
                <input type="restaurant" placeholder="Restaurant Name"/>
            </div>


            <div className="input">
                <img src={address_icon}  alt="" />
                <input type="address" placeholder="Restaurant Address" />
            </div> 
            </div>

            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

            <div className="submit-container"> 
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
            </div>
        </div>
    )
}
export default LoginSignup