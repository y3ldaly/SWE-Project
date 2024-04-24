import DishButton from '../DishButton'
import kabsa from './kabsa.png'
import nihari from './nihari.jpg'
import tandoori from './tandoori.jpg'

function SignatureDishes() {
    return (
        <>
            <div className="button-container">
                <DishButton img={kabsa} altText="kabsa" title="Kabsa" price="$15.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of kabsa. A character limit will need to be set for the caption." />
                <DishButton img={nihari} altText="nihari" title="Nihari" price="$14.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of nihari. A character limit will need to be set for the caption." />
                <DishButton img={tandoori} altText="tandoori" title="Tandoori" price="$15.99" description="This is a really long caption that describes the delectable, irresistible, mouth-watering tantalizing taste of tandoori. A character limit will need to be set for the caption." />
            </div>
        </>    
    )
}

export default SignatureDishes
