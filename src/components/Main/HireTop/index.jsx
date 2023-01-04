import styles from "./styles.module.css";
import React from "react";
import {ReactComponent as People} from "../../../images/peoples.svg";

const HireTop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>Hire Top Talents</div>
        <div id={styles.subHeading}>
          Meet the rare species of exclusive designers
        </div>
      </div>
      <div>
      {/* <img
        className={styles.peoples}
        src={require("../../images/peoples.svg")}
        alt="people reviews"
      /> */}
      <People className={styles.peoples}/>
      </div>
      <button className={styles.findDesignersButton}>Find Designers</button>
    </div>
  );
};

export default HireTop;
