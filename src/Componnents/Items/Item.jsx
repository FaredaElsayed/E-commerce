import { Link } from "react-router-dom";
import styles from "./Items.module.css";
import React from "react";
export default function Item(props) {
  return (
    <div className={styles.item}>
      <Link to={`/product/${props.id}`}>
        <img src={props.src} alt={props.image} onClick={window.scrollTo(0,0)}/>
      </Link>
      <p>{props.description}</p>
      <div className={styles.prices}>
        <p className={styles.newPrice}>${props.newPrice}</p>
        <p className={styles.oldPrice}>${props.oldPrice}</p>
      </div>
    </div>
  );
}
