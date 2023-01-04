import React from "react";
import Navbar from "./Navbar";
import DesignUniverse from "./DesignUniverse";
import HireTop from "./HireTop";
import GotCovered from "./GotCovered";
import ContactUs from "./ContactUs";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import styles from "./styles.module.css";

const Main = () => {
  console.log("Main page was accessed");
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.mainPage}>
        <div className={styles.content}>
          <div>
            <div className={styles.tagline}>
              Take your business
              <br /> to the next level.
            </div>
            <div className={styles.subTagline}>
              Hire Designers around the world with ease.
            </div>
            <a className={styles.anchorTag} href="#contactus">
              <button href="#contactus" className={styles.getInTouch}>
              <div className={styles.getInTouchText}>
                Get in Touch
              </div>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.ccGirl}>
          <img src={require("../../images/girlHomepage.png")} alt="GetMeDesign" className={styles.fullImage}/>
        </div>
      </div>
      <DesignUniverse />
      <HireTop />
      <GotCovered />
      <div id="contactus">
        <ContactUs />
      </div>
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Main;
