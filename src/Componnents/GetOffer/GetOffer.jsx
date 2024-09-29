import styles from "./GetOffer.module.css";
export default function GetOffer() {
  return (
    <div className={styles.offer}>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}
