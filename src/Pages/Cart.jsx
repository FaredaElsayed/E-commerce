import CartItems from "../Componnents/CartItems/CartItems";
import Footer from "../Componnents/Footer/Footer";
import styles from "./CSS/Cart.module.css";
import React from "react";
export default function Cart() {
  return (
    <div className={styles.cart}>
      <CartItems />
      <Footer />
    </div>
  );
}
