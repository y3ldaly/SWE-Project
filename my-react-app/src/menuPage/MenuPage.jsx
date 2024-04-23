import Navbar from '../navbar/Navbar'
import MenuButton from './MenuButton'
import './MenuButton.css'
import kabsa from './kabsa.png'
import biryani from './biryani.png'
import hummus from './hummus.jpg'


function MenuPage() {
    return(
        <>
            <Navbar></Navbar>
            <div id="button-container">
                <div id="title-menu">
                    <p id="Menu">On The Menu</p>
                    <button id="view-full-menu">View Full Menu</button>
                </div>
                <MenuButton img={hummus} caption="Appetizers"/>
                <MenuButton img={biryani} caption="Signature Dishes"/>
                <MenuButton img={kabsa} caption="Main Dishes"/>
            </div>
        </>
    )
}

export default MenuPage