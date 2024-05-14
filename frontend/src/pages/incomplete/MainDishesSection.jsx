import DishButton from './DishButton'
import biryani from '../assets/biryani.png'
import shawarma from '../assets/shawarma.jpg'
import koshari from '../assets/koshari.png'

function MainDishes() {
    return (
        <>
            <div className="button-container">
                <DishButton img={biryani} altText="biryani" title="Biryani" price="$13.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of biryani. A character limit will need to be set for the caption." />
                <DishButton img={shawarma} altText="Shawarma" title="Shawarma" price="$9.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of shawarma. A character limit will need to be set for the caption." />
                <DishButton img={koshari} altText="Koshari" title="Koshari" price="$7.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of koshari. A character limit will need to be set for the caption." />
            </div>
        </>    
    )
}

export default MainDishes
