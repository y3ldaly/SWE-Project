import DishButton from './DishButton'
import hummus from '../../../assets/hummus.jpg'
import labneh from '../../../assets/labneh.jpg'
import piyaju from '../../../assets/piyaju.png'
import { useListMenuItemsQuery } from '../../../redux/apiServices/menuApi'

function Appetizers() {
    const {isLoading, data} = useListMenuItemsQuery()
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

export default Appetizers
