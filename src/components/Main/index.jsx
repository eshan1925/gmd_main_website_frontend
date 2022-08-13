import React from "react";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import DesignUniverse from "../DesignUniverse";
import HireTop from "../HireTop";
import GotCovered from "../GotCovered";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <LandingPage />
      <DesignUniverse />
      <HireTop />
      <GotCovered />
    </div>
  );
};

export default Main;
