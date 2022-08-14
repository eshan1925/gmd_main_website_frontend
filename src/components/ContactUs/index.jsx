import React from "react";
import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerHeadings}>
        <div id={styles.subHeading}>
          Meet the rare species of exclusive designers
        </div>
        <div className={styles.heading}>Ping Us Here!</div>
      </div>
      <div className={styles.formPage}>
        <div className={styles.images}>
          <img
            className={styles.bluebg}
            src={require("../../images/inputArea.png")}
            alt="bg"
          />
        </div>
        <div className={styles.inputs}>
          <div className={styles.formHeading}>Contact Us</div>
          <div className={styles.subHeading}>
            One of our executives will reach you soon!
          </div>
          <div className={styles.inputstaking}>
            <input className={styles.nameinput} placeholder="Name*" />
            <input className={styles.companyName} placeholder="Company Name*" />
            <input className={styles.PR} placeholder="Project Requirement*" />
            <input className={styles.budget} placeholder="Project Budget*" />
            <input className={styles.number} placeholder="Phone Number*" />
            <input className={styles.email} placeholder="Email ID*" />
          </div>
          <button className={styles.submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
