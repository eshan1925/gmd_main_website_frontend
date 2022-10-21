import React from "react";
import { useEffect, useState, useContext } from "react";
import Post from "../Post";
import Share from "../Share";
import "./feed.css";
import axios from "axios";

const Feed = (props) => {
  const userData = props.user;
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log(userData._id);

    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:8080/api/posts/timeline/" + userData._id
      );

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [userData._id, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(userData._id || userData._id === user._id) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

// || userData._id === user.userName
