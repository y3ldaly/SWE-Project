import '../pages/homeScreen/UserHomeScreen.css'


function HomeScreenCard(props) {
    return(
        <div class="card">
            <img src={props.img} alt={props.altText}/>
            <h3 class="foodcard-title">{props.title}</h3>
            <p class="foodcard-caption">{props.caption}</p>
            <div class="star-rating">
                {props.rating}
            </div>
            <p class="foodcard-price">{props.price}</p>
            <button class="order-button">ORDER</button>
        </div>
    )
}

export default HomeScreenCard