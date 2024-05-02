import './PromoDemoButton.css'
import chefProfile from './chef-profile-pic.png'
import DishButton from '../../menuPage/fullMenu/DishButton'

function PromoDemoButton(props) {
    return(
        <>
            <div id="pd-button-container">
                <div id="pd-button">
                    <div id="title-container">
                        <img id="chef-pic" src={chefProfile} alt="" />
                        <p id="chef-name">{props.chefName}</p>
                    </div>
                    <p id="pd-message"><span id="num-dishes">3 </span>{props.pdMessage}</p> {/*# of dishes needs to be retrieved */}
                    <DishButton/> {/*need to retrieve from database using ... */}
                    <DishButton/>
                    <DishButton/>
                    <div id="promote-demote">{props.pdButton}</div>
                </div>
            </div>

        </>
    )
}

export default PromoDemoButton