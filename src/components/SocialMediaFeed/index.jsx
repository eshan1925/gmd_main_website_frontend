import React from "react";
import SocialProfileView from "./SocialProfileView";
import UserNavbar from "../UserNavbar";
import Rightbar from "../SocialMediaFeed/Rightbar";
import Feed from "./Feed";
import "./extra.css";

const SocialMediaFeed = (props) => {
  const userData = JSON.parse(props.userData);
  return (
    <>
      <UserNavbar userInfo={userData} />
      <div className="homeContainer">
        <SocialProfileView userData={userData} />
        <Feed user={userData} homePage={false} />
        <Rightbar profile="" />
      </div>
    </>
  );
};

export default SocialMediaFeed;
