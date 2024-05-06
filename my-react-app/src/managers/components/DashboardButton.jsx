import './DashboardButton.css';

function DashboardButton(props) {
    return(
        <a href={props.link} className="dashboardbutton">
            <div id="button-container">
                <div className="button">
                    <div className="image-wrapper">
                        <img className="button-image" src={props.img} alt={props.altText}/>
                    </div>
                    <div className="caption">
                        <h2 className="button-title">{props.caption}</h2>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default DashboardButton;
