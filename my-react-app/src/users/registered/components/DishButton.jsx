
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

export default DishButton
