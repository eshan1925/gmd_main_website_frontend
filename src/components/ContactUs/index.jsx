import React from "react";
import styles from "./styles.module.css";
import axios from "axios";

const ContactUs = () => {
  const [data, setFormData] = React.useState({
    name: "",
    companyName: "",
    projectRequirement: "",
    projectBudget: "",
    number: "",
    email: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var body =
      "Hey this is a mail sent form the Contact Us form at your website-: \n Below is the information received \n" +
      JSON.stringify(data);
    window.open(
      "mailto:contactus@getmedesign.com?subject=" +
        "Contact Us form Email" +
        "&body=" +
        body
    );
    setFormData({
      name: "",
      companyName: "",
      projectRequirement: "",
      projectBudget: "",
      number: "",
      email: "",
    });
  };
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
          <form id="myForm" onSubmit={handleSubmit}>
            <div className={styles.inputstaking}>
              <input
                type="text"
                className={styles.nameinput}
                placeholder="Name*"
                onChange={handleChange}
                value={data.name}
                name="name"
                required
              />
              <input
                type="text"
                className={styles.companyName}
                placeholder="Company Name*"
                onChange={handleChange}
                value={data.companyName}
                name="companyName"
                required
              />
              <input
                type="text"
                className={styles.PR}
                placeholder="Project Requirement*"
                onChange={handleChange}
                value={data.projectRequirement}
                name="projectRequirement"
                required
              />
              <input
                type="number"
                className={styles.budget}
                placeholder="Project Budget*"
                onChange={handleChange}
                value={data.projectBudget}
                name="projectBudget"
              />
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className={styles.number}
                placeholder="Phone Number*"
                onChange={handleChange}
                value={data.number}
                name="number"
              />
              <input
                type="email"
                className={styles.email}
                placeholder="Email ID*"
                onChange={handleChange}
                value={data.email}
                name="email"
              />
            </div>
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
