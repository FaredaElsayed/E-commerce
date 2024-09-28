import styles from "./Navbar.module.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className={styles.navLogin}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="nav cart" />
        </Link>
        <div className={styles.count}>0</div>
      </div>
    </div>
  );
}
