import './fullMenu.css'
import Appetizers from "./appetizers/Appetizers"
import MainDishes from "./mainDishes/mainDishes"
import SignatureDishes from "./signatureDishes/SignatureDishes"
import Navbar from '../../navbar/Navbar'

function FullMenu() {
    return(
        <>
            <Navbar/>
            <h2 className="subtitle">Appetizers</h2>
            <Appetizers/>
            <h2 className="subtitle">Main Dishes</h2>
            <MainDishes/>
            <h2 className="subtitle">Signature Dishes</h2>
            <SignatureDishes/>
        </>
    )
}

export default FullMenu