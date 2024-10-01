import CartItems from "../Componnents/CartItems/CartItems";
import Footer from "../Componnents/Footer/Footer";
import styles from "./CSS/Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <CartItems />
      <Footer />
    </div>
  );
}
