import styles from "./styles.module.css";
import React from "react";

const HireTop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>Hire Top Talents</div>
        <div id={styles.subHeading}>
          Meet the rare species of exclusive designers
        </div>
      </div>
      <img
        className={styles.peoples}
        src={require("../../images/peoples.png")}
        alt="people reviews"
      />
      <button className={styles.findDesignersButton}>Find Designers</button>
    </div>
  );
};

export default HireTop;
