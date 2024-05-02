import profilePic from './profile-pic.png'
import './navbar.css'

function Navbar() {
    return(
        <>
            <div class="header">
                <h1 class="title">HIFRY Halal</h1>
                <img class="profile-pic" src={profilePic} alt="profile-pic" />
            </div>
        </>
    )
}

export default Navbar