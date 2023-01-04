import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DOBGenLoc = (props) => {
  var currentUserData = JSON.parse(props.userData);
  const navigate = useNavigate();
  const [data, setData] = useState({ dateOfBirth: "", country: "", gender: "" });
  const handleSubmit = async (e) => {
    await axios.post(
      "http://localhost:8080/dynamicPortfolio/DOB-gender-location/" + currentUserData._id,
      { data }
    );
    navigate(
      "/complete-your-profile/projects-and-services/" + currentUserData._id
    );
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value});
  };
  return (
    <div>
      Choose your date of birth
      <input type="date" name="dateOfBirth" value={data.dateOfBirth} onChange={handleChange} />
      <br />
      <div>Location</div>
      <input
        type="text"
        name="country"
        value={data.country}
        onChange={handleChange}
      />
      <div>Gender</div>
      <input
        type="text"
        name="gender"
        value={data.gender}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Next -></button>
    </div>
  );
};

export default DOBGenLoc;
