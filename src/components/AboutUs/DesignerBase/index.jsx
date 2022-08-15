import React from "react";
import styles from "./styles.module.css";

const DesignerBase = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>1500+ and growing designer base</div>
        <div id={styles.subHeading}>
        Our design team is increasing day by dayOur design team is increasing day by day
        </div>
      </div>
      <div className={styles.people}>
        <img src={require("../../../images/peopleGroup2.png")} alt="people" />
      </div>
    </div>
  );
};

export default DesignerBase;
