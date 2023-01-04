import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.columns}>
        <div className={styles.c1}>
          <div className={styles.h1}>For Designers</div>
          <div className={styles.normal}>Register</div>
          <div className={styles.normal}>Become a exclusive member</div>
          <div className={styles.normal}>Partner with GMD</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
        </div>
        <div className={styles.c1}>
          <div className={styles.h1}>For Brands</div>
          <div className={styles.normal}>Register</div>
          <div className={styles.normal}>Become a exclusive member</div>
          <div className={styles.normal}>Partner with GMD</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
        </div>
        <div className={styles.c1}>
          <div className={styles.h1}>Resources</div>
          <div className={styles.normal}>Register</div>
          <div className={styles.normal}>Become a exclusive member</div>
          <div className={styles.normal}>Partner with GMD</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
        </div>
        <div className={styles.c1}>
          <div className={styles.h1}>About Us</div>
          <div className={styles.normal}>Register</div>
          <div className={styles.normal}>Become a exclusive member</div>
          <div className={styles.normal}>Partner with GMD</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
          <div className={styles.normal}>Tutorials</div>
        </div>
      </div>
      <hr id={styles.hr} />
      <div id={styles.absoluteFooter}>
        <div className={styles.copyright}>Copyright 2021 Getmedesign</div>
        <div>
          <img
            className={styles.social}
            src={require("../../../images/fb.png")}
            alt="fb"
          />
          <img
            className={styles.social}
            src={require("../../../images/insta.png")}
            alt="insta"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
