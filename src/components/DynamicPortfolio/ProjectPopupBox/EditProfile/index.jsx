import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const EditProfile = () => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    creatorOfProject: userData["_id"],
    title: "",
    description: "",
    link: "",
    image: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url =
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/projects/" +
        userData._id;
      const { data: res } = await axios.post(url, data);

      // const url2 = "http:/localhost:8080/profile/"+userData._id;
      // const data2 = await axios.get(url2).then((response)=>{

      //   const foundContent = response.data[0];
      //   console.log(foundContent);
      //   sessionStorage.setItem("userData",foundContent);
      // })
      console.log(
        "User-:" +
          userData["_id"] +
          " accessed the create project menu and created a new project.."
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
  return (
    <div id={styles.scrollControl} className={styles.main}>
      <form onSubmit={onSubmit}>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Project Name</div>
            <input
              className={styles.inputContainer}
              name="title"
              value={data.title}
              type="text"
              placeholder="Enter the project name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Project Link</div>
            <input
              className={styles.inputContainer}
              name="link"
              value={data.link}
              type="text"
              placeholder="Project link"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Project Representation Image</div>
            <label htmlFor="file" className="shareOption">
              <FileBase64
                multiple={false}
                id="upload"
                onDone={({ base64 }) => setData({ ...data, image: base64 })}
              />
            </label>
          </div>
        </div>
        <div className={styles.NT}>Description of the project</div>
        <br />{" "}
        <textarea
          name="description"
          value={data.description}
          placeholder="Describe your project"
          onChange={handleChange}
          className={styles.textareaBio}
        />
        <button className={styles.submitButton} type="submit">
          {loading ? (
            <CircularProgress style={{ color: "white" }} />
          ) : (
            "Create Project"
          )}
        </button>
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

export default EditProfile;
