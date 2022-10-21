import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileView from "../ProfileView";
import UserNavbar from "../UserNavbar";
import CustomizedDialogs from "./PopupBox/index";
import EditProfile from "./EditProfile";

const ProfilePage = (props) => {
  const navigate = useNavigate();
  const userData = JSON.parse(props.userData);
  const userid = userData._id;

  const [userDatafromDB, setUserDataFromDB] = React.useState("");

  const getUserData = async () => {
    await axios
      .get("http://localhost:8080/profile/" + userid)
      .then((response) => {
        const foundContent = response.data[0];
        setUserDataFromDB(foundContent);
        sessionStorage.removeItem("userData");
        sessionStorage.setItem("userData", JSON.stringify(userDatafromDB));
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  React.useEffect(() => {
    getUserData();
  });

  const navigateToEditProfile = () => {
    navigate("/profile/" + userData["_id"] + "/edit-profile");
  };

  return (
    <div className={styles.main_container}>
      {/* <nav className={styles.navbar}>
        <div>
          <img
            className={styles.logo}
            onClick={navigateToHome}
            src={require("../../images/gmdLogo.png")}
            alt="logo"
          />
        </div>
        <div>
          <button onClick={navigateToLogin} className={styles.logOut}>
            LogOut
          </button>
        </div>
      </nav> */}
      <UserNavbar userInfo={userDatafromDB} />
      <div className={styles.project_manager}>
        <ProfileView userData={userDatafromDB} />
        <div className={styles.project_view}>
          <div>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                Home <b>&#62; Profile...</b>
              </div>
            </div>
            <div id={styles.scrollControl}>
              <div className={styles.profileDetails}>
                <img
                  src={userDatafromDB["profilePic"]}
                  className={styles.userPic}
                  alt=""
                />
                <table>
                  <tbody>
                    <tr>
                      <td data-column="First Name">Name</td>
                      <td data-column="Last Name">{userDatafromDB["name"]}</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Email</td>
                      <td data-column="Last Name">{userDatafromDB["email"]}</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Date of Birth</td>
                      <td data-column="Last Name">
                        {userDatafromDB["dateOfBirth"]}
                      </td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Gender</td>
                      <td data-column="Last Name">
                        {userDatafromDB["gender"]}
                      </td>
                    </tr>
                    <tr>
                      <td data-column="First Name">City</td>
                      <td data-column="Last Name">{userDatafromDB["city"]}</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Country</td>
                      <td data-column="Last Name">
                        {userDatafromDB["country"]}
                      </td>
                    </tr>
                    <tr>
                      <td data-column="First Name">User Id</td>
                      <td data-column="Last Name">{userDatafromDB["_id"]}</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Badges List</td>
                      <td data-column="Last Name">
                        {userDatafromDB["badgesList"]}
                      </td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Bio</td>
                      <td data-column="Last Name">{userDatafromDB["Bio"]}</td>
                    </tr>
                  </tbody>
                </table>
                {/* <button onClick={navigateToEditProfile} className={styles.signUp}>
              Edit Profile
            </button> */}
                <div className={styles.space}>
                  <CustomizedDialogs>
                    <EditProfile />
                  </CustomizedDialogs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
