import React from "react";
import { useState, useEffect } from "react";
import "./topic.css";
import axios from "axios";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Add, Remove } from "@mui/icons-material";

const Topic = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [followed, setFollowed] = useState(true);
  // const { user: currentUser } = useContext(AuthContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8080/profile/${post.userId}`
      );
      setUser(res.data[0]);
    };
    fetchUser();
    console.log(user);
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put("http://localhost:8080/api/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const navigateToUserProfile = () => {
    navigate("/social-feed/profile/" + user._id);
  };

  const followUnfollowButton = async () => {
    try {
      if (followed) {
        await axios.put(
          `http://localhost:8080/profile/${currentUser._id}/unfollow`,
          {
            userId: user._id,
          }
        );
      } else {
        await axios.put(
          `http://localhost:8080/profile/${currentUser._id}/follow`,
          {
            userId: user._id,
          }
        );
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const comingSoonToast = () => {
    toast("Coming soon");
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              onClick={navigateToUserProfile}
              className="postProfileImg"
              src={user.profilePic}
              alt=""
            ></img>
            <div className="nameAnddate">
              <span className="postUsername" onClick={navigateToUserProfile}>
                {user.name}
              </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
          </div>
          <div className="postTopRight">
            {currentUser._id !== user._id && (
              <button className="followButton" onClick={followUnfollowButton}>
                {followed ? "Unfollow" : "Follow"}
                {followed ? <Remove /> : <Add />}
              </button>
            )}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={require("../../../images/social/like.png")}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={require("../../../images/social/heart.png")}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={comingSoonToast}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
      <ToastContainer
        // position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        type="error"
      />
    </div>
  );
};

export default Topic;
