import './FullMenuPage.css'
import AppetizersSection from "./AppetizersSection"
import MainDishesSection from "./MainDishesSection"
import SignatureDishesSection from "./SignatureDishesSection"
import Navbar from '../../../components/Navbar/Navbar'

function FullMenuPage() {
    return(
        <>
            <Navbar/>
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