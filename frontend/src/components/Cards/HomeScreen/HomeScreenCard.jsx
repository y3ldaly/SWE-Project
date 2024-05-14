import '../../../pages/Users/HomeScreen/UserHomeScreen.css';
import PropTypes from 'prop-types';
import { addToCart } from '../../../utils/cart';
import { useNavigate } from 'react-router-dom';

function HomeScreenCard(props) {
    const navigate = useNavigate();
    const handleOrder = () => {
        addToCart(props, 1)
        navigate('/order')
    }
    return (
        <div className="card">
            {props.img && <img src={props.img} alt={props.altText} />}
            <h3 className="foodcard-title">{props.title}</h3>
            <p className="foodcard-caption">{props.caption}</p>
            <div className="star-rating">
                {Array.from({ length: props.rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                ))}
            </div>
            <p className="foodcard-price">{props.price}</p>
            <button className="order-button" onClick={handleOrder}>ORDER</button>
        </div>
    );
}

HomeScreenCard.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    rating: PropTypes.number, // Updated to number
    price: PropTypes.string.isRequired,
};

export default HomeScreenCard;
