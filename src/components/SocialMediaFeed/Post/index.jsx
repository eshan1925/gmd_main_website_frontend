import React from "react";
import { useState, useEffect,useContext } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";


const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // const { user: currentUser } = useContext(AuthContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userData"));


  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id));
  },[currentUser._id,post.likes]);

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

  

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <a href={`profile/${user._id}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePic
                }
                alt=""
              ></img>
            </a>
            <span className="postUsername">{user.name}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
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
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
