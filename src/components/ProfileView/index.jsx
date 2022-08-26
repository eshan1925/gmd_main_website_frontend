import React from 'react'
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import PurpleButton from "./PurpleButton";

const ProfileView = (props) => {
    const navigate = useNavigate();
    const userData = props.userData;
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
  const navigateToBlogs = () => {
    navigate("/blogs/" + userid + "/all-blogs");
  };
  return (
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
  )
}

export default ProfileView