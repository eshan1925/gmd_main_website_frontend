import styles from "./styles.module.css";
import PurpleButton from "./PurpleButton";
import React from "react";
import ProjectDetails from "./ProjectDetails";
import CustomizedDialogs from "./PopupBox/index";
import CreateProject from "./CreateProject";
import { useNavigate } from "react-router-dom";

const ProjectManager = (props) => {
  const [value, setValue] = React.useState("Open");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location = "/";
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const navigateToTasks = () => {
    navigate("/calendar/" + userid);
  };

  const navigateToProjects = () => {
    navigate("/project-manager/" + userid);
  };
  const navigateToMeetings = () => {
    navigate("/calendar/" + userid);
  };
  const navigateToPayments = () => {
    navigate("/calendar/" + userid);
  };
  const navigateToCalendar = () => {
    navigate("/calendar/" + userid);
  };
  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToBlogs = () => {
    navigate("/blogs/" + userid + "/all-blogs");
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <div >
          <img
          className={styles.logo}
            onClick={navigateToHome}
            src={require("../../images/gmdLogo.png")}
            alt="logo"
          />
        </div>
        <button onClick={navigateToLogin} className={styles.logOut}>
          LogOut
        </button>
      </nav>
      <div className={styles.project_manager}>
        <div className={styles.profile_view}>
          <div className={styles.profile_stats}>
            <img
              className={styles.profile_pic}
              src="https://res.cloudinary.com/disyzw2gk/image/upload/v1657866396/Internship%20OpenBox/image_2022-07-15_11-41-54_vxyzab.png"
              alt="profilePic"
              height="200px"
              width="200px"
            />
            <div className={styles.profile_info}>
              {userData.name}✅<br />
              <b>4.3K Friends&nbsp;&nbsp; 4 Groups</b>
            </div>
          </div>
          <div className={styles.profile_details}>
            <button onClick={navigateToProjects}>
              <div className={styles.buttonName}>Projects</div>
            </button>
            <button onClick={navigateToTasks}>
              <div className={styles.buttonName}>Tasks</div>
            </button>
            <button onClick={navigateToBlogs}>
              <div className={styles.buttonName}>Blogs</div>
            </button>
            <button onClick={navigateToCalendar}>
              <div className={styles.buttonName}>Calendar</div>
            </button>
            <button onClick={navigateToMeetings}>
              <div className={styles.buttonName}>Meetings</div>
            </button>
            <button onClick={navigateToPayments}>
              <div className={styles.buttonName}>Payments</div>
            </button>
          </div>
          <div className={styles.pro_subscription}>
            <PurpleButton title="Get PRO now" />
          </div>
        </div>
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
