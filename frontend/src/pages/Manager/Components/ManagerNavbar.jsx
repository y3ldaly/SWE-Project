import { useState } from 'react';
import { Link } from 'react-router-dom';

import profilePic from '../../../assets/manager-profile-pic.jpg'
import './ManagerNavbar.css'

function ManagerNavbar() {
    // Use state to manage the visibility of the dropdown menu
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle the visibility of the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };


    return(
        <>
            <nav className="manager-navbar">
                <h1 className="title">HIFRY HALAL</h1>
                <div className="profile-container">
                    <img
                        src={profilePic}
                        alt="Profile Picture"
                        className="profile-pic"
                        id="profile-pic"
                        onClick={toggleDropdown}
                    />
                    {isDropdownVisible && (
                        <div className="dropdown-menu"> {/*id="dropdown-menu" removed */}
                            <ul>
                                <li className="menu"><Link to='/'>Profile</Link></li>
                                <li className="menu"><Link to='/'>De-Register</Link></li>
                                <li className="menu"><Link to='/'>Log out</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default ManagerNavbar