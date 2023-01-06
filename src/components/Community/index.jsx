import React from "react";
import SocialProfileView from "../SocialMediaFeed/SocialProfileView";
import UserNavbar from "../UserNavbar";
import CommunityRightbar from "./CommunityRightBar";
import CommunityNavBarAndFeed from "./CommunityNavBar";
import "./community.css";

const Community = (props) => {
  const userData = JSON.parse(props.userData);
  return (
    <>
      <UserNavbar userInfo={userData} />
      <div className="homeContainer">
        <SocialProfileView userData={userData} />
        <CommunityNavBarAndFeed currentUser={userData} />
        <CommunityRightbar currentUser={userData} />
      </div>
    </>
  );
};

export default Community;
