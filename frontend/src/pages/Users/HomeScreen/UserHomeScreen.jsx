import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './UserHomeScreen.css'
import HomeScreenCard from '../../../components/Cards/HomeScreen/HomeScreenCard';
import { useListMenuItemsQuery } from '../../../redux/apiServices/menuApi';
import { useGetUserDetailsQuery } from '../../../redux/apiServices/userApi';
// import biryani from '../assets/biryani.png'

function UserHomeScreen() {
    const { isLoading, data } = useListMenuItemsQuery()
    const { isLoading: loadingUser, data: userData } = useGetUserDetailsQuery()

    return (
        <>
            <Navbar />
            <h3 className='third-title'>Welcome, {!loadingUser && !userData ? "User" : userData?.userDetails?.username}</h3>
            <h2 className='second-title'>Top 3 Dishes:</h2>
            <div className='card-container'>
                {data?.slice(0, 3)?.map((dish, index) => (
                    <HomeScreenCard
                        key={index}
                        // key={dish._id}  // Assuming each dish document has an _id field
                        img={dish.imageUrl}  // Make sure this field name matches your data
                        altText={dish.altText}
                        title={dish.dishName}
                        caption={dish.description}
                        rating={dish.averageRating}
                        price={dish.price}
                    />
                ))}
            </div>
        </>
    );
}

export default UserHomeScreen;