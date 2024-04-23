import Button from '../button/Button'
import Navbar from '../navbar/Navbar'
import '../index.css'
import pickup from './pickup.png'
import delivery from './delivery.png'
import instore from './in-store.png'

function App() {
    return(
        <>
            <Navbar />
            <p id="order-prompt">Select order type:</p>
            <div id="button-container">
                <Button img={pickup} altText="pickup-logo" title="Pickup"></Button>
                <Button img={delivery} altText="delivery-logo" title="Delivery"></Button>
                <Button img={instore} altText="instore-logo" title="In-Store"></Button>
            </div>
        </>
    )
}

export default App