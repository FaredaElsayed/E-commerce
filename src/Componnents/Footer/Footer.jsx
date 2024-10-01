import styles from "./Footer.module.css";
import logo from "../../Assets/logo.png";
import Whatsapp from "../../Assets/whatsapp_icon.png";
import insta from "../../Assets/instagram_icon.png";
import pinterset from "../../Assets/pintester_icon.png";
import React from "react";
export default function Footer() {
  return (
    <div className={styles.footer}>
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
      <hr />
      <p>Copyright &copy; 2023 Shopper. All rights reserved.</p>
    </div>
  );
}
