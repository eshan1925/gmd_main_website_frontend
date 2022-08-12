import React from "react";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import DesignUniverse from "../DesignUniverse";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <LandingPage />
      <DesignUniverse />
    </div>
  );
};

export default Main;
