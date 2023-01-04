import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
var axios = require("axios");

const ProjectDetails = () => {
  const [projectInfo, getProjectInfos] = useState("");

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData._id;
  // var config = {
  //     method: 'get',
  //     url: 'http://localhost:8080/project-manager/' + userId,
  //     headers: {}
  // };

  const url = "http://localhost:8080/project-manager/" + userId;

  useEffect(() => {
    getAllProjects();
    console.log("User-:" + userId + " accessed all his projects.");
  });

  const getAllProjects = async () => {
    await axios
      .get(`${url}`)
      .then((response) => {
        const allProjects = response.data;

        getProjectInfos(allProjects);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  var ProjectInfo = [];
  ProjectInfo = projectInfo;

  const finalElement = [];
  if (ProjectInfo.length === 0) {
    return (
      <center>
        <h1>No projects created from the user</h1>
      </center>
    );
  } else {
    ProjectInfo.forEach((data) => {
      var completedTasks = 0;
      var numberOfTasks = data.tasks.length;
      var dueDate = new Date(data.dueDate);
      dueDate = dueDate.toISOString();
      dueDate = dueDate.substr(0, 10);
      for (var i = 0; i < numberOfTasks; i++) {
        if (data.tasks[i].isCompleted) {
          completedTasks = completedTasks + 1;
        }
      }

      const percentageOfProjectComplete =
        (completedTasks / numberOfTasks) * 100;
      finalElement.push(
        <div className={styles.projectInfo}>
          <div className={styles.projectHeading}>{data.title}</div>
          <div className={styles.projectDescription}>
            <div className={styles.projectProgress}>
              <CircularProgressbar
                value={percentageOfProjectComplete}
                text={`${percentageOfProjectComplete}%`}
              />
            </div>
            <div className={styles.descDate}>
              {data.description}
              <div className={styles.dueDate}>{dueDate}</div>
            </div>
          </div>
        </div>
      );
    });

    return <div>{finalElement}</div>;
  }
};

export default ProjectDetails;
