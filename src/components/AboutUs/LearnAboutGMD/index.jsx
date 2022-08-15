import styles from "./styles.module.css";
import Blog from "./Blog";
import React from "react";

const LearnAboutGMD = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div className={styles.heading}>Learn more about GMD</div>
        <div id={styles.subHeading}>leading us into the future</div>
      </div>

      <div className={styles.blogSection}>
        <Blog
          date="23-05-2022"
          Title="See how Get me design revolutionizes design industry"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <Blog
          date="23-05-2022"
          Title="See how Get me design improves interior design industry"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <Blog
          date="23-05-2022"
          Title="See how Get me design changes Auto mobile industry"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
      </div>
    </div>
  );
};

export default LearnAboutGMD;
