import '../../../pages/Users/HomeScreen/UserHomeScreen.css'
import PropTypes from 'prop-types';

function HomeScreenCard(props) {
    
    
    return (
        <div className="card">
            {props.img && <img src={props.img} />}
            <h3 className="foodcard-title">{props.title}</h3>
        
        {/* <div className="card">
            <img src={props.img} alt={props.altText} />
            <h3 className="foodcard-title">{props.title}</h3> */}
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
    img: PropTypes.string, // img should be a string and is required
    altText: PropTypes.string, // altText should be a string and is required
    title: PropTypes.string, // title should be a string and is required
    caption: PropTypes.string, // caption should be a string and is required
    rating: PropTypes.node, // rating can be any type of React node
    price: PropTypes.string, // price should be a string and is required
};

export default HomeScreenCard;
