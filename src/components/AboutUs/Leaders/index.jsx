import React from "react";
import styles from "./styles.module.css";

const Leaders = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>Led by the best</div>
        <div id={styles.subHeading}>leading us into the future</div>
      </div>

      <div className={styles.leaders}>
        <div className={styles.leader}>
          <img src={require("../../../images/l1.png")} alt="leader1" />
          <div className={styles.leaderName}>Person Name 1</div>
          <div className={styles.position}>Designation</div>
        </div>
        <div className={styles.leader}>
          <img src={require("../../../images/l2.png")} alt="leader2" />
          <div className={styles.leaderName}>Person Name 2</div>
          <div className={styles.position}>Designation</div>
        </div>
        <div className={styles.leader}>
          <img src={require("../../../images/l3.png")} alt="leader3" />
          <div className={styles.leaderName}>Person Name 3</div>
          <div className={styles.position}>Designation</div>
        </div>
        <div className={styles.leader}>
          <img src={require("../../../images/l4.png")} alt="leader4" />
          <div className={styles.leaderName}>Person Name 4</div>
          <div className={styles.position}>Designation</div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
