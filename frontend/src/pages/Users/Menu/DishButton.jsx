import PropTypes from 'prop-types'
import './DishButton.css'
import { addToCart, getCart } from '../../../utils/cart';
import { useState } from 'react';
import { useRateMenuItemMutation } from '../../../redux/apiServices/feedbackApi';

function DishButton(props) {
    const cart = getCart();
    const [addedToCart, setAddedToCart] = useState(cart.some(item => item.dishName === props.title));
    const [rating, setRating] = useState(0); // Initialize rating state to 0

    const [rate, { isLoading, error }] = useRateMenuItemMutation()
    const handleAddToCart = () => {
        addToCart(props, 1);
        setAddedToCart(true);
    }

    const handleReview = (rating) => {
        // Add logic to submit rating to backend
        setRating(rating)
        rate({
            dishName: props.title,
            score: rating
        })
    }

    return (
        <div id="dishbutton-container">
            <div id="button">
                <div id="content">
                    <div id="text">
                        <h2 id="title">{props.title}</h2>
                        <p id="description">{props.description}</p>
                        <p id="title">{"Rate Item"}</p>
                        {!isLoading && error && <p className='error-message'>{error.data.message}</p>}
                        <div className='give-rating'>
                            {
                                Array.from({ length: 5 }, (_, i) => (
                                    <span
                                        key={i}
                                        // fill the color of stars based on the rating
                                        style={{ color: rating > i ? 'gold' : 'gray', cursor: 'pointer' }}
                                        onClick={() => handleReview(i + 1)}
                                    >★</span>
                                ))
                            }
                        </div>
                    </div>
                    <img src={props.img} alt={props.altText} id="image" />
                    <p id="price">${props.price}</p>
                </div>
                <button className="order-button" onClick={handleAddToCart}>
                    {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

DishButton.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired, // Validate img prop as a required string
    altText: PropTypes.string.isRequired, // Validate altText prop as a required string
    price: PropTypes.number.isRequired, // Validate price prop as a required number
}

export default DishButton
