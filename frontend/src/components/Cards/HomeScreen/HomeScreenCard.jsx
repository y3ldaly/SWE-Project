import '../../../pages/Users/HomeScreen/UserHomeScreen.css';
import PropTypes from 'prop-types';

function HomeScreenCard(props) {
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
            <button className="order-button">ORDER</button>
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
