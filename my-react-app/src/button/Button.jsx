import './Button.css'

function Button(props){
    
    return(
        <div className="button">
            <img className="button-image" src={props.img} alt={props.altText}></img>
            <h2 className="button-title">{props.title}</h2>
        </div>   
    );
}
export default Button