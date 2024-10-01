import styles from "./Navbar.module.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("shop");
  const { getTotalItems } = useContext(ShopContext);
  // Set the menu based on the current location
  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("shop");
    } else if (location.pathname === "/men") {
      setMenu("men");
    } else if (location.pathname === "/women") {
      setMenu("women");
    } else if (location.pathname === "/kids") {
      setMenu("kids");
    } else if (location.pathname === "/login") {
      setMenu("");
    } else if (location.pathname === "/cart") {
      setMenu("");
    }
  }, [location.pathname]);

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
        <div className={styles.count}>{getTotalItems()}</div>
      </div>
    </div>
  );
}
