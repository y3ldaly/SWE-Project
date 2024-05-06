import './PromoteButton.css'
import chefProfile from '../assets/chef-profile-pic.png'
import DishButton from '../../users/registered/components/DishButton'

function PromoteButton(props) {
    // Assuming props.dishCount is the number of DishButtons to render
    const dishButtons = Array.from({ length: props.dishCount }, (_, index) => (
        <DishButton title="Hello" key={index} />
    ));

    return (
        <div id="pdbutton-container">
            <div id="button">
                <div id="title-container">
                    <img id="chef-pic" src={chefProfile} alt="" />
                    <p id="chef-name">{props.chefName}</p>
                </div>
                <p id="message"><strong>{props.dishCount}</strong> dishes with 4+ stars</p>
                <div className="chef-meals">{dishButtons}</div>
                <div className="pdButton-container">
                    <p id="promoteButton">{props.buttonName}</p>
                </div>
            </div>
        </div>
       
    );
}

export default PromoteButton;
