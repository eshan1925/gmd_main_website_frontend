import React from "react";
import styles from "./styles.module.css";

const Feature = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.mainHeading}>{props.mainHeading}</div>
      <div className={styles.subHeading}>{props.subHeading}</div>
    </div>
  );
};

export default Feature;
