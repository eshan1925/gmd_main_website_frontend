import React from "react";
import styles from "./styles.module.css";
import Review from "./Review";

const CustomerReviews = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div id={styles.subHeading}>
          Made in India for the world!
        </div>
        <div className={styles.heading}>Listen to our customers</div>
      </div>
      <div className={styles.customerReviews}>
        <Review
          name="Kim Timberlake"
          position="CEO, Mad Street Tom"
          review="GetMeDesign platform is the ideal inspiration tool. Exploring ideas and visualizing directions for any project"
        />
        <Review
          name="John Doe"
          position="CEO, Mad Street Tom"
          review="GetMeDesign platform is the ideal inspiration tool. Exploring ideas and visualizing directions for any project"
        />
        <Review
          name="Tommy Hook"
          position="CEO, Mad Street Tom"
          review="GetMeDesign platform is the ideal inspiration tool. Exploring ideas and visualizing directions for any project"
        />
      </div>
    </div>
  );
};

export default CustomerReviews;
