//import Form from "../registered/components/Form"
//import UserNavbar from '../registered/components/UserNavbar' 

import Form from "../../components/Form/Form"
import UserNavbar from "./UserNavbar"

function ChefComplaintPage() {
    return(
        <>
            <UserNavbar />
            <Form caption="Complain about the importer here:" title="Importers" option1="Some Dude" option2="Joe Mama"/>
            
        </>
    )
}

export default ChefComplaintPage