import React, { useState } from 'react'; // Import React and useState
import { Link } from 'react-router-dom'; // Import Link for routing
import profilePic from '../../assets/profile-pic.png'; // Check if path is correct
import './Navbar.css'; // Ensure this file exists and path is correct

function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav className="navbar">
            <div>
                <h1 className="title">HIFRY HALAL</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menus">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/feedback">Review</Link></li>
                    <div className="profile-container">
                        <img
                            src={profilePic}
                            alt="Profile Picture"
                            className="profile-pic"
                            onClick={toggleDropdown}
                        />
                        {isDropdownVisible && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/deregister">De-Register</Link></li>
                                    <li><Link to="/logout">Log out</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
