import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      await axios.post(
        "https://getmedesignbackend.up.railway.app/contact-us/new-contact-request",
        data
      );
      console.log("Contact Us form was used...");
      toast("We received your request!!!");
      setFormData({
        name: "",
        companyName: "",
        projectRequirement: "",
        projectBudget: "",
        number: "",
        email: "",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast("Some Error Occured!!! Please try again");
        console.log(error);
      }
    }
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
            src={require("../../../images/inputArea.png")}
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
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className={styles.nameinput}
                placeholder="Name*"
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
      <ToastContainer
        // position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        type="error"
      />
    </div>
  );
};

export default ContactUs;
