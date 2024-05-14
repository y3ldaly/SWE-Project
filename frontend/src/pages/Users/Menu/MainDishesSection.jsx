import DishButton from './DishButton'
import biryani from '../../../assets/biryani.png'
import shawarma from '../../../assets/shawarma.jpg'
import koshari from '../../../assets/koshari.png'
import { useListMenuItemsQuery } from '../../../redux/apiServices/menuApi'

function MainDishes() {
    const { isLoading, data } = useListMenuItemsQuery()
    return (
        <>
            <div className="button-container">
                {
                    data?.map((dish) => (
                        <DishButton
                            key={dish._id}
                            img={dish.imageUrl || hummus}
                            altText={dish.altText}
                            title={dish.dishName}
                            price={dish.price}
                            description={dish.description}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MainDishes
