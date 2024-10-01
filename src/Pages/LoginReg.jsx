import { useState } from "react";
import styles from "./CSS/LoginRes.module.css";
import React from "react";
export default function LoginReg() {
  const [log, setLog] = useState(false);

  function goLogin() {
    setLog(true);
  }

  function goSign() {
    setLog(false);
  }

  if (log) {
    return (
      <div className={styles.loginReg}>
        <div className={styles.formContainer}>
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="Your Name" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
          <p>
            Don't have an account?
            <span onClick={() => goSign()}>Sign up.</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.loginReg}>
        <div className={styles.formContainer}>
          <form>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Continue</button>
          </form>
          <p>
            Already have an account?
            <span onClick={() => goLogin()}>Login here.</span>
          </p>
          <div className={styles.agree}>
            <input type="checkbox" />
            <p>By continuing I agree to the terms of use & privacy policy </p>
          </div>
        </div>
      </div>
    );
  }
}
