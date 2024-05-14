import DishButton from './DishButton'
import kabsa from '../../../assets/kabsa.png'
import nihari from '../../../assets/nihari.jpg'
import tandoori from '../../../assets/tandoori.jpg'
import { useListMenuItemsQuery } from '../../../redux/apiServices/menuApi'

function SignatureDishes() {
    const {isLoading, data} = useListMenuItemsQuery()
    return (
        <>
            <div className="button-container">
                {
                    data?.map((dish) => (
                        <DishButton
                            key={dish._id}
                            img={dish.imageUrl || kabsa}
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

export default SignatureDishes
