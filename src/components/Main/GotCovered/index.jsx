import React from "react";
import styles from "./styles.module.css";
import Feature from "./Feature";

const GotCovered = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div id={styles.subHeading}>Made in India for the World</div>
        <div className={styles.heading}>We've got you covered.</div>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.features}>
          <img
            className={styles.featureIcon}
            src={require("../../../images/feature1.png")}
            alt="f1"
          />
          <Feature
            mainHeading="Create, Edit, Update task"
            subHeading="to your designers with out user-friendly dashboard"
          />
          <hr />
          <img
            className={styles.featureIcon}
            src={require("../../../images/feature2.png")}
            alt="f2"
          />
          <Feature
            mainHeading="Dummy sample feature"
            subHeading="to your designers with out user-friendly dashboard"
          />
          <hr />
          <img
            className={styles.featureIcon}
            src={require("../../../images/feature3.png")}
            alt="f3"
          />
          <Feature
            mainHeading="Dummy sample feature"
            subHeading="to your designers with out user-friendly dashboard"
          />
          <hr />
        </div>
        <img
          className={styles.webpage}
          src={require("../../../images/websitePage.png")}
          alt="webpage_image"
        />
      </div>
    </div>
  );
};

export default GotCovered;
