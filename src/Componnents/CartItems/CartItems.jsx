import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";
import React from "react";
export default function CartItems() {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className={styles.cartItemsFormat}>
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.quant}>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="removeicon"
                  className={styles.remove}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.down}>
        <div className={styles.totalItems}>
          <h1>Cart Total</h1>
          <div>
            <div className={styles.totalDown}>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className={styles.shipping}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.total}>
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div>
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
