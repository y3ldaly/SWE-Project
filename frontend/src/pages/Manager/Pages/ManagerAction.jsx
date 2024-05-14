// import ManagerNavbar from "../components/ManagerNavbar"
// import   "../components/ManagerNavbar.css";
import React  from 'react';
// import './ManagerChooseComplain.css'
// import './ManagerAction.css'

function  ManagerAction() {
    return (
      <div className="container">
        <header className="header">
        </header>
        <div className="content">
            <ManagerNavbar/>
          <h2>The following actions have been taken:</h2>
          <ul>
            <li>Bonnie Green has been <span className="action">[demoted/fired]</span>.</li>
            <li>Joe Mama received a <span className="bonus">bonus</span>.</li>
          </ul>
          <button onClick={() => console.log('Returning home...')} className="homeButton">
            Return home
          </button>
        </div>
      </div>
    );
  }
  
  export default ManagerAction;