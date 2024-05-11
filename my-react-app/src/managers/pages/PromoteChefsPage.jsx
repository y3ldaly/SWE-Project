// import { useState, }

import ManagerNavbar from "../components/ManagerNavbar"

import PromotionCard from "../components/PromotionCard"
import ConfirmButton from "../../components/ConfirmButton"

// implement function that retrieves dishCount for each chef


function PromoteChefsPage() {
    return (
        <>
            <ManagerNavbar/>
            <PromotionCard/>
            <ConfirmButton/>
        </>
    )
}

export default PromoteChefsPage