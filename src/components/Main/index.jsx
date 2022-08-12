import React from "react";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Main;
