import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './UserHomeScreen.css'
import HomeScreenCard from '../../../components/Cards/HomeScreen/HomeScreenCard';
// import biryani from '../assets/biryani.png'

function UserHomeScreen() {
    const [existingDish, setExistingDish] = useState([]);

    const dishes = [
        {
          title: "Biryani",
          caption: "chicken over rice",
          price: "$9.99",
          rating: 5,
          altText: "biryani",
          img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-1024x1536.jpg.webp",
        },
      ];
      
      console.log('BROTHA EWWWWWWWW');


    useEffect(() => {  
      const fetchTopDishes = async () => {
        console.log('fetching dishes', existingDish);
        try {
            // Make sure the URL matches your Express server's address and endpoint
            const response = await fetch('http://localhost:4000/api/menu/menuItems');
            if (response.ok) {
                const json = await response.json();
                setExistingDish(json);
                console.log('Fetched dishes:', json);
            } else {
                throw new Error('Failed to fetch top dishes');
            }
        } catch (error) {
            console.error('Error fetching top dishes:', error);
        }
        
    };
    fetchTopDishes();
    }, []);


    return (
        <>
            <Navbar/>
            <h3 className='third-title'>Welcome, User</h3>
            <h2 className='second-title'>Top 3 Dishes:</h2>
            <div className='card-container'>
                {existingDish.map((dish) => (
                    <HomeScreenCard
                        // key={dish._id}  // Assuming each dish document has an _id field
                        img={dish.img}  // Make sure this field name matches your data
                        altText={dish.altText}
                        title={dish.title}
                        caption={dish.caption}
                        rating={dish.rating}
                        price={dish.price}
                    />
                ))}
            </div>
        </>
    );
}

export default UserHomeScreen;