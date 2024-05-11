import { useEffect, useState } from 'react'

import HomeScreenCard from "../../components/HomeScreenCard"
import UserNavbar from "../../../registered/components/UserNavbar"
import shawarma from '../../assets/shawarma.jpg'
import nihari from '../../assets/nihari.png'
import biryani from '../../assets/chicken-biryani.jpg'

const [topDishes, setTopDishes]

useEffect(() => {
    const fetchTopDishes = async () => {
        // const response = await fetch('http://localhost:4000/api/')
        const json = await response.json()

        if (response.ok) {
            setTopDishes(json)
        }
    }

    fetchTopDishes();
}, [])

function UserHomeScreen() {
    return(
        <>
            <UserNavbar/>

            <h3 class='third-title'> Welcome, User </h3>
            <h2 class = 'second-title'> Top Three Dishes </h2>
            <div class="card-container">
                <HomeScreenCard img={shawarma} altText="Shawarma" title="Shawarma" caption="Lamb wrap with veggies" rating="★★★★★" price="$9.99"/>
                <HomeScreenCard img={nihari} altText="Nihari" title="Nihari" caption="Rich, slow-cooked meat stew flavored" rating="★★★★★" price="$14.99"/>
                <HomeScreenCard img={biryani} altText="Biryani" title="Biryani" caption="basmati rice layered over tender & succulent pieces of meat" rating="★★★★★" price="$14.99"/>

            </div>
        </>

    )
}
   
export default UserHomeScreen  


