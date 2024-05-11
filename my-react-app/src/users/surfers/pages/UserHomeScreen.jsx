import { useEffect, useState } from 'react';
import HomeScreenCard from '../components/HomeScreenCard';

function UserHomeScreen() {
    const [existingDish, setExistingDish] = useState([]);

    const dishes = [
        {
          dishName: "birani",
          description: "asdasdadsads",
          price: "$9.99",
          keywords: ["chicken", "rice"],
          imageUrl: "" //import from assets
        },
        {
          dishName: "",
          description: "",
          price: "",
          keywords: [],
          imageUrl: ""
        },
        {
          dishName: "",
          description: "",
          price: "",
          keywords: [],
          imageUrl: ""
        },
        {
          dishName: "",
          description: "",
          price: "",
          keywords: [],
          imageUrl: ""
        },
        {
          dishName: "",
          description: "",
          price: "",
          keywords: [],
          imageUrl: ""
        }
      ];
      
      console.log(dishes);

    useEffect(() => {
        const fetchTopDishes = async () => {

            console.log('fetching dishes', existingDish)
            try {
                const response = await fetch('http://localhost:5173/api/menuItems');
                if (response.ok) {
                    console.log('setting dishes to json')
                    const json = await response.json();
                    setTopDishes(json);
                } else {
                    console.log('hello')
                    console.error('Failed to fetch top dishes');
                }
            } catch (error) {
                console.error('Error fetching top dishes:', error);
            }
        };

        fetchTopDishes();
    }, []);

    return (
        <>
            {/* <UserNavbar /> */}
            <h3 className='third-title'>Welcome, User</h3>
            <h2 className='second-title'>Top Three Dishes</h2>
            <div className='card-container'>
                {dishes.map((dish) => (
                    <HomeScreenCard
                        key={dish.id}
                        img={dish.img} 
                        altText={dish.altText}
                        title={dish.dishName}
                        caption={dish.description}
                    />
                ))}
            </div>
        </>
    );
}

export default UserHomeScreen;
