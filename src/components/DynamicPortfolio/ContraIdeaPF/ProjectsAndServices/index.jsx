import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProjectsAndServices = (props) => {
  var currentUserData = JSON.parse(props.userData);
  const navigate = useNavigate();
  const [projectDetail, setprojectDetail] = useState({
    creatorOfProject:currentUserData._id,
    title: "",
    link: "",
    description: "",
  });

  const [service, setService] = useState({
    creatorOfService:currentUserData._id,
    name: "",
    title: "",
    description: "",
    link:"",
    cost: "",
  });
  const handleSubmit = async (e) => {
    var updatedUserData = await axios.get(
      "http://localhost:8080/profile/" + currentUserData._id
    );

    updatedUserData = updatedUserData.data[0];
    console.log(updatedUserData);
    sessionStorage.removeItem("userData");
    sessionStorage.setItem("userData", JSON.stringify(updatedUserData));
    navigate("/getmedesign/edit-portfolio/" + currentUserData._id);
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    try {
      const { projectDetail: res } = await axios.post(
        "http://localhost:8080/dynamicPortfolio/projects/" +
          currentUserData._id,
        projectDetail
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitServices = async (e) => {
    await axios.post(
      "http://localhost:8080/dynamicPortfolio/services/" +
        currentUserData._id,
      service
    );
  };

  const handleChange = ({ currentTarget: input }) => {
    setprojectDetail({ ...projectDetail, [input.name]: input.value });
  };

  const handleServiceChange = ({ currentTarget: input }) => {
    setService({ ...service, [input.name]: input.value });
  };

  return (
    <div>
      <div>
        Project Name
        <input
          name="title"
          type="text"
          value={projectDetail.title}
          onChange={handleChange}
        />
        <br />
        <div>Project Link</div>
        <input
          name="link"
          type="text"
          onChange={handleChange}
          value={projectDetail.link}
        />
        <div>About your project</div>
        <input
          name="description"
          type="text"
          onChange={handleChange}
          value={projectDetail.description}
        />
        <button onClick={handleSubmitProject}>ADD +</button>
      </div>

      <br />
      <div>
        Service Name
        <input
          name="title"
          type="text"
          value={service.title}
          onChange={handleServiceChange}
        />
        <br />
        <div>Service Link</div>
        <input
          name="link"
          type="text"
          onChange={handleServiceChange}
          value={service.link}
        />
        <div>About your project</div>
        <input
          name="description"
          type="text"
          onChange={handleServiceChange}
          value={service.description}
        />
        <div>Cost of your project</div>
        <input
          name="cost"
          type="text"
          onChange={handleServiceChange}
          value={service.cost}
        />
        <button onClick={handleSubmitServices}>ADD + </button>
      </div>

      <button onClick={handleSubmit}>Next -> </button>
    </div>
  );
};

export default ProjectsAndServices;
