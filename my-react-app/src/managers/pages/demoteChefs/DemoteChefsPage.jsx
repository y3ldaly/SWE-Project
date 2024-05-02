import DemoteButton from "../../components/DemoteButton"
import ManagerNavbar from "../../components/ManagerNavbar"

let buttonName = "DEMOTE"

// function that retrieves dishCount for each chef

function DemoteChefsPage() {
    return (
        <>
            <ManagerNavbar/>
            <DemoteButton chefName="Chef Name" dishCount={3} buttonName={buttonName} />
            <DemoteButton chefName="Chef Name" dishCount={3} buttonName={buttonName} />
            <DemoteButton chefName="Chef Name" dishCount={3} buttonName={buttonName} />
        </>
    )
}

export default DemoteChefsPage