import styles from "./styles.module.css";
import Navbar from "../Main/Navbar";
import CustomerReviews from "../Main/CustomerReviews";
import Footer from "../Main/Footer";
import AllAboutDesigns from "./AllAboutDesigns";
import DesignerBase from "./DesignerBase";
import Leaders from "./Leaders";
import LearnAboutGMD from "./LearnAboutGMD";
import ContactUs from "../Main/ContactUs";
import React from "react";

const AboutUs = () => {

  const scrollerFunction = () => {
    window.scrollTo(0,800);
  }

  React.useEffect(() => {
    scrollerFunction();
    console.log("About page was accessed!!!");
  },)
  
  
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
            <a href="#contactus">
              <button href="#contactus" className={styles.getInTouch}>
                Get in Touch
              </button>
            </a>
          </div>
        </div>
        <div className={styles.ccGirl}>
          <img src={require("../../images/boyAboutUsPage.png")} alt="GetMeDesign" className={styles.fullImage}/>
        </div>
      </div>
      <AllAboutDesigns />
      <DesignerBase />
      <Leaders />
      <LearnAboutGMD />
      <div id="contactus">
        <ContactUs />
      </div>
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default AboutUs;
