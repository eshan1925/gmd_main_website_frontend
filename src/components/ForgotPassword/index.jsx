import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = React.useState({
    email: "",
    newPassword: "",
    retypedNewPassword: "",
  });
  const navigate = useNavigate();

  const text = window.location.pathname;
  const myPath = text.split("/");
  const token = myPath[myPath.length - 3];
  const [loading, setLoading] = React.useState(false);

  const handleChange = async ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (data.newPassword === data.retypedNewPassword) {
        const res = await axios.put(
          "https://getmedesignbackend.up.railway.app/fp/" +
            data.email +
            "/forgot-password/" +
            token +
            "/",
          data
        );
        if (res.status === 200) {
          navigate("/login");
        } else {
          toast("Some error occured!!");
        }
      } else {
        toast("Passwords do not match!!!");
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast(error.response.data.message);
      } else {
        toast("Some error occured!!");
      }
      console.log(error);
    } finally {
      toast("Password Updated Successfully!!!");
      setLoading(false);
    }
  };
  return (
    <div className={styles.main}>
      <img
        className={styles.loginImage}
        src={require("../../images/signup.png")}
        alt="loginpage"
      />
      <div className={styles.loginDiv}>
        <img
          className={styles.gmdLogo}
          src={require("../../images/gmdLogo.png")}
          alt="GMDlogo"
        />
        <div className={styles.mainHeading}>
          Reset your Password, <br />
        </div>
        <label>Email *</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
          className={styles.input}
          placeholder="Email"
        />
        <label>New Password*</label>
        <input
          type="password"
          name="newPassword"
          onChange={handleChange}
          value={data.newPassword}
          required
          className={styles.input}
          placeholder="New Password"
        />
        <label>Retype New Password*</label>
        <input
          type="password"
          name="retypedNewPassword"
          onChange={handleChange}
          value={data.retypedNewPassword}
          required
          className={styles.input}
          placeholder="Retype New Password"
        />

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
        />

        <button onClick={handleSubmit} className={styles.signUpButton}>
          {!loading ? (
            <>Submit</>
          ) : (
            <CircularProgress style={{ color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
