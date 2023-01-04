import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FileBase64 from "react-file-base64";

const ProfilePic = (props) => {
  var currentUserData = JSON.parse(props.userData);
  const navigate = useNavigate();
  const [oneLiner, setOneLiner] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const handleSubmit = async (e) => {
    console.log(oneLiner+" "+profilePic.length);
    console.log(currentUserData);
    await axios.post(
      "http://localhost:8080/dynamicPortfolio/profilePicAndOneLinerIntheDB/" +
        currentUserData._id,
      { profilePic: profilePic, oneLiner: oneLiner }
    );
    navigate(
      "/complete-your-profile/date-of-birth-and-gender-location/" +
        currentUserData._id
    );
  };

  const handleChange = ({ currentTarget: input }) => {
    setOneLiner(input.value);
  };
  return (
    <div>
      Choose your profile picture
      <FileBase64
        className="fileBase"
        multiple={false}
        type="file"
        accept=".png,.jpeg,.jpg"
        onDone={({ base64 }) => setProfilePic(base64)}
        status={null}
      />
      <br />
      <div>Write a one liner that describes you</div>
      <input type="text" value={oneLiner} onChange={handleChange} />
      <button onClick={handleSubmit}>Next -></button>
    </div>
  );
};

export default ProfilePic;
