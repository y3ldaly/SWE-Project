 import './UserNavbar.css'
 import '../../../index.css'
 import profilePic from './../assets/profile-pic.png'

function UserNavbar() {
    return(
        <> 
            <nav class="user-navbar">
            <h1>HIFRY HALAL</h1>
                <ul>
                    <li><a href="#" id="home" class="navButton">Home</a></li> 
                    <li><a href="#" id="menu" class="navButton">Menu</a></li>
                    <li><a href="#" id="order" class="navButton">Order</a></li>
                    <li><a href="#" id="review" class="navButton">Review</a></li>
                    <div class="profile-container">
                        <img src={profilePic} alt="Profile Picture" class="profile-pic" id="profile-pic"/>
                        {/* <div class="dropdown-menu" id="dropdown-menu">
                            <ul>
                                <li class="menu">View Profile</li>
                                <li class="menu">Settings</li>
                                <li class="menu">Log Out</li>
                            </ul>
                        </div> */}
                    </div>
                </ul>
                
            </nav>
        </>
    )
}

export default UserNavbar