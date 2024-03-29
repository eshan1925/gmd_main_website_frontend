import React from "react";
import styles from "./styles.module.css";

const LandingPage = () => {
  console.log("New user landed on the page...");
  return (
    <div className={styles.mainPage}>
      <div className={styles.content}>
        <div>
          <div className={styles.tagline}>
            Take your business
            <br /> to the next level.
          </div>
          <div className={styles.subTagline}>
            Hire Designers around the world with ease.
          </div>
          <button className={styles.getInTouch}>Get in Touch</button>
        </div>
      </div>
      <div className={styles.ccGirl}>
        <img
          className={styles.concentricCircles}
          height="550px"
          width="600px"
          src={require("../../images/MaskGroup.png")}
          alt="mask"
        />
        <img
          className={styles.girl}
          height="350px"
          width="300px"
          src={require("../../images/thumbsupgirl.png")}
          alt="thumbsup"
        />
        <img
          src={require("../../images/ai.png")}
          alt="ai"
          className={styles.ai}
        />
        <img src={require("../../images/a.png")} alt="a" className={styles.a} />
        <img
          src={require("../../images/rhino.png")}
          alt="rhino"
          className={styles.rhino}
        />
        <img
          src={require("../../images/ps.png")}
          alt="ps"
          className={styles.ps}
        />
        <img
          src={require("../../images/an.png")}
          alt="an"
          className={styles.an}
        />
        <img
          src={require("../../images/diamond.png")}
          alt="diamond"
          className={styles.diamond}
        />
        <img
          src={require("../../images/userrev.png")}
          alt="userev"
          className={styles.userrev}
        />
      </div>
    </div>
  );
};

export default LandingPage;
