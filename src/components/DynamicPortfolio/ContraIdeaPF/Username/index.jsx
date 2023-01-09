import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Username = (props) => {
  var currentUserData = JSON.parse(props.userData);
  currentUserData = currentUserData.data;
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setUsername(input.value);
  };

  const handleSubmit = async (e) => {
    var currentUsernames = await axios.get(
      "https://getmedesignbackend.up.railway.app/dynamicPortfolio/usernamesIntheDB/" +
        currentUserData[0]._id
    );
    currentUsernames = currentUsernames.data;
    currentUsernames = currentUsernames.map(function (elem) {
      return elem.toLowerCase().trim();
    });
    if (currentUsernames.includes(username)) {
      console.log(currentUsernames);
      console.log("Username already exits!!!");
      setUsername("");
    } else {
      console.log("Username available!!!");
      await axios.post(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/usernamesIntheDB/" +
          currentUserData[0]._id,
        { username: username }
      );
      navigate(
        "/complete-your-profile/display-picture-liner/" + currentUserData[0]._id
      );
    }
  };

  return (
    <div>
      <div id="wrapper">
        <h2 className="headingUsername">
          Create Your Username
          <p className="bodycopy">Enter your desired username...</p>
        </h2>
        <div className="imageTick">
          <img id="results-icon" />
          <input
            type="text"
            id="field-1"
            placeholder="Your New Username Here"
            value={username}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} id="button-1">
          Check Username
        </button>
      </div>
    </div>
  );
};

export default Username;
