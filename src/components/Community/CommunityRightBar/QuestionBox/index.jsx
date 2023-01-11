import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const QuestionBox = (props) => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [loading, setLoading] = useState(false);
  var idOfRP = props.idOfPerson;
  const [data, setData] = useState({
    userId: idOfRP,
    title:"",
    question: ""
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url =
      "https://getmedesignbackend.up.railway.app/community-forum/new-activity";
      const { data: res } = await axios.post(url, data);

      console.log(
        "User-:" +
          userData["_id"] +
          " accessed the Add activity in community page and added activity.."
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
          <label>Title</label>
          <input
            required
            className={styles.inputField}
            onChange={handleChange}
            type="text"
            value={data.title}
            name="title"
            placeholder="Title"
          />
          <label>Question</label>
          <textarea
            required
            className={styles.textAreaCC}
            onChange={handleChange}
            value={data.question}
            name="question"
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

export default QuestionBox;
