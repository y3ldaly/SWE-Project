import { useEffect, useState } from 'react';
import UserNavbar from '../../registered/components/UserNavbar';
import HomeScreenCard from '../components/HomeScreenCard';

function UserHomeScreen() {
    const [existingDish, setTopDishes] = useState([]);

    useEffect(() => {
        const fetchTopDishes = async () => {
            try {
                const response = await fetch('http://localhost:5173/api/menuItems');
                if (response.ok) {
                    const json = await response.json();
                    setTopDishes(json);
                } else {
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
            <UserNavbar />
            <h3 className='third-title'>Welcome, User</h3>
            <h2 className='second-title'>Top Three Dishes</h2>
            <div className='card-container'>
                {existingDish.map((dish) => (
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
