import Form from "../registered/components/Form"
import UserNavbar from '../registered/components/UserNavbar' 

function ChefDescriptionPage() {
    return(
        <>
            <UserNavbar/>
            <Form caption="Write your description here:" title="Appetizers" option1="A" option2="B" option3="C"/>
            
        </>
    )
}

export default ChefDescriptionPage