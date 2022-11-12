import React from "react";
import styles from "./styles.module.css";

const News = (props) => {
  return (
    <div className={styles.mainNews}>
      <div className={styles.newsBox}>
        <div className={styles.heading}># {props.heading}</div>
        <div className={styles.tagline}>
          {props.tagline}
        </div>
        <div className={styles.mentions}>{props.numberOfMentions} Mentions</div>
      </div>
    </div>
  );
};

export default News;
