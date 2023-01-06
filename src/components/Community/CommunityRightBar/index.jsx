import React from "react";
import "./communityRightBar.css";
import QuestionBox from "./QuestionBox/index";
import CustomizedDialogsQuestion from "./QuestionPopUp/index";

const CommunitRightBar = (props) => {
    var userData = sessionStorage.getItem("userData");
    userData = JSON.parse(userData);
  return (
    <div className="communityRB">
      <CustomizedDialogsQuestion>
        <QuestionBox idOfPerson={userData._id}/>
      </CustomizedDialogsQuestion>
      <div className="topContributors">
        <div className="headingtc">Top Contributors</div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
        <div className="contributroInfo">
          <div className="nameAndProfilePic">
            <img
              src={require("../../../images/beardBoy.png")}
              className="profilePicTC"
              alt="profilePic"
            />
            <div className="name">Morris</div>
          </div>
          <div className="numberOfContri">20K+</div>
        </div>
      </div>
    </div>
  );
};

export default CommunitRightBar;
