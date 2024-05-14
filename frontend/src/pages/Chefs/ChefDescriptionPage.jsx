import Form from "../../components/Form/Form"
import Navbar from '../../components/Navbar/Navbar' 

function ChefDescriptionPage() {
    return(
        <>
            <Navbar/>
            <Form caption="Write your description here:" title="Appetizers" option1="A" option2="B" option3="C"/>
            
        </>
    )
}

export default ChefDescriptionPage