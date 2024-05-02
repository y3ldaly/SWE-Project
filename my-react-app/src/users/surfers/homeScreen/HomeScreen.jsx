import FoodCard from "./FoodCard"
import NavbarBeforeLogin from './NavbarBeforeLogin'
import shawarma from './shawarma.jpg'
import nihari from './nihari.png'
import biryani from './chicken-biryani.jpg'

function HomeScreen() {
    return(
        <>
            <h1>HIFRY HALAL</h1>

            <NavbarBeforeLogin/>

            <h3 class='third-title'> Welcome, User </h3>
            <h2 class = 'second-title'> Top Three Dishes </h2>
            <div class="card-container">
                <FoodCard img={shawarma} altText="Shawarma" title="Shawarma" caption="Lamb wrap with veggies" rating="★★★★★" price="$9.99"/>
                <FoodCard img={nihari} altText="Nihari" title="Nihari" caption="Rich, slow-cooked meat stew flavored" rating="★★★★★" price="$14.99"/>
                <FoodCard img={biryani} altText="Biryani" title="Biryani" caption="basmati rice layered over tender & succulent pieces of meat" rating="★★★★★" price="$14.99"/>

            </div>
        </>

    )
}
   
export default HomeScreen  


