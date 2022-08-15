import React from "react";
import styles from "./styles.module.css";

const AllAboutDesigns = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>We're all about Designs</div>
        <div id={styles.subHeading}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.story}>
          <img
            className={styles.logo}
            src={require("../../../images/GMD-Circularlogo.png")}
            alt="gmdLogo"
          />
          <div className={styles.headingOfContent}>Our Story</div>
          <div className={styles.Maincontent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
          <div className={styles.records}>
            <div className={styles.r1}>
              <div className={styles.numbers}>1500+</div>
              <div className={styles.profile}>Designers</div>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.r1}>
              <div className={styles.numbers}>450+</div>
              <div className={styles.profile}>Projects</div>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.r1}>
              <div className={styles.numbers}>223+</div>
              <div className={styles.profile}>Happy Clients</div>
            </div>
          </div>
          <button className={styles.supportUs}>Support Us</button>
        </div>
        <div className={styles.people}>
          <img src={require("../../../images/peopleGroup.png")} alt="group" />
        </div>
      </div>
    </div>
  );
};

export default AllAboutDesigns;
