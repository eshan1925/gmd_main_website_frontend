import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = (props) => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [loading, setLoading] = useState(false);
  var idOfRP = props.idOfPerson;
  const [data, setData] = useState({
    nameOfRequester: "",
    numberOfRequester: "",
    emailOfRequester: "",
    requirements: "",
    idOfRequestedPerson: idOfRP,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url =
        (process.env.BACKEND_PORT || "http://localhost") +
        ":8080/contact-for-requirement/deal";
      const { data: res } = await axios.post(url, data);

      console.log(
        "User-:" +
          userData["_id"] +
          " accessed the edit profile page and edited his profile.."
      );
      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast("Some Error Occured!!! Please try again");
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div id={styles.scrollControl} className={styles.main}>
      <form onSubmit={onSubmit}>
        <div className={styles.mainInput}>
          <label>Name</label>
          <input
            required
            className={styles.inputField}
            onChange={handleChange}
            type="text"
            value={data.nameOfRequester}
            name="nameOfRequester"
            placeholder="Name"
          />
          <label>Phone Number</label>
          <input
            required
            className={styles.inputField}
            onChange={handleChange}
            type="text"
            value={data.numberOfRequester}
            name="numberOfRequester"
            placeholder="Phone Number"
          />
          <label>Email</label>
          <input
            required
            className={styles.inputField}
            onChange={handleChange}
            type="email"
            value={data.emailOfRequester}
            name="emailOfRequester"
            placeholder="Email"
          />
          <label>Requirements</label>
          <textarea
            required
            className={styles.textAreaCC}
            onChange={handleChange}
            value={data.requirements}
            name="requirements"
          />
        </div>
        <div className={styles.buttonWidth}>
          <button className={styles.submitButton} type="submit">
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
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

export default Contact;
