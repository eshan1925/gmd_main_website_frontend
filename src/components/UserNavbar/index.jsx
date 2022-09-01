import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const UserNavbar = (props) => {
  var userData = props.userInfo;
  const navigate = useNavigate();
  const navigateToLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToAboutUs = () => {
    navigate("/about-us");
  };

  const navigateToProfile = () => {
    navigate("/profile/" + userData._id);
  };

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <img
            className={styles.logo}
            onClick={navigateToHome}
            src={require("../../images/gmdLogo.png")}
            alt="logo"
          />
        </div>
        {/* <div>
          <button onClick={navigateToLogin} className={styles.logOut}>
            LogOut
          </button>
        </div> */}
        <div className={styles.nameImage}>
          <img
            src={userData["profilePic"]}
            className={styles.userPic}
            onClick={handleClick}
            alt=""
          />
          <div onClick={handleClick}>{userData["name"]}</div>
        </div>
        <div
          className={styles.subMenuWrap}
          id="subMenu"
          style={{ maxHeight: isActive ? "400px" : "" }}
        >
          <div className={styles.subMenu}>
            <div className={styles.userInfo}>
              <img src={userData["profilePic"]} alt="" />
              <h3> {userData["name"]} </h3>
            </div>
            <hr />

            <div className={styles.subMenuLink} onClick={navigateToProfile}>
              <img src={require("../../images/profile.png")} alt="" />
              <p>View Profile</p>
              <span> > </span>
            </div>

            {/* <div className={styles.subMenuLink}>
            <img src={require("../../images/setting.png")} alt="" />
            <p>Setting</p>
            <span> > </span>
          </div> */}
            <div className={styles.subMenuLink} onClick={navigateToAboutUs}>
              <img src={require("../../images/help.png")} alt="" />
              <p>About Us</p>
              <span> > </span>
            </div>
            <div className={styles.subMenuLink} onClick={navigateToLogin}>
              <img src={require("../../images/logout.png")} alt="" />
              <p>Log Out</p>
              <span> > </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
