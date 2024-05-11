import './SurferNavbar.css'
import '../../../index.css'
function SurferNavbar() {
    return(
        <>
            <h1>HIFRY HALAL</h1>
            <nav class="surfer-navbar">
                <div>
                    <ul>
                        <li></li> 
                        <li><a href="main.html" class="navButton">Home</a></li>
                        <li><a href="menu.html" class="navButton">Menu</a></li>
                        <li><a href="review.html" class="navButton">Review</a></li>
                        <li><a href="about.html" class="navButton">About</a></li>
                        <li><a href="sign-up.html" class="sign-up">Sign Up</a></li>
                        <li><a href="login.html " class="login"> Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SurferNavbar