import React from "react";
import SocialProfileView from "../SocialProfileView";
import { useState, useEffect } from "react";
import UserNavbar from "../../UserNavbar";
import Post from "../Post";
import Share from "../Share";
import "./extra.css";
import axios from "axios";
import { Add, Remove } from "@mui/icons-material";
import Rightbar from "../../SocialMediaFeed/Rightbar";
import CircularProgress from "@mui/material/CircularProgress";
import CustomizedDialogsContact from "./ContactPopUp/index";
import Contact from "./Contact/index";

const SocialMediaFeedProfile = (props) => {
  const userData = JSON.parse(props.userData);
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const text = window.location.pathname;
  const myPath = text.split("/");

  //user whose profile is being viewed
  const userWithTheProfile = myPath[myPath.length - 1];
  console.log(userWithTheProfile);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const [followed, setFollowed] = useState();
  const [currentUserForProfilePageView, setCurrentUserforProfilePageView] =
    useState({});
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = React.useState(false);
  const [loadingService, setLoadingService] = React.useState(false);
  const [profileLoading, setProfileLoading] = React.useState(false);
  const [userDataForTheView, setUserDataForTheView] = React.useState({});
  const [projects, setProjects] = React.useState([]);
  const [services, setServices] = React.useState([]);

  const fetchCurrentProjects = async (e) => {
    setLoading(true);
    await axios
      .get(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/projects/" +
          userWithTheProfile
      )
      .then((response) => {
        const currentProjects = response.data;
        console.log(currentProjects);
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
          userWithTheProfile
      )
      .then((response) => {
        const currentProjects = response.data;
        console.log(currentProjects);
        setServices(currentProjects);

        setLoadingService(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const fetchUserProfileInfo = async (e) => {
    setProfileLoading(true);
    await axios
      .get(
        "https://getmedesignbackend.up.railway.app/profile/" +
          userWithTheProfile
      )
      .then((response) => {
        const fetchedDataFromRoute = response.data;
        console.log(fetchedDataFromRoute);
        setUserDataForTheView(fetchedDataFromRoute);
        setProfileLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    const fetchPosts = async () => {
      var instantUser = await axios.get(
        "https://getmedesignbackend.up.railway.app/profile/" + user._id
      );
      instantUser = instantUser.data[0];
      setFollowed(instantUser.followers.includes(userWithTheProfile));
      var currentUserProfile = await axios.get(
        "https://getmedesignbackend.up.railway.app/profile/" +
          userWithTheProfile
      );
      console.log(currentUserProfile["data"]);
      setCurrentUserforProfilePageView(currentUserProfile["data"][0]);
      const res = await axios.get(
        "https://getmedesignbackend.up.railway.app/api/posts/profile/" +
          userWithTheProfile
      );

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
    fetchCurrentProjects();
    fetchUserProfileInfo();
  }, [userData._id, user._id]);

  // console.log(projects);
  // console.log(services);
  // console.log(userDataForTheView);

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
              <a target="_blank" href={data.link}>
                Visit
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  // var getSCINArr = [];
  // getSCINArr = services;
  // var servicesToGetRendered = [];
  // if (getSCINArr.length === 0) {
  //   servicesToGetRendered.length = 0;
  //   servicesToGetRendered.push(
  //     <center>
  //       <h1>No Projects created!!!</h1>
  //     </center>
  //   );
  // } else {
  //   servicesToGetRendered.length = 0;
  //   getSCINArr.forEach((data) => {
  //     servicesToGetRendered.push(
  //       <div className="card">
  //         <div className="box">
  //           <div className="content">
  //             <img
  //               className="backgroundImage"
  //               src={data.image}
  //               alt="projectImage"
  //             />
  //             <h3>{data.title}</h3>
  //             <a href="#">Visit</a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          `https://getmedesignbackend.up.railway.app/profile/${user._id}/unfollow`,
          {
            userId: userWithTheProfile,
          }
        );
      } else {
        await axios.put(
          `https://getmedesignbackend.up.railway.app/profile/${user._id}/follow`,
          {
            userId: userWithTheProfile,
          }
        );
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
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

  const handleContact = async (e) => {};

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
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">
                  {currentUserForProfilePageView.name}
                </h4>
                <span className="profileInfoDesc">
                  {currentUserForProfilePageView.Bio}
                </span>
                {userData._id !== userWithTheProfile && (
                  <CustomizedDialogsContact>
                    <Contact idOfPerson={userWithTheProfile} />
                  </CustomizedDialogsContact>
                )}
              </div>
              {userData._id !== userWithTheProfile && (
                <button className="rightbarFollowButton" onClick={handleClick}>
                  {followed ? "Unfollow" : "Follow"}
                  {followed ? <Remove /> : <Add />}
                </button>
              )}
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
                      src={require("../../../images/Icons/ActivityPro.png")}
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
                      src={require("../../../images/Icons/profileSocial.png")}
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
                      src={require("../../../images/Icons/portfolioSocial.png")}
                      alt="activity"
                    />
                  </button>
                  <div className="buttonTitle">Portfolio</div>
                </div>
              </div>
            </div>

            {selectedMenu === "1" && (
              <div>
                {userData._id === userWithTheProfile && <Share />}
                {posts.map((p) => (
                  <Post key={p._id} post={p} />
                ))}
              </div>
            )}

            {selectedMenu === "2" && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td data-column="First Name">Name</td>
                      <td data-column="Last Name">
                        {userDataForTheView[0]["name"]}
                      </td>
                    </tr>
                    {/* <tr>
                      <td data-column="First Name">Email</td>
                      <td data-column="Last Name">{userDataForTheView[0]["email"]}</td>
                    </tr> */}
                    {/* <tr>
                      <td data-column="First Name">Phone</td>
                      <td data-column="Last Name">
                        {userDataForTheView[0]["number"]}
                      </td>
                    </tr> */}
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
                {/* <div className="serviceCardsSection">
                  {" "}
                  User's Services:-
                </div>
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
        <Rightbar profile="" />
      </div>
    </>
  );
};

export default SocialMediaFeedProfile;
