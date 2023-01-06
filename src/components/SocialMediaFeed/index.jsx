import React from "react";
import SocialProfileView from "./SocialProfileView";
import UserNavbar from "../UserNavbar";
import Rightbar from "../SocialMediaFeed/Rightbar";
import Feed from "./Feed";
import "./extra.css";

const SocialMediaFeed = (props) => {
  const userData = JSON.parse(props.userData);
  console.log("User-: "+userData._id+" accessed the social media feed page");
  return (
    <>
      <UserNavbar userInfo={userData} />
      <div className="homeContainer">
        <SocialProfileView selectedMenu="1" userData={userData} />
        <Feed user={userData} homePage={false} />
        <Rightbar profile="" />
      </div>
    </>
  );
};

export default SocialMediaFeed;
