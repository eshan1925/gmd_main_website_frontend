import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      localStorage.setItem("userData", JSON.stringify(res.userData));

      window.location = `/`;
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.main}>
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
              <input type="checkbox" />{" "}
              <div className={styles.rememberMe}>Remember Me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.loginButton}>Login</button>
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
