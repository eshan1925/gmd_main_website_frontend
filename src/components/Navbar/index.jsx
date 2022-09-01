import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  var userData = localStorage.getItem("userData");
  userData = JSON.parse(userData);
  // console.log(userData);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToAboutUs = () => {
    navigate("/about-us");
  };

  const navigateToHome = () => {
    navigate("/");
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
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img
          onClick={navigateToHome}
          src={require("../../images/gmdLogo.png")}
          alt="logo"
        />
      </div>
      <div className={styles.diffButtons}>
        <div className={styles.howItWorks}>How it works</div>
        <div onClick={navigateToAboutUs} className={styles.about}>
          About
        </div>
        {userData != null ? (
          <>
            <div className={styles.nameImage}>
              <img
                src={userData["profilePic"]}
                className={styles.userPic}
                onClick={handleClick}
                alt=""
              />
              <div className={styles.userName} onClick={handleClick}>
                {userData["name"]}
              </div>
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
          </>
        ) : (
          <>
            <button onClick={navigateToSignUp} className={styles.signUp}>
              Signup
            </button>
            <button onClick={navigateToLogin} className={styles.login}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
