import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserNavbar = (props) => {
  var userData = props.userInfo;
  const navigate = useNavigate();
  const navigateToLogin = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    navigate("/login");
  };

  const notify = () => toast("Coming Soon!!!");

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

        <SearchBar />
        <div className={styles.rightOfNavbar}>
          <div className={styles.iconsOfNotCar}>
            <div onClick={notify} className={styles.notificationIcon}>
              <img
                className={styles.navbarImgNoti}
                alt="notification"
                src={require("../../images/Icons/notification.png")}
              />
            </div>
            <div onClick={notify} className={styles.cartIcon}>
              <img
                className={styles.navbarImgCart}
                alt="cart"
                src={require("../../images/Icons/cart.png")}
              />
            </div>
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
          </div>
          <div className={styles.nameImage}>
            <img
              src={userData["profilePic"]}
              className={styles.userPic}
              onClick={handleClick}
              alt=""
            />
            <div onClick={handleClick}>{userData["name"]}</div>
          </div>
        </div>

        <div
          className={styles.subMenuWrap}
          id="subMenu"
          style={{ maxHeight: isActive ? "360px" : "" }}
        >
          <div className={styles.subMenu}>
            <div className={styles.userInfo}>
              <img src={userData["profilePic"]} alt="" />
              <h5> {userData["name"]} </h5>
            </div>
            <hr />

            <div className={styles.subMenuLink} onClick={navigateToProfile}>
              <img
                className={styles.iconProfile}
                src={require("../../images/profile.png")}
                alt=""
              />
              <p>View Profile</p>
              <span> > </span>
            </div>
            <div className={styles.subMenuLink} onClick={navigateToAboutUs}>
              <img
                className={styles.iconProfile}
                src={require("../../images/help.png")}
                alt=""
              />
              <p>About Us</p>
              <span> > </span>
            </div>
            <div className={styles.subMenuLink} onClick={navigateToLogin}>
              <img
                className={styles.iconProfile}
                src={require("../../images/logout.png")}
                alt=""
              />
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
