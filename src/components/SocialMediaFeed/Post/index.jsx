import React from "react";
import { useState, useEffect } from "react";
import "./post.css";
import axios from "axios";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Add, Remove } from "@mui/icons-material";

const Post = ({ post }) => {
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
        `https://getmedesignbackend.up.railway.app/profile/${post.userId}`
      );
      setUser(res.data[0]);
    };
    fetchUser();
    console.log(user);
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(
        "https://getmedesignbackend.up.railway.app/api/posts/" +
          post._id +
          "/like",
        {
          userId: currentUser._id,
        }
      );
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
          `https://getmedesignbackend.up.railway.app/profile/${currentUser._id}/unfollow`,
          {
            userId: user._id,
          }
        );
      } else {
        await axios.put(
          `https://getmedesignbackend.up.railway.app/profile/${currentUser._id}/follow`,
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
        <div className="postBottomm">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={require("../../../images/Icons/like.png")}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} Like</span>
          </div>
          {/* <div className="postBottomRight">
            <span className="postCommentText" onClick={comingSoonToast}>
              {post.comment} comments
            </span>
          </div> */}

          <div onClick={comingSoonToast} className="commentsPost">
            <div className="commentCounter">0</div>
            <div className="textOfComment">Comment</div>
          </div>
          <div onClick={comingSoonToast} className="favouriteMarker">
            Mark As Favourite
          </div>
          <div onClick={comingSoonToast} className="sharePost">
            <img
              className="likeIcon"
              src={require("../../../images/Icons/share.png")}
              alt=""
            />
            Share
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

export default Post;
