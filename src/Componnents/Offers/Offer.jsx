import styles from "./Offer.module.css";
import exclusive_image from "../../Assets/exclusive_image.png";
import React from "react";
export default function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.offerLeft}>
        <p>
          Exclusive
          <br />
          Offers For You
        </p>
        <h2>ONLY ON BEST SELLERS PRODUCTS</h2>
        <button>Check now</button>
      </div>
      <div className={styles.offerRight}>
        <img src={exclusive_image} alt="img offer"></img>
      </div>
    </div>
  );
}
