import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={require("../../images/gmdLogo.png")} alt="logo" />
      </div>
      <div className={styles.diffButtons}>
        <div className={styles.howItWorks}>How it works</div>
        <div className={styles.about}>About</div>
        <button className={styles.signUp}>Signup</button>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
