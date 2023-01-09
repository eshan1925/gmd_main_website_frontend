import React from "react";
import { useEffect, useState } from "react";
import Post from "../Post";
import Share from "../Share";
import "./feed.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import StoriesBar from "../StoriesBar";

const Feed = (props) => {
  const userData = props.user;
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log(userData._id);

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://getmedesignbackend.up.railway.app/api/posts/timeline/" +
            userData._id
        );
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log(
          "All posts requested by user-:" + user._id + " sent successfully!"
        );
      }
    };
    fetchPosts();
  }, [userData._id, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="storiesSection">
          {(userData._id || userData._id === user._id) && (
            <StoriesBar userInfo={userData} />
          )}
        </div>
        <div className="sharePostSection">
          {(userData._id || userData._id === user._id) && <Share />}
        </div>
        {!loading ? (
          <>
            {posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}
          </>
        ) : (
          <CircularProgress style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Feed;

// || userData._id === user.userName
