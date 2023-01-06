import React, { useState } from "react";
import Topic from "../Topic";
import "./communitynavbarAndFeed.css";
import Question from "../Question";

const CommunityNavBarAndFeed = () => {
  const [selectedMenu, setSelectedMenu] = useState("1");

  const HomeMenuClick = () => {
    setSelectedMenu("1");
  };

  const ExploreMenuClick = () => {
    setSelectedMenu("2");
  };

  const MyTopicsMenuClick = () => {
    setSelectedMenu("3");
  };

  const MyAnswersMenuClick = () => {
    setSelectedMenu("4");
  };
  return (
    <div className="community">
      <div className="cnavbar">
        <div className="forumHeading">Forum</div>
        <div className="menuForSelection">
          <div
            style={{
              backgroundColor: selectedMenu === "1" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "1" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={HomeMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/home.png")}
              alt="icon"
            />
            Home
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "2" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "2" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={ExploreMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/bulb.png")}
              alt="icon"
            />
            Explore Topics
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "3" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "3" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={MyTopicsMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/project.png")}
              alt="icon"
            />
            My Topics
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "4" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "4" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={MyAnswersMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/openBook.png")}
              alt="icon"
            />
            My Answers
          </div>
        </div>
      </div>
      <div className="cfeed">
        {selectedMenu === "1" && (
          <div>
            <Question />
            <Question />
            <Question />
          </div>
        )}
        {selectedMenu === "2" && <div>Explore</div>}
        {selectedMenu === "3" && <div>My Topics</div>}
        {selectedMenu === "4" && <div>My Answers</div>}
      </div>
    </div>
  );
};

export default CommunityNavBarAndFeed;
