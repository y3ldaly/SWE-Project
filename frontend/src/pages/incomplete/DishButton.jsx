import PropTypes from 'prop-types'
import './DishButton.css'

function DishButton(props) {
    return (
        <div id="dishbutton-container">
            <div id="button">
                <div id="content">
                    <div id="text">
                        <h2 id="title">{props.title}</h2>
                        <p id="description">{props.description}</p>
                    </div>
                    <img src={props.img} alt={props.altText} id="image" />
                    <p id="price">{props.price}</p>
                </div>
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
