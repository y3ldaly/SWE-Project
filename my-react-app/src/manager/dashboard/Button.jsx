import './Button.css';

function Button(props) {
    return(
        <>
            <div id="manager-button-container">
                <div className="manager-button">
                    <div className="image-wrapper">
                        <img className="manager-image" src={props.img} alt={props.altText}/>
                    </div>
                    <div className="caption">
                        <h2 className="manager-title">{props.caption}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Button;
