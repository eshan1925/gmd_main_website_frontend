import React from "react";
import styles from "./styles.module.css";

const Review = (props) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.profilePic}
        src={require("../../../../images/profilepic.png")}
        alt="profile"
      />
      <div className={styles.name}>{props.name}</div>
      <div className={styles.position}>{props.position}</div>
      <div className={styles.review}>{props.review}</div>
    </div>
  );
};

export default Review;
