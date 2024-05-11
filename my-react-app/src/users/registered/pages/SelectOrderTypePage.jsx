import OrderOptionButton from '../components/OrderOptionButton'
import UserNavbar from '../components/UserNavbar'
import '../../../index.css'
import pickup from '../assets/pickup.png'
import delivery from '../assets/delivery.png'
import instore from '../assets/in-store.png'

function SelectOrderTypePage() {
    return(
        <>
            <UserNavbar />
            <p id="order-prompt">Select order type:</p>
            <div id="button-container">
                <OrderOptionButton img={pickup} altText="pickup-logo" title="Pickup"/>
                <OrderOptionButton img={delivery} altText="delivery-logo" title="Delivery"/>
                <OrderOptionButton img={instore} altText="instore-logo" title="In-Store"/>
            </div>
        </>
    )
}

export default SelectOrderTypePage
