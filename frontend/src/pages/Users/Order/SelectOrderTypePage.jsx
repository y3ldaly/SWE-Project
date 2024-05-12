import Navbar from "../../../components/Navbar/Navbar";
import pickup from "../../../assets/pickup.png";
import delivery from "../../../assets/delivery.png";
import instore from "../../../assets/in-store.png";
import '../Review/complimentorComplain.css'
import { Link } from "react-router-dom";


const OrderPrompt = () => {
  return (
    <div className="page order__prompt__page">
      <Navbar />
      <div className="container">
        <p className="text-center message">Select order type :</p>
        <div className="cardsWrapper">
          <div className="card">
            <img src={pickup} alt="pickup" className="image"/>
            <Link to="/order/pickup"><h2>Pickup</h2></Link>
          </div>
          <div className="card">
            <img src={delivery} alt="pickup" className="image"/>
            <Link to="/order/delivery"><h2>Delivery</h2></Link>
          </div>
          <div className="card">
            <img src={instore} alt="pickup" className="image"/>
            <Link to="/order/in-store"><h2>In_Store</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPrompt;