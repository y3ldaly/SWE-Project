import Header from "../components/Header";
import pickup from "../assets/pickup.png";
import delivery from "../assets/delivery.png";
import instore from "../assets/in-store.png";

const OrderPrompt = () => {
  return (
    <div className="page order__prompt__page">
      <Header />
      <div className="container">
        <p className="text-center message">Select order type :</p>
        <div className="cardsWrapper">
          <div className="card">
            <img src={pickup} alt="pickup" />
            <h2>Pickup</h2>
          </div>
          <div className="card">
            <img src={delivery} alt="pickup" />
            <h2>Delivery</h2>
          </div>
          <div className="card">
            <img src={instore} alt="pickup" />
            <h2>In store</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPrompt;
