import React from 'react';
import CommentBox from '../../../components/Comment/CommentBox'
import profilePic from '../../../assets/profile-pic.png'
import Navbar from '../../../components/Navbar/Navbar';
import { useGetForumPostsQuery } from '../../../redux/apiServices/feedbackApi';

function CustomerReportPage() {
    const { isLoading, data } = useGetForumPostsQuery();
    const handleReport = () => {
        // Handle report functionality here
    };

    const guidelinesStyle = {
        textAlign: 'center', // Center text
        fontSize: '18px', // Adjust font size
        margin: '20px auto', // Add margin for spacing and center horizontally
        maxWidth: '600px', // Set maximum width for content
    };

    const guidelinesStyle2 = {
        textAlign: 'left',
    }

    return (
        <>
            <Navbar />
            <div style={guidelinesStyle}>
                <p>View other user comments. You may choose to report them based on the following guidelines:</p>
                <ul style={guidelinesStyle2}>
                    <li>No unfair reviews, cursing, slander, or any misconduct will be tolerated.</li>
                    <li>**NOTE: You will receive a warning if your review is deemed inappropriate by the manager</li>
                </ul>
            </div>
            <div className="comment-section">
                {
                    data?.map((post) => (
                        <CommentBox
                            key={post._id}
                            profilePic={profilePic}
                            userName={post.userName}
                            comment={post.comment}
                            onReport={handleReport}
                            buttonTitle="DISPUTE"
                        />
                    ))
                }
                <CommentBox
                    profilePic={profilePic}
                    userName="JohnDoe_123"
                    comment="egyptian food is 🚮, sisi makes better food than y'all"
                    onReport={handleReport}
                    buttonTitle="DISPUTE"
                />
                <CommentBox
                    profilePic={profilePic}
                    userName="gigachad4000"
                    comment="this food is fiiirrrreeeee"
                    onReport={handleReport}
                    buttonTitle="DISPUTE"
                />
                <CommentBox
                    profilePic={profilePic}
                    userName="chickenfriedrice_03"
                    comment="really liked the nihari 💯🔥"
                    onReport={handleReport}
                    buttonTitle="DISPUTE"
                />
            </div>
        </>

    );
}

export default CustomerReportPage;
