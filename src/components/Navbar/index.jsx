import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img onClick={navigateToHome} src={require("../../images/gmdLogo.png")} alt="logo" />
      </div>
      <div className={styles.diffButtons}>
        <div className={styles.howItWorks}>How it works</div>
        <div onClick={navigateToAboutUs} className={styles.about}>
          About
        </div>
        <button onClick={navigateToSignUp} className={styles.signUp}>
          Signup
        </button>
        <button onClick={navigateToLogin} className={styles.login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
