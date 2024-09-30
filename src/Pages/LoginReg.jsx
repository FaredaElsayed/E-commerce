import styles from "./CSS/LoginRes.module.css";
export default function LoginReg() {
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
          Already have an account?<span>Login here.</span>
        </p>
        <div className={styles.agree}>
          <input type="checkbox" />
          <p>By continuing i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  );
}
