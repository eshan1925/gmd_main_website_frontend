import styles from "./styles.module.css";
import React from "react";
import ProjectDetails from "./ProjectDetails";
import CustomizedDialogs from "./PopupBox/index";
import CreateProject from "./CreateProject";
import ProfileView from "../ProfileView";
import UserNavbar from "../UserNavbar";

const ProjectManager = (props) => {
  const [value, setValue] = React.useState("Open");
  const user = props.userData;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const userData = JSON.parse(props.userData);
  console.log("UserId-: "+user._id+" accessed the project manager page.");
  return (
    <div className={styles.main_container}>
      <UserNavbar userInfo={userData} />
      <div className={styles.project_manager}>
        <ProfileView userData={userData} />
        <div className={styles.project_view}>
          <div className={styles.path_Details}>
            Home &#62; Organiser <b>&#62; Projects</b>
          </div>
          <div className={styles.project_options}>
            <select
              className={styles.project_status}
              value={value}
              onChange={handleChange}
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Archieves">Archieves</option>
            </select>
            <div className={styles.create_project}>
              <CustomizedDialogs>
                <CreateProject userId={JSON.stringify(userData._id)} />
              </CustomizedDialogs>
            </div>
          </div>
          <div id={styles.scrollControl}>
            <ProjectDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
