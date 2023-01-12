import React from "react";
import styles from "./styles.module.css";
import UserNavbar from "../UserNavbar";
import SocialProfileView from "../SocialMediaFeed/SocialProfileView";
import CustomizedProjectDialogs from "./ProjectPopupBox/index";
import EditProfile from "./ProjectPopupBox/EditProfile";
import EditServiceProfile from "./ServicePopupBox/EditProfile";
import CustomizedServiceDialogs from "./ServicePopupBox/index";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import "./extra.css";
import { useNavigate } from "react-router-dom";
import Groups from "./Groups";

const DynamicPortfolio = (props) => {
  const navigate = useNavigate();
  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const [loading, setLoading] = React.useState(false);
  const [loadingService, setLoadingService] = React.useState(false);
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

  React.useEffect(() => {
    fetchCurrentProjects();
  }, []);

  const navigateToSocialFeed = () => {
    navigate("/social-feed/profile/" + userid);
  };

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
              {/* <a href={data.link} target="blank">
                Visit
              </a> */}
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
  //             <a href={data.link} target="blank">Visit</a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div className={styles.main_container_1}>
      <UserNavbar userInfo={userData} />
      <div className={styles.project_manager}>
        <SocialProfileView selectedMenu="10" userData={userData} />
        <div className={styles.project_view}>
          <div>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                <div
                  onClick={navigateToSocialFeed}
                  className={styles.homeButton}
                >
                  Home&nbsp;
                </div>
                <b>&#62; Portfolio</b>
              </div>
            </div>

            <div className={styles.projectsAndServicesCards}>
              <div className={styles.worksAndButton}>
                <div className={styles.projectCardsSection}> Your Works :-</div>
                <div className={styles.creationButtons}>
                  <CustomizedProjectDialogs>
                    <EditProfile />
                  </CustomizedProjectDialogs>

                  {/* <CustomizedServiceDialogs>
                  <EditServiceProfile />
                </CustomizedServiceDialogs> */}
                </div>
              </div>

              <div className="body">
                <div className="container">
                  {loading ? (
                    <CircularProgress style={{ color: "white" }} />
                  ) : (
                    projectsToGetRendered
                  )}
                </div>
              </div>
              {/* <div className={styles.serviceCardsSection}> Your Services:-</div>
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
          </div>
        </div>
        <Groups />
      </div>
    </div>
  );
};

export default DynamicPortfolio;
