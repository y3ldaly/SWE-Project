// import React from 'react';
// import { useHistory } from 'react-router-dom';
import React from 'react';
import './PromoteButton.css';

function PromoteButton({ onClick }) {
    return (
        <div class="promote-button-container">
            <button className="promote-button" onClick={onClick}>
                Promote
            </button>
        </div>
    );
  }  

// function PromoteButton(props) {
//   const history = useHistory();

//   const handlePromote = () => {
//     // Redirect to the specified link
//     history.push(props.link);
//   };

//   return (
    // <button className="promote-button" onClick={handlePromote}>
    //   Promote
    // </button>

//     <button>Promote</button>
//   );
// }

export default PromoteButton;
