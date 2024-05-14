import './FullMenuPage.css'
import AppetizersSection from "../components/AppetizersSection"
import MainDishesSection from "../components/MainDishesSection"
import SignatureDishesSection from "../components/SignatureDishesSection"
import UserNavbar from '../components/UserNavbar'

function FullMenuPage() {
    return(
        <>
            <UserNavbar/>
            <h2 className="subtitle">Appetizers</h2>
            <AppetizersSection/>
            <h2 className="subtitle">Main Dishes</h2>
            <MainDishesSection/>
            <h2 className="subtitle">Signature Dishes</h2>
            <SignatureDishesSection/>
        </>
    )
}

export default FullMenuPage