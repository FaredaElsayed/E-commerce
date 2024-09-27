import styles from "./Navbar.module.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="navlogo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navMenu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men
          {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className={styles.navLogin}>
        <button>Login</button>
        <img src={cart_icon} alt="nav cart" />
        <div className={styles.count}>0</div>
      </div>
    </div>
  );
}
