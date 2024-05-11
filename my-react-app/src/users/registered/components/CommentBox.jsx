import './CommentBox.css'

function CommentBox(props) {
    return (
        <div className="comment-box">
            <div className="user-info">
                <img src={props.profilePic} alt="Profile Pic" className="profile-pic" />
                <p className="user-name">{props.userName}</p>
            </div>
            <p className="comment">{props.comment}</p>
            <button className="report-button" onClick={props.onReport}>{props.buttonTitle}</button>
        </div>
    );
}

export default CommentBox;
