import ManagerNavbar from "../components/ManagerNavbar"
import PromoteButton from "../components/PromoteButton"
import PromotionCard from "../components/PromotionCard"
import ConfirmButton from "../../components/ConfirmButton"

// implement function that retrieves dishCount for each chef


function PromoteChefsPage() {
    return (
        <>
            <ManagerNavbar/>
            <PromotionCard/>
            {/* <PromoteButton link="/"/> */}
            {/* <PromoteButton/> */}
            <ConfirmButton/>
        </>
    )
}

export default PromoteChefsPage