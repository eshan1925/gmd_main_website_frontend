import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import PurpleButton from "./PurpleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileView = (props) => {
  const navigate = useNavigate();
  const userData = props.userData;
  const userid = userData._id;
  const [sideBar, setSideBar] = React.useState(true);
  
  const notify = () => toast('✅ Coming Soon!!!');

  const navigateToSocialMediaFeed = () => {
    navigate("/social-feed/" + userid);
  };

  const navigateToProjects = () => {
    navigate("/project-manager/" + userid);
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
        <ToastContainer
              // position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              // closeOnClick
              // rtl={false}
              // pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
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
              {/* <button
              onClick={navigateToSocialMediaFeed}
                className={styles.navigationButton}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../images/Icons/project.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Activity</div>
                </div>
              </button> */}
              <button
                className={styles.navigationButton}
                onClick={notify}
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
                onClick={notify}
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
                onClick={notify}
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
                onClick={notify}
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
