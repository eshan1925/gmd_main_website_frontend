import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const EditServiceProfile = () => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    _id: userData["_id"],
    name: userData["name"],
    Bio: userData["Bio"],
    country: userData["country"],
    profilePic: userData["profilePic"],
    charge: userData["charge"],
    experience: userData["experience"],
    tools: userData["tools"],
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url =
        "https://getmedesignbackend.up.railway.app/profile/" +
        userData._id +
        "/edit-profile";
      const { data: res } = await axios.put(url, data);

      // const url2 = "http:/localhost:8080/profile/"+userData._id;
      // const data2 = await axios.get(url2).then((response)=>{

      //   const foundContent = response.data[0];
      //   console.log(foundContent);
      //   sessionStorage.setItem("userData",foundContent);
      // })
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
  return (
    <div id={styles.scrollControl} className={styles.main}>
      <form onSubmit={onSubmit}>
        {/* <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Name</div>
            <input
              className={styles.inputContainer}
              name="name"
              value={data.name}
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Location</div>
            <input
              className={styles.inputContainer}
              name="country"
              value={data.country}
              type="text"
              placeholder="Enter the Country"
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Profile Pic</div>
            <label htmlFor="file" className="shareOption">
              <FileBase64
                multiple={false}
                id="upload"
                onDone={({ base64 }) =>
                  setData({ ...data, profilePic: base64 })
                }
              />
            </label>
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Tools Known</div>
            <input
              className={styles.inputContainer}
              name="tools"
              value={data.tools}
              type="text"
              placeholder="Enter the Tools Known"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Experience</div>
            <input
              className={styles.inputContainer}
              name="experience"
              value={data.experience}
              type="text"
              placeholder="In X years and Y months"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Charge Rate</div>
            <input
              className={styles.inputContainer}
              name="charge"
              value={data.charge}
              type="text"
              placeholder="Minimum desired Charge"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.NT}>Short Note About You!!!</div>
        <br />{" "}
        <textarea
          name="Bio"
          value={data.Bio}
          placeholder="Bio"
          onChange={handleChange}
          className={styles.textareaBio}
        />
        <button className={styles.submitButton} type="submit">
          {loading ? (
            <CircularProgress style={{ color: "white" }} />
          ) : (
            "Update Profile"
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

export default EditServiceProfile;
