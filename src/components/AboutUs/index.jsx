import styles from "./styles.module.css";
import Navbar from "../Navbar";
import CustomerReviews from "../CustomerReviews";
import Footer from "../Footer";
import AllAboutDesigns from "./AllAboutDesigns";
import DesignerBase from "./DesignerBase";
import Leaders from "./Leaders";
import LearnAboutGMD from "./LearnAboutGMD";
import React from 'react'

const AboutUs = () => {
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
            <a href="mailto:abc@example.com">
              <button href="#contactus" className={styles.getInTouch}>
                Get in Touch
              </button>
            </a>
          </div>
        </div>
        <div className={styles.ccGirl}>
          <img
            className={styles.concentricCircles}
            height="550px"
            width="600px"
            src={require("../../images/MaskGroup.png")}
            alt="mask"
          />
          <img
            className={styles.girl}
            height="320px"
            width="320px"
            src={require("../../images/beardBoy.png")}
            alt="thumbsup"
          />
          <img
            src={require("../../images/ai.png")}
            alt="ai"
            className={styles.ai}
          />
          <img
            src={require("../../images/a.png")}
            alt="a"
            className={styles.a}
          />
          <img
            src={require("../../images/rhino.png")}
            alt="rhino"
            className={styles.rhino}
          />
          <img
            src={require("../../images/ps.png")}
            alt="ps"
            className={styles.ps}
          />
          <img
            src={require("../../images/an.png")}
            alt="an"
            className={styles.an}
          />
          <img
            src={require("../../images/diamond.png")}
            alt="diamond"
            className={styles.diamond}
          />
          <img
            src={require("../../images/userrev.png")}
            alt="userev"
            className={styles.userrev}
          />
        </div>
      </div>
      <AllAboutDesigns />
      <DesignerBase />
      <Leaders />
      <LearnAboutGMD />
      <CustomerReviews />
      <Footer />
    </div>
  )
}

export default AboutUs;