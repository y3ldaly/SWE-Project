import './MenuButton.css'

function MenuButton(props){
    
    return(
        <div class="button">
            <img src={props.img} id="image"/>
            <p id="caption">{props.caption}</p>
        </div>
        
    );
}
export default MenuButton