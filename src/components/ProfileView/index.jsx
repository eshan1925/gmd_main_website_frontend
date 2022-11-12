import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import PurpleButton from "./PurpleButton";

const ProfileView = (props) => {
  const navigate = useNavigate();
  const userData = props.userData;
  const userid = userData._id;
  const [sideBar, setSideBar] = React.useState(true);
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

  const navigateToProfile = () => {
    navigate("/profile/" + userid);
  };

  const sideBarValue = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      {sideBar ? (
        <>
          <div className={styles.profile_view}>
            <button onClick={sideBarValue} className={styles.shrinker}>
              Shrink this Menu!
            </button>

            <div className={styles.profile_stats}>
              <img
                onClick={navigateToProfile}
                className={styles.profile_pic}
                src={userData["profilePic"]}
                alt="profilePic"
              />
              <div className={styles.profile_info}>
                {userData.name}✅<br />
                <div id={styles.friendsAndGroups}>
                  0 Friends&nbsp;&nbsp; 0 Groups
                </div>
              </div>
            </div>
            <div className={styles.profile_details}>
              <button
                className={styles.navigationButton}
                onClick={navigateToProjects}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/project.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Projects</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToTasks}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/tasks.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Tasks</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToBlogs}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/meetings.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Blogs</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToCalendar}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/calendar.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Calendar</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToMeetings}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/meetings.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Meetings</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToPayments}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/payments.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Payments</div>
                </div>
              </button>
            </div>
            <div className={styles.pro_subscription}>
              <img
                className={styles.proImage}
                src={require("../../images/getPro.png")}
                alt="getPro"
              />
              <PurpleButton title="Get PRO now" />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.expansionMenu}>
          <button onClick={sideBarValue} className={styles.expander}>
            >
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileView;
