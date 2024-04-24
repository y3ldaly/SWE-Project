import Order from './order/Order'
import MenuPage from './menuPage/firstPage/MenuPage'
import Appetizers from './menuPage/fullMenu/appetizers/Appetizers'
import MainDishes from './menuPage/fullMenu/mainDishes/mainDishes'
import SignatureDishes from './menuPage/fullMenu/signatureDishes/SignatureDishes'
import FullMenu from './menuPage/fullMenu/fullMenu'
import PaymentPage from './paymentPage/paymentPage'


function App() {
    return(
        <>
            {/* <Appetizers /> */}
            {/* <Order/> */}
            {/* <MainDishes /> */}
            {/* <SignatureDishes /> */}
            <FullMenu/>
            {/* <PaymentPage/> */}
        </>
    )
}

export default App