import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialProfileView from "../SocialMediaFeed/SocialProfileView";
import "../SocialMediaFeed/extra.css";
import UserNavbar from "../UserNavbar";
import CustomizedDialogs from "./PopupBox/index";
import EditProfile from "./EditProfile";
import EditProfilePic from "./EditProfilePic";
import CustomizedDialogsCoverImg from "./EditCoverImagePopUp/index";
import EditCoverImage from "./EditCoverImage";
import Post from "../SocialMediaFeed/Post";
// import Share from "../SocialMediaFeed/Share";
// import { Add, Remove } from "@mui/icons-material";
// import Rightbar from "../SocialMediaFeed/Rightbar";
import CircularProgress from "@mui/material/CircularProgress";
import Connections from "./Connections";
import CustomizedDialogsProfilePic from "./EditProfilePicPopUp/index";

const ProfilePage = (props) => {
  const navigate = useNavigate();
  const userData = JSON.parse(props.userData); //currentUserData
  const userid = userData._id; //currentUserID
  const [selectedMenu, setSelectedMenu] = React.useState("1");
  const [currentUserForProfilePageView, setCurrentUserforProfilePageView] =
    React.useState({}); //?
  const [posts, setPosts] = React.useState([]); //currentPosts

  const [loading, setLoading] = React.useState(false);
  const [loadingService, setLoadingService] = React.useState(false);
  const [profileLoading, setProfileLoading] = React.useState(false);
  const [userDataForTheView, setUserDataForTheView] = React.useState({}); //UserData
  const [projects, setProjects] = React.useState([]);
  const [services, setServices] = React.useState([]);

  const fetchCurrentProjects = async (e) => {
    setLoading(true);
    await axios
      .get(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/projects/" +
          userid
      )
      .then((response) => {
        const currentProjects = response.data;
        setProjects(currentProjects);

        setLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const fetchCurrentServices = async (e) => {
    setLoadingService(true);
    await axios
      .get(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/services/" +
          userid
      )
      .then((response) => {
        const currentProjects = response.data;
        setServices(currentProjects);

        setLoadingService(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const fetchUserProfileInfo = async (e) => {
    setProfileLoading(true);
    await axios
      .get("https://getmedesignbackend.up.railway.app/profile/" + userid)
      .then((response) => {
        const fetchedDataFromRoute = response.data;
        setUserDataForTheView(fetchedDataFromRoute);
        setProfileLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  React.useEffect(() => {
    const fetchPosts = async () => {
      var currentUserProfile = await axios.get(
        "https://getmedesignbackend.up.railway.app/profile/" + userid
      );
      setCurrentUserforProfilePageView(currentUserProfile["data"][0]);
      const res = await axios.get(
        "https://getmedesignbackend.up.railway.app/api/posts/profile/" + userid
      );

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
    fetchCurrentProjects();
    fetchCurrentServices();
    fetchUserProfileInfo();
  }, [userid]);

  var getPCInArr = [];
  getPCInArr = projects;
  var projectsToGetRendered = [];

  if (getPCInArr.length === 0) {
    projectsToGetRendered.length = 0;
    projectsToGetRendered.push(
      <center>
        <h1>No Projects created!!!</h1>
      </center>
    );
  } else {
    projectsToGetRendered.length = 0;
    getPCInArr.forEach((data) => {
      projectsToGetRendered.push(
        <div className="card">
          <div className="box">
            <div className="content">
              <img
                className="backgroundImage"
                src={data.image}
                alt="projectImage"
              />
              <h3>{data.title}</h3>
              <a href={data.link}>Visit</a>
            </div>
          </div>
        </div>
      );
    });
  }

  var getSCINArr = [];
  getSCINArr = services;
  var servicesToGetRendered = [];
  if (getSCINArr.length === 0) {
    servicesToGetRendered.length = 0;
    servicesToGetRendered.push(
      <center>
        <h1>No Projects created!!!</h1>
      </center>
    );
  } else {
    servicesToGetRendered.length = 0;
    getSCINArr.forEach((data) => {
      servicesToGetRendered.push(
        <div className="card">
          <div className="box">
            <div className="content">
              <img
                className="backgroundImage"
                src={data.image}
                alt="projectImage"
              />
              <h3>{data.title}</h3>
              <a href="#">Visit</a>
            </div>
          </div>
        </div>
      );
    });
  }

  const navigateToEditProfile = () => {
    navigate("/profile/" + userData["_id"] + "/edit-profile");
  };

  const navigateToSocialFeed = () => {
    navigate("/social-feed/" + userData["_id"]);
  };

  const activityMenuClick = () => {
    setSelectedMenu("1");
  };

  const profileMenuClick = () => {
    setSelectedMenu("2");
  };

  const portfolioMenuClick = () => {
    setSelectedMenu("3");
  };

  return (
    <>
      <UserNavbar userInfo={userData} />
      <div className="homeContainer">
        <SocialProfileView userData={userData} />
        <div className="feed">
          <div className="feedWrapper">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={currentUserForProfilePageView.coverImg}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={currentUserForProfilePageView.profilePic}
                  alt=""
                />
                <div className={styles.editProfilePic}>
                  <CustomizedDialogsProfilePic>
                    <EditProfilePic />
                  </CustomizedDialogsProfilePic>
                </div>
                <div className={styles.editCoverImage}>
                  <CustomizedDialogsCoverImg>
                    <EditCoverImage />
                  </CustomizedDialogsCoverImg>
                </div>
              </div>
              <div className="profileInfo">
                <div className="profileInfoName">
                  {currentUserForProfilePageView.name}
                </div>
                <span className="profileInfoDesc">
                  {currentUserForProfilePageView.Bio}
                </span>
              </div>
              <div className="menuButtons">
                <div className="entireButton">
                  <button
                    onClick={activityMenuClick}
                    style={{
                      backgroundColor:
                        selectedMenu === "1" ? "#797575" : "transparent",
                    }}
                    className="menuSelectionButton"
                  >
                    <img
                      className="iconOfButton"
                      src={require("../../images/Icons/ActivityPro.png")}
                      alt="activity"
                    />
                  </button>
                  <div className="buttonTitle">Activity</div>
                </div>
                <div className="entireButton">
                  <button
                    onClick={profileMenuClick}
                    style={{
                      backgroundColor:
                        selectedMenu === "2" ? "#797575" : "transparent",
                    }}
                    className="menuSelectionButton"
                  >
                    <img
                      className="iconOfButton"
                      src={require("../../images/Icons/profileSocial.png")}
                      alt="activity"
                    />
                  </button>
                  <div className="buttonTitle">Profile</div>
                </div>
                <div className="entireButton">
                  <button
                    onClick={portfolioMenuClick}
                    style={{
                      backgroundColor:
                        selectedMenu === "3" ? "#797575" : "transparent",
                    }}
                    className="menuSelectionButton"
                  >
                    <img
                      className="iconOfButton"
                      src={require("../../images/Icons/portfolioSocial.png")}
                      alt="activity"
                    />
                  </button>
                  <div className="buttonTitle">Portfolio</div>
                </div>
              </div>
            </div>

            {selectedMenu === "1" && (
              <div>
                {posts.map((p) => (
                  <Post key={p._id} post={p} />
                ))}
              </div>
            )}

            {selectedMenu === "2" && (
              <div className={styles.profileAndConnections}>
                <div className={styles.tableMenu}>
                  <div className={styles.viewAndEditProf}>
                    <div className={styles.tableHeading}>View Profile</div>
                    <div className={styles.space}>
                      <CustomizedDialogs>
                        <EditProfile />
                      </CustomizedDialogs>
                    </div>
                  </div>
                  <table className={styles.profileTable}>
                    <tbody>
                      <tr>
                        <td data-column="First Name">Name</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["name"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Email</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["email"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Phone</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["number"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Location</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["country"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Tools Known</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["tools"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Experience</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["experience"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Charge Rate</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["charge"]}
                        </td>
                      </tr>
                      <tr>
                        <td data-column="First Name">Bio</td>
                        <td data-column="Last Name">
                          {userDataForTheView[0]["Bio"]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Connections
                    connectionIds={userDataForTheView[0]["followers"]}
                  />
                </div>
              </div>
            )}

            {selectedMenu === "3" && (
              <div className="projectsAndServicesCards">
                <div className="projectCardsSection"> User's Works:-</div>
                <div className="body">
                  <div className="container">
                    {loading ? (
                      <CircularProgress style={{ color: "white" }} />
                    ) : (
                      projectsToGetRendered
                    )}
                  </div>
                </div>
                {/* <div className="serviceCardsSection"> User's Services:-</div>
                <div className="body">
                  <div className="container">
                    {loadingService ? (
                      <CircularProgress style={{ color: "white" }} />
                    ) : (
                      servicesToGetRendered
                    )}
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
