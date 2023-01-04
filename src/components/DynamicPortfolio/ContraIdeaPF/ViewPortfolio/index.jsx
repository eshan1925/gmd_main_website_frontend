import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./viewPortfolio.css";

const ViewPortfolio = () => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const navigate = useNavigate();

  console.log(userData);

  const getUserProjectsAndService = async (e) => {
    const userProjects = await axios.get(
      "http://localhost:8080/dynamicPortfolio/projects/" + userData._id
    );
    const userServices = await axios.get(
      "http://localhost:8080/dynamicPortfolio/services/" + userData._id
    );
  };

  const handleButtonClick = () => {
    navigate("/getmedesign/edit-portfolio/" + userData._id);
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="name">{userData.name}</div>
        <div className="buttonsForNav">
          <button className="aboutButton">ABOUT</button>
          <button className="workWithMeButton">WORK WITH ME</button>
        </div>
      </div>

      <div className="userInfo">
        {userData.name} is a <br /> -> {userData.gender} from {userData.country}{" "}
        .
      </div>
      {/* <div>
        {JSON.stringify(userData)}
      </div> */}

      <div className="userImage">
        <img
          className="profilePic"
          src={userData.profilePic}
          alt="profilePic"
        />
      </div>

      <div className="letsCollab">Let's Collaborate</div>
      <div className="workWithMeButtonColl">
        <button className="workWithMeButton">Work with Me</button>
      </div>

      <div className="bottomNav">
        <div className="secondaryNavDiv">
          <div className="aboutButton">About</div>
          <div className="aboutButton">Work with me</div>
        </div>
      </div>

      <div className="gmd">Powered by GET ME DESIGN</div>
    </div>
  );
};

export default ViewPortfolio;
