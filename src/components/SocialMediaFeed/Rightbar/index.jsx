import React from "react";
import styles from "./styles.module.css";
import News from "./News";

const RightBar = () => {
  console.log("All news article sent successfully!!!");
  return (
    <div className={styles.main}>
      <div className={styles.mainHeading}>
        Todays Trending
      </div>
      <div className={styles.news}>
        <News heading="UI/UX" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="GetMeDesign" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="AnyBodyCanDesign" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="EveryoneIsaArtist" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="UI/UX" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="UI/UX" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="UI/UX" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
        <News heading="UI/UX" tagline="Lorem Ipsum is simply a dummy text of printing and typing industry." numberOfMentions="10.3K"/>
      </div>
    </div>
  );
};

export default RightBar;
