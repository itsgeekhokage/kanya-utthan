import React, { useState } from "react";
import styles from "../styles/signin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (email === "" || password === "") {
      alert("All fields are required.");
      return;
    }
    try {
      axios.post("", { ...loginData });
      alert("Logged in successful");
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.myContainer}>
      <div className={styles.formContainer} onSubmit={submitHandler}>
        <p className={styles.title}>Welcome back</p>
        <form className={styles.form}>
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <p className={styles.pageLink}>
            <span className={styles.page_link_label}>Forgot Password?</span>
          </p>
          <button type="submit" className={styles.form_btn}>
            Log in
          </button>
        </form>
        <p className={styles.sign_up_label} onClick={(()=>navigate('/sign-up'))}>
          Don't have an account?<span className={styles.link} >Sign up</span>
        </p>
        <div className={styles.buttonsContainer}>
          <div className={styles.googleButton}>
            <img src="./assets/images/google.png" alt="Google Button" />
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
