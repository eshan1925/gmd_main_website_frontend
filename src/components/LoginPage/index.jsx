import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // const navigateToLogin = () => {
  //   navigate("/login");
  // };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = "https://getmedesignbackend.up.railway.app/api/auth";
      const { data: res } = await axios.post(url, data);
      sessionStorage.setItem("token", res.data);
      console.log(res);
      sessionStorage.setItem("userData", JSON.stringify(res.userData));
      console.log(
        "New login to the system...\nuser Details-: " +
          JSON.stringify(res.userData)
      );
      window.location = `/social-feed/${res.userData._id}`;
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getCookieData = () => {
    // console.log(getCookie("myEmail"));
    // console.log(getCookie("myPwd"));
    setData({ email: getCookie("myEmail"), password: getCookie("myPwd") });
  };

  // React.useEffect(() => {
  //   getCookieData();
  // });

  const setCookie = () => {
    document.cookie = "myEmail=" + data.email + ";path=http://13.232.149.146";
    document.cookie = "myPwd=" + data.password + ";path=http://13.232.149.146";
  };

  const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  return (
    <div onLoad={getCookieData} className={styles.main}>
      <img
        className={styles.loginImage}
        src={require("../../images/login.png")}
        alt="loginpage"
      />
      <div className={styles.loginDiv}>
        <img
          onClick={navigateToHome}
          className={styles.gmdLogo}
          src={require("../../images/gmdLogo.png")}
          alt="GMDlogo"
        />
        <div className={styles.mainHeading}>
          Get Started with <br /> Get Me Design
        </div>
        <form onSubmit={handleSubmit}>
          <label>Enter your Email*</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className={styles.input}
            placeholder="Email"
          />
          <label>Enter your Password*</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
            placeholder="Password"
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <div className={styles.checkBoxAndFP}>
            <div className={styles.checkbox}>
              <input
                onClick={setCookie}
                className={styles.checkboxx}
                type="checkbox"
              />{" "}
              <div className={styles.rememberMe}>Remember Me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.loginButton}>
              {!loading ? (
                "Login"
              ) : (
                <CircularProgress style={{ color: "white" }} />
              )}
            </button>
            <hr />
            <button onClick={navigateToSignUp} className={styles.signUpButton}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
