//import Form from "../registered/components/Form"
//import UserNavbar from '../registered/components/UserNavbar' 

import Form from "../../components/Form/Form"
import UserNavbar from "./UserNavbar"

function ChefComplimentPage() {
    return(
        <>
            <UserNavbar/>
            <Form caption="Compliment the importer here:" title="Importers" option1="Some Dude" option2="Joe Mama"/>
            
        </>
    )
}

export default ChefComplimentPage