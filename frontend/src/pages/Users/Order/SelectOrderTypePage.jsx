import Navbar from "../../../components/Navbar/Navbar";
import pickup from "../../../assets/pickup.png";
import delivery from "../../../assets/delivery.png";
import instore from "../../../assets/in-store.png";
import '../Review/complimentorComplain.css'
import { Link, useNavigate } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../../redux/apiServices/userApi";
import { getCart } from "../../../utils/cart";


const OrderPrompt = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useGetUserDetailsQuery();

  const cart = getCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);


  const handleNavigation = (path) => {
    if (isLoading) return;

    if (!data) {
      return navigate('/login');
    }

    if (data?.userDetails?.balance < total) {
      return navigate('/incomplete/addDeposit');
    }

    navigate(path);
  }
  return (
    <div className="page order__prompt__page">
      <Navbar />
      <div className="container">
        <p className="text-center message">Select order type :</p>
        <div className="cardsWrapper">
          <div className="card">
            <img src={pickup} alt="pickup" className="image" />
            <h2 onClick={() => handleNavigation('/order/pickup')}>Pickup</h2>
          </div>
          <div className="card">
            <img src={delivery} alt="pickup" className="image" />
            <h2 onClick={() => handleNavigation('/order/delivery')}>Delivery</h2>
          </div>
          <div className="card">
            <img src={instore} alt="pickup" className="image" />
            <h2 onClick={() => handleNavigation('/order/in-store')}>In_Store</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPrompt;