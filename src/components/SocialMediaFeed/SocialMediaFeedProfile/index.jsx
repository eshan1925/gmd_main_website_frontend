import React from "react";
import SocialProfileView from "../SocialProfileView";
import { useState, useEffect } from "react";
import UserNavbar from "../../UserNavbar";
import Post from "../Post";
import Share from "../Share";
import "./extra.css";
import axios from "axios";
import { Add, Remove } from "@mui/icons-material";

const SocialMediaFeedProfile = (props) => {
  const userData = JSON.parse(props.userData);
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const text = window.location.pathname;
  const myPath = text.split("/");
  const userWithTheProfile = myPath[myPath.length - 1];
  // console.log(user.followers.includes(userWithTheProfile));

  const [followed, setFollowed] = useState(
  );
  const [currentUserForProfilePageView, setCurrentUserforProfilePageView] =
    useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log(userData._id);
    const fetchPosts = async () => {
      var instantUser = await axios.get(
        "http://localhost:8080/profile/" + user._id
      );
      instantUser = instantUser.data[0];
      setFollowed(instantUser.followers.includes(userWithTheProfile));
      var currentUserProfile = await axios.get(
        "http://localhost:8080/profile/" + userWithTheProfile
      );
      setCurrentUserforProfilePageView(currentUserProfile["data"][0]);
      const res = await axios.get(
        "http://localhost:8080/api/posts/profile/" + userWithTheProfile
      );

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [userData._id, user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:8080/profile/${user._id}/unfollow`, {
          userId: userWithTheProfile,
        });
      } else {
        await axios.put(`http://localhost:8080/profile/${user._id}/follow`, {
          userId: userWithTheProfile,
        });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <UserNavbar userInfo={userData} />
      <div className="homeContainer">
        <SocialProfileView userData={userData} />
        <div className="feed">
          <div className="feedWrapper">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={require("../../../images/noCover.png")}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={currentUserForProfilePageView.profilePic}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">
                  {currentUserForProfilePageView.name}
                </h4>
                <span className="profileInfoDesc">
                  {currentUserForProfilePageView.Bio}
                </span>
              </div>
              <button className="rightbarFollowButton" onClick={handleClick}>
                {followed ? "Unfollow" : "Follow"}
                {followed ? <Remove /> : <Add />}
              </button>
            </div>
            {userData._id === userWithTheProfile && <Share />}
            {posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}
          </div>
        </div>
        <SocialProfileView userData={userData} />
        {/* <Rightbar profile=""/> */}
      </div>
    </>
  );
};

export default SocialMediaFeedProfile;
