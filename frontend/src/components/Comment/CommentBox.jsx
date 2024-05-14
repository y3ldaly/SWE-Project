import './CommentBox.css'
import { Link } from 'react-router-dom';

function CommentBox(props) {
    return (
        <div className="comment-box">
            <div className="user-info">
                <img src={props.profilePic} alt="Profile Pic" className="profile-pic" />
                <p className="user-name">{props.userName}</p>
            </div>
            <p className="comment">{props.comment}</p>
            <Link to="/review/customer/dispute"><button className="report-button" onClick={props.onReport}>{props.buttonTitle}</button></Link>
        </div>
    );
}

export default CommentBox;
