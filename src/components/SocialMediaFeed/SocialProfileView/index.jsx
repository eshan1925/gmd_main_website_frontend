import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import PurpleButton from "./PurpleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialProfileView = (props) => {
  const navigate = useNavigate();
  const userData = props.userData;
  const userid = userData._id;
  const [sideBar, setSideBar] = React.useState(true);

  const notify = () => toast("✅ Coming Soon!!!");

  const navigateToSocialMediaFeed = () => {
    navigate("/social-feed/" + userid);
  };

  const navigateToOrganiser = () => {
    navigate("/project-manager/" + userid);
  };
  const navigateToBlogs = () => {
    navigate("/blogs/" + userid + "/all-blogs");
  };

  const navigateToProfile = () => {
    navigate("/profile/" + userid);
  };

  const navigateToPortfolioCreation = () => {
    navigate("/portfolio-section/" + userid);
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
                className={styles.xp_circle}
                src={require("../../../images/Icons/xp_circle.png")}
                alt=""
              />
              <img
                onClick={navigateToProfile}
                className={styles.profile_pic}
                src={userData["profilePic"]}
                alt="profilePic"
              />
              <div className={styles.profile_info}>
                {userData.name}&nbsp;&nbsp;
                <img
                  className={styles.blue_tick}
                  src={require("../../../images/Icons/icons8_ok.png")}
                  alt="varification_tick"
                />
                <br />
                <div id={styles.friendsAndGroups}>
                  {userData["followers"].length} Followers&nbsp;&nbsp;{" "}
                  {userData["following"].length} Following
                </div>
              </div>
            </div>
            <div className={styles.profile_details}>
              <button
                onClick={navigateToSocialMediaFeed}
                className={styles.navigationButton}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/project.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Activity</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/marketplace.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>MarketPlace</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/tasks.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>People</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/project.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Community</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/calendar.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Groups</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToBlogs}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/tasks.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Blogs</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/meetings.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Documents</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToOrganiser}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/calendar.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Organiser</div>
                </div>
              </button>
              <button className={styles.navigationButton} onClick={notify}>
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/jobs.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Jobs</div>
                </div>
              </button>
              <button
                className={styles.navigationButton}
                onClick={navigateToPortfolioCreation}
              >
                <div className={styles.buttonName}>
                  <img
                    className={styles.buttonIcon}
                    src={require("../../../images/Icons/meetings.png")}
                    alt=""
                  />
                  <div className={styles.buttonHeading}>Portfolio</div>
                </div>
              </button>
            </div>
            <div className={styles.pro_subscription}>
              <img
                className={styles.proImage}
                src={require("../../../images/getPro.png")}
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

export default SocialProfileView;
