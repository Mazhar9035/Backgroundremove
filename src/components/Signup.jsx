import React, { useState } from "react";
import styles from "./Login.module.css";
import { auth, app } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate("");
  const Signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        navigate("/login");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.heading}>
            <h1>Sign up</h1>
            <p>
              Already a User?
              <span>
                <a href="/Login"> Login</a>
              </span>
            </p>
          </div>
          <form onSubmit={Signup}>
            <div className={styles.inputcontrol}>
              <input
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={styles.inputfield}
              />
            </div>
            <div className={styles.inputcontrol}>
              <input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={styles.inputfield}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm your Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className={styles.inputfield}
              />
            </div>
            <button
              type="submit"
              name="submit"
              value="sign in"
              className={styles.inputsubmit}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
