import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div className="commentt">
      <div className="usernameAndProfilePic">
        <img
          className="profilePic"
          src={require("../../../../images/boy.png")}
          alt="profilePicture"
        />
        <div className="usernameAndDate">
          <div className="userName">Selena</div>
          <div className="dateOfComment">Commented 4 Days Ago</div>
        </div>
      </div>

      <div className="commentText">What a post!!!</div>
      <div className="deleteComment">Delete</div>
    </div>
  );
};

export default Comment;
