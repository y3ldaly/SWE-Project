// import '../pages/homeScreen/UserHomeScreen.css'
import PropTypes from 'prop-types';

function HomeScreenCard(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.altText} />
            <h3 className="foodcard-title">{props.title}</h3>
            <p className="foodcard-caption">{props.caption}</p>
            <div className="star-rating">
                {props.rating}
            </div>
            <p className="foodcard-price">{props.price}</p>
            <button className="order-button">ORDER</button>
        </div>
    );
}

// Define propTypes for type checking
HomeScreenCard.propTypes = {
    img: PropTypes.string.isRequired, // img should be a string and is required
    altText: PropTypes.string.isRequired, // altText should be a string and is required
    title: PropTypes.string.isRequired, // title should be a string and is required
    caption: PropTypes.string.isRequired, // caption should be a string and is required
    rating: PropTypes.node, // rating can be any type of React node
    price: PropTypes.string.isRequired, // price should be a string and is required
};

export default HomeScreenCard;
