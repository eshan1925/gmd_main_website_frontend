import React from "react";
import styles from "./styles.module.css";

const DesignUniverse = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>
          Welcome to the
          <br /> Design Universe
        </div>
        <div id={styles.subHeading}>
          Meet the rare species of exclusive designers
        </div>
      </div>
      <div className={styles.specifics}>
        <img
          className={styles.webPage}
          src={require("../../images/websitePage.png")}
          alt="webPage"
        />
        <div className={styles.contents}>
          <img
            className={styles.profileIcon}
            src={require("../../images/profileIcon.png")}
            alt="icon"
          />
          <div className={styles.contentHeading}>
            Take your business <br /> to the next level.
          </div>
          <div className={styles.para}>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the
          </div>
          <button className={styles.takeATour}>Take a tour</button>
        </div>
      </div>
      <div className={styles.antiSpecifics}>
        <img
          className={styles.webPage}
          src={require("../../images/websitePage.png")}
          alt="webPage"
        />
        <div className={styles.contents}>
          <img
            className={styles.profileIcon}
            src={require("../../images/usersIcon.png")}
            alt="icon"
          />
          <div className={styles.contentHeading}>
            Take your business <br /> to the next level.
          </div>
          <div className={styles.para}>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the
          </div>
          <button className={styles.takeATour}>Take a tour</button>
        </div>
      </div>
      <div className={styles.specifics}>
        <img
          className={styles.webPage}
          src={require("../../images/blurWebsitePage.png")}
          alt="webPage"
        />
        <div className={styles.contents}>
          <img
            className={styles.profileIcon}
            src={require("../../images/pencilIcon.png")}
            alt="icon"
          />
          <div className={styles.contentHeading}>
            Take your business <br /> to the next level.
          </div>
          <div className={styles.para}>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the
          </div>
          <button className={styles.takeATour}>Take a tour</button>
        </div>
      </div>
    </div>
  );
};

export default DesignUniverse;
