import profilePic from '../assets/manager-profile-pic.jpg'
import './ManagerNavbar.css'

function ManagerNavbar() {
    return(
        <>
            <div class="manager-navbar">
                <h1 class="title">HIFRY Halal</h1>
                <img class="profile-pic" src={profilePic} alt="" />
            </div>
        </>
    )
}

export default ManagerNavbar