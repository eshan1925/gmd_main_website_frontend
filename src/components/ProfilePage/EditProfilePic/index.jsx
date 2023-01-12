import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const EditProfilePic = () => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    _id:userData["_id"],
    profilePic: userData["profilePic"],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url =
        "https://getmedesignbackend.up.railway.app/profile/" +
        userData._id +
        "/edit-profile";
      const { data: res } = await axios.put(url, data);


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
        <div className={styles.mainInput}>
          <div className={styles.title}>Profile Picture</div>
          <label htmlFor="file" className="shareOption">
            <FileBase64
              multiple={false}
              id="upload"
              onDone={({ base64 }) => setData({ ...data, profilePic: base64 })}
            />
          </label>
        </div>
        <div className={styles.buttonWidth}>
          <button className={styles.submitButton} type="submit">
            {loading ? (
              <CircularProgress size="20px" style={{ color: "white" }} />
            ) : (
              "Set Profile Picture"
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

export default EditProfilePic;
