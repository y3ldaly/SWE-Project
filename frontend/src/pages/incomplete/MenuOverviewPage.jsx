
import './MenuButton.css'
import kabsa from '../../assets/kabsa.png'
import biryani from '../../assets/biryani.png'
import hummus from '../../assets/hummus.jpg'
import UserNavbar from './UserNavbar'
import MenuButton from './MenuButton'


function MenuOverviewPage() {
    return(
        <>
            <UserNavbar/>
            <div id="button-container">
                <div id="title-menu">
                    <p id="Menu">On The Menu</p>
                    <a href="https://www.google.com/" id="view-full-menu">View Full Menu</a>
                </div>
                <MenuButton img={hummus} caption="Appetizers"/>
                <MenuButton img={biryani} caption="Signature Dishes"/>
                <MenuButton img={kabsa} caption="Main Dishes"/>
            </div>
        </>
    )
}

export default MenuOverviewPage