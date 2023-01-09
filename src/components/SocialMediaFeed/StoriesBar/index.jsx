import React from "react";
import { useEffect, useState } from "react";
import "./stories.css";
import CustomizedDialogs from "./PopupBox/index";
import MaxWidthDialog from "./PopupBox/index";
import MaxWidthDialogForCreatingStory from "./CreateStoryPopupBox/index";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
// https://get-me-design-backend.herokuapp.com
const StoriesBar = (props) => {
  const stories = document.querySelectorAll("#stories-container .story");
  const [currentStories, setCurrentStories] = useState([]);
  const userData = props.userInfo;
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [loading, setLoading] = useState(false);
  stories.forEach((story) => {
    story.addEventListener("click", () => {
      stories.forEach((s) => {
        s.classList.remove("active");
      });

      if (!story.querySelector(".profile").classList.contains("visited")) {
        story.classList.add("active");
      }
    });
  });

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://getmedesignbackend.up.railway.app/api/story/timeline/" +
            userData._id
        );
        setCurrentStories(
          res.data.sort((s1, s2) => {
            return new Date(s2.createdAt) - new Date(s1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log(
          "All stories requested by user-:" + user._id + " sent successfully!"
        );
      }
    };
    fetchStories();
  }, [userData._id, user._id]);

  const fields: JSX.Element[] = [];
  for (let i = 0; i < currentStories.length; i++) {
    fields.push(<MaxWidthDialog profileInfo={currentStories[i]} />);
  }

  const addToStoryElement: JSX.Element[] = [];
  addToStoryElement.push(<MaxWidthDialogForCreatingStory />);

  return (
    <div id="stories-wrapper">
      <div id="stories-container">
        {addToStoryElement}
        {/* {!loading ? (
          { fields }
        ) : (
          <CircularProgress style={{ color: "white" }} />
        )} */}
        {fields}
        <div className="story">
          <div className="profile visited">
            <img src="https://www.w3schools.com/w3images/avatar1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;
