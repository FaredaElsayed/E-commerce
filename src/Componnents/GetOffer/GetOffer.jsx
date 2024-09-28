import styles from "./GetOffer.module.css";
import logo from "../../Assets/logo.png";
import Whatsapp from "../../Assets/whatsapp_icon.png";
import insta from "../../Assets/instagram_icon.png";
import pinterset from "../../Assets/pintester_icon.png";
export default function GetOffer() {
  return (
    <div className={styles.offer}>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
      <div className={styles.logo}>
        <img src={logo} alt="logo"></img>
        <p>SHOPPER</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>
          <img src={Whatsapp} alt="logo"></img>
        </li>
        <li>
          <img src={pinterset} alt="logo"></img>
        </li>
        <li>
          <img src={insta} alt="logo"></img>
        </li>
      </ul>
      <hr style={{ width: "80%" }} />
      <p>Copyright &copy; 2023 Shopper. All rights reserved.</p>
    </div>
  );
}
