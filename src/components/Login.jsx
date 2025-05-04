import React, { useState } from "react";
import styles from "./Login.module.css";
import { auth, app } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        navigate("/");
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
            <h1>Sign In</h1>
            <p>
              <span>
                New user
                <a href="/Signup"> Create an account</a>
              </span>
            </p>
          </div>
          <form onSubmit={signIn}>
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
            <button
              type="submit"
              name="submit"
              value="sign in"
              className={styles.inputsubmit}
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
