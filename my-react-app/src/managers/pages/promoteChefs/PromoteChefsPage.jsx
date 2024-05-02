import PromoteButton from "../../components/PromoteButton"
import ManagerNavbar from "../../components/ManagerNavbar"

let buttonName = "PROMOTE"

// function that retrieves dishCount for each chef

function PromoteChefsPage() {
    return (
        <>
            <ManagerNavbar/>
            <PromoteButton chefName="Chef Name" dishCount={3} buttonName={buttonName} />
            <PromoteButton chefName="Chef Name" dishCount={5} buttonName={buttonName} />
            <PromoteButton chefName="Chef Name" dishCount={3} buttonName={buttonName} />
            <PromoteButton chefName="Chef Name" dishCount={4} buttonName={buttonName} />
        </>
    )
}

export default PromoteChefsPage