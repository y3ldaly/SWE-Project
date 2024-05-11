import { useState } from 'react'; // Import useState hook for managing state
import { Link } from 'react-router-dom';

import './UserNavbar.css';
import '../../../index.css';
import profilePic from './../assets/profile-pic.png';

function UserNavbar() {
    // Use state to manage the visibility of the dropdown menu
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle the visibility of the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            <nav className="navbar">
                <div>
                    <h1 className="title">HIFRY HALAL</h1>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Menu</Link></li>
                        <li><Link to='/'>Order</Link></li>
                        <li><Link to='/'>Review</Link></li>
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
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default UserNavbar;
