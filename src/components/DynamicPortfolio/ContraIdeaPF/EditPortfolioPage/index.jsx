import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditPortfolio = (props) => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const navigate = useNavigate();

  const viewPortfolio = async (e) => {
    window.open('http://localhost:3000/getmedesign/view-portfolio/' + userData._id, '_blank');
    // navigate("/getmedesign/view-portfolio/" + userData._id,"_blank");
  };
  return (
    <div>
      <div>Here user will be able to edit his portfolio</div>

      <button onClick={viewPortfolio}>View portfolio</button>
    </div>
  );
};

export default EditPortfolio;
