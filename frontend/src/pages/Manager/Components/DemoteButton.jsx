import './DemoteButton.css';
import chefProfile from '../../../assets/chef-profile-pic.png';
import PropTypes from 'prop-types'
import DishButton from '../../incomplete/DishButton';


function DemoteButton(props) {
    // Assuming props.dishCount is the number of DishButtons to render
    const dishButtons = Array.from({ length: props.dishCount }, (_, index) => (
        <DishButton key={index} />
    ));

    return (
        <div id="pdbutton-container">
            <div id="button">
                <div id="title-container">
                    <img id="chef-pic" src={chefProfile} alt="" />
                    <p id="chef-name">{props.chefName}</p>
                </div>
                <p id="message"><strong>{props.dishCount}</strong> dishes with 2 or less stars</p>
                <div className="chef-meals">{dishButtons}</div>
                <div className="pdButton-container">
                    <p id="demoteButton">{props.buttonName}</p>
                </div>
            </div>
        </div>
       
    );
}

DemoteButton.propTypes = {
    chefName: PropTypes.string.isRequired,
    dishCount: PropTypes.number.isRequired,
    buttonName: PropTypes.string.isRequired,
}

export default DemoteButton;
