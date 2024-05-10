import React from 'react';
import CommentBox from '../components/CommentBox';
import profilePic from '../assets/profile-pic.png'
import UserNavbar from '../components/UserNavbar';

function UserViewComplaintsPage() {
    const handleReport = () => {
        // Handle report functionality here
    };

    const guidelinesStyle = {
        textAlign: 'center', // Center text
        fontSize: '20px', // Adjust font size
        margin: '20px auto', // Add margin for spacing and center horizontally
        maxWidth: '600px', // Set maximum width for content
        fontWeight: 'bold',
    };

    return (
        <>
            <UserNavbar/>
            <p style={guidelinesStyle}>Your complaints:</p>
            <div className="comment-section">
                <CommentBox 
                    profilePic={profilePic}
                    userName="sisi_soldier"
                    comment="yo shut your mouth before I throw you in jail"
                    onReport={handleReport}
                    buttonTitle="Dispute"
                />
                <CommentBox 
                    profilePic={profilePic}
                    userName="chickenfriedrice_03"
                    comment="this guy just made a racist comment against egyptians"
                    onReport={handleReport}
                    buttonTitle="Dispute"
                />
                
            </div>
        </>
        
    );
}

export default UserViewComplaintsPage;
