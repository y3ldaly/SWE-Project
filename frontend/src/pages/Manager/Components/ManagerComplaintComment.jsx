import React, { useState } from 'react';
import './ManagerComplaintComment.css';

function ManagerComplaintComment({ profilePic, userName, comment }) {
  const [isApproveClicked, setIsApproveClicked] = useState(false);
  const [isDisapproveClicked, setIsDisapproveClicked] = useState(false);

  const handleApproveClick = () => {
    setIsApproveClicked(true); // Approve button clicked
    setIsDisapproveClicked(false); // Disapprove button unclicked
  };

  const handleDisapproveClick = () => {
    setIsApproveClicked(false); // Approve button unclicked
    setIsDisapproveClicked(true); // Disapprove button clicked
  };

  return (
    <div className="comment-box">
      <div className="user-info">
        <img src={profilePic} alt="Profile Pic" className="profile-pic" />
        <p className="user-name">{userName}</p>
      </div>
      <p className="comment">{comment}</p>
      <button className={`approve-button ${isApproveClicked ? 'clicked' : ''}`} onClick={handleApproveClick}>✔</button>
      <button className={`disapprove-button ${isDisapproveClicked ? 'clicked' : ''}`} onClick={handleDisapproveClick}>✖</button>
    </div>
  );
}

export default ManagerComplaintComment;
