// FraudComplaintsPage.jsx
import React, { useState } from 'react';
import ManagerComplaintComment from '../components/ManagerComplaintComment';
import './FraudComplaintsPage.css';
import customerProfilePic from '../../users/registered/assets/profile-pic.png'; // Update the import path for the profile picture
import ManagerNavbar from '../components/ManagerNavbar';
import ConfirmButton from '../../components/ConfirmButton';

function FraudComplaintsPage() {
  const [comments, setComments] = useState([
    {
      profilePic: customerProfilePic,
      userName: 'chowdaman_',
      comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium ullam voluptas dolores quam? Necessitatibus aspernatur, est modi temporibus saepe commodi debitis perferendis, eum vero magni exercitationem eligendi nemo doloribus!',
      buttonTitle: 'Approve',
      isClicked: false,
    },
    {
      profilePic: customerProfilePic,
      userName: 'banglabro23',
      comment: 'Those tomatoes were nasty',
      buttonTitle: 'Approve',
      isClicked: false,
    },
    {
      profilePic: customerProfilePic,
      userName: 'hingle_mccringleberry',
      comment: 'This guy is a ******',
      buttonTitle: 'Approve',
      isClicked: false,
    },
  ]);

  const handleButtonClick = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].isClicked = !updatedComments[index].isClicked;
    setComments(updatedComments);
  };

  return (
    <>
      <ManagerNavbar/>
      <div className="fraud-complaints-page">
      <h2 className="page-title">Fraud Complaints:</h2>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <ManagerComplaintComment
            key={index}
            profilePic={comment.profilePic}
            userName={comment.userName}
            comment={comment.comment}
            buttonTitle={comment.buttonTitle}
            onReport={() => handleButtonClick(index)}
            isClicked={comment.isClicked}
          />
        ))}
      </div>
    </div>
        <ConfirmButton/>
    </>
    
  );
}

export default FraudComplaintsPage;
