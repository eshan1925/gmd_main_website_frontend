import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "", name: "" });
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

  return (
    <div className={styles.main}>
      <img
        className={styles.loginImage}
        src={require("../../images/signup.png")}
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
        <form>
          <label>Your Full Name*</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
            className={styles.input}
            placeholder="Name of User"
          />
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
          <div className={styles.checkBoxAndFP}>
            <div className={styles.checkbox}>
              <input type="checkbox" />{" "}
              <div className={styles.rememberMe}>Remember Me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.loginButton}>Sign up</button>
            <hr />
            <button onClick={navigateToLogin} className={styles.signUpButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
