import DishButton from './DishButton'
import hummus from '../assets/hummus.jpg'
import labneh from '../assets/labneh.jpg'
import piyaju from '../assets/piyaju.png'

function Appetizers() {
    return (
        <>
            <div className="button-container">
                <DishButton img={hummus} altText="hummus" title="Hummus" price="$3.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of hummus. A character limit will need to be set for the caption." />
                <DishButton img={piyaju} altText="piyaju" title="Piyaju" price="$3.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of piyaju. A character limit will need to be set for the caption." />
                <DishButton img={labneh} altText="labneh" title="Labneh" price="$4.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of labneh. A character limit will need to be set for the caption." />
            </div>
        </>    
    )
}

export default Appetizers
