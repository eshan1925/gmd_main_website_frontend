import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles.module.css";

const Username = () => {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [verified, setVerified] = useState(false);
  const [currentUsernamesInDb, setCurrentUsernamesInDb] = useState({});
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [sendOtp, setSendOtp] = useState(false);
  const [OTP, setOTP] = useState("");
  const text = window.location.pathname;
  const myPath = text.split("/");
  const currentUserID = myPath[myPath.length - 1];

  const navigate = useNavigate();

  const notify = () => toast("Coming Soon!!!");

  const usernamesFetcher = async (e) => {
    var currentUsernames = await axios.get(
      "https://getmedesignbackend.up.railway.app/dynamicPortfolio/usernamesIntheDB/"
    );
    currentUsernames = currentUsernames.data;
    currentUsernames = currentUsernames.map(function (elem) {
      return elem.toLowerCase().trim();
    });

    setCurrentUsernamesInDb(currentUsernames);
    console.log(currentUsernames);
  };

  React.useEffect(() => {
    usernamesFetcher();
  }, []);

  const handleChange = async ({ currentTarget: input }) => {
    setAvailable(false);
    setUsername(input.value);
  };

  const checkAvailability = () => {
    if (currentUsernamesInDb.includes(username) || username.length < 4) {
      setAvailable(false);
      toast("Username Not Available!!!");
    } else {
      setAvailable(true);
    }
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    setNumber(input.value);
  };

  const handleOTPChange = ({ currentTarget: input }) => {
    setOTP(input.value);
  };

  const sendOTPMessage = () => {
    try {
      setSendOtp(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const clickVerify = () => {
    console.log(OTP);
    setVerified(true);
    toast("You are verified!!!");
  };

  function redirectPage() {
    setSubmitLoading(true);
    document.location.href =
      "http://localhost:3000/social-feed/" + currentUserID;
  }

  const handleSubmit = async (e) => {
    if (!available) {
      toast("Username you selected is not available!!!");
    } else if (!verified) {
      toast("Please verify your mobile number!!");
    } else {
      await axios.post(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/usernamesIntheDB/" +
          currentUserID,
        { username: username }
      );
      await axios.post(
        "https://getmedesignbackend.up.railway.app/dynamicPortfolio/mobileNumberIntheDB/" +
          currentUserID,
        { number: number }
      );

      var updatedUserData = await axios.get(
        "https://getmedesignbackend.up.railway.app/profile/" + currentUserID
      );

      updatedUserData = updatedUserData.data[0];
      console.log(updatedUserData);

      await sessionStorage.removeItem("userData");
      await sessionStorage.setItem("userData", JSON.stringify(updatedUserData));

      setTimeout(redirectPage, 5000);
    }
  };

  return (
    <div className={styles.main}>
      <img
        className={styles.loginImage}
        src={require("../../../images/signup.png")}
        alt="loginpage"
      />
      <div className={styles.loginDiv}>
        <img
          className={styles.gmdLogo}
          src={require("../../../images/gmdLogo.png")}
          alt="GMDlogo"
        />
        <div className={styles.mainHeading}>
          We respect your privacy, <br /> Please update your number!
        </div>
        <label>Pick a Username*</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
          required
          className={styles.input}
          placeholder="Username"
        />
        {/* {username.length !== 0 ? (
            <div>
              {available ? (
                <div className={styles.available}>Available</div>
              ) : (
                <div className={styles.notAvailable}>Not Available</div>
              )}
            </div>
          ) : null} */}

        {username.length > 3 && (
          <div>
            {available ? (
              <div className={styles.available}>Available</div>
            ) : (
              <button onClick={checkAvailability}>Check Availability</button>
            )}
          </div>
        )}
        <label>Enter your Contact Number*</label>
        <input
          type="text"
          name="number"
          onChange={handleNumberChange}
          value={number}
          required
          className={styles.input}
          placeholder="Number"
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

        {sendOtp ? (
          <div>
            <label>OTP-:</label>
            <br />
            <input
              type="text"
              name="otp"
              onChange={handleOTPChange}
              value={OTP}
              required
              className={styles.input}
              placeholder="Please enter the OTP"
            />
          </div>
        ) : null}

        <div className={styles.buttons}>
          {!verified ? (
            <div>
              {!sendOtp ? (
                <button onClick={sendOTPMessage} className={styles.loginButton}>
                  {!loading ? (
                    "Send OTP"
                  ) : (
                    <CircularProgress style={{ color: "white" }} />
                  )}
                </button>
              ) : (
                <button onClick={clickVerify} className={styles.loginButton}>
                  {!loading ? (
                    "Verify"
                  ) : (
                    <CircularProgress style={{ color: "white" }} />
                  )}
                </button>
              )}
            </div>
          ) : null}
          <hr />
          {verified ? (
            <button onClick={handleSubmit} className={styles.signUpButton}>
              {!submitLoading ? (
                <>Submit</>
              ) : (
                <CircularProgress style={{ color: "white" }} />
              )}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Username;
