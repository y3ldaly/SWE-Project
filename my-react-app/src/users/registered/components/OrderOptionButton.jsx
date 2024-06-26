import './OrderOptionButton.css'

function OrderOptionButton(props){
    
    return(
        <div className="orderoption-button">
            <img className="button-image" src={props.img} alt={props.altText}></img>
            <h2 className="button-title">{props.title}</h2>
        </div>   
    );
}
export default OrderOptionButton