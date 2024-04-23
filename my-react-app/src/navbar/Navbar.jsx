 import './Navbar.css'

function Navbar() {
    return(
        <>
            <h1>HIFRY Halal</h1>
            
            <nav class="navbar">
                <ul>
                    <li></li> 
                    <li><a href="#" id="home" class="navButton">Home</a></li> 
                    <li><a href="#" id="menu" class="navButton">Menu</a></li>
                    <li><a href="#" id="order" class="navButton">Order</a></li>
                    <li><a href="#" id="review" class="navButton">Review</a></li>
                </ul>
                {/* <div class="profile-container">
                    <img src="profile-pic.png" alt="Profile Picture" class="profile-pic" id="profile-pic"/>
                    <div class="dropdown-menu" id="dropdown-menu">
                        <ul>
                            <li class="menu">View Profile</li>
                            <li class="menu">Settings</li>
                            <li class="menu">Log Out</li>
                        </ul>
                    </div>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar