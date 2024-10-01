import styles from "./ProductItem.module.css";
import arrow_icon from "../../Assets/breadcrum_arrow.png";
import React from "react";
export default function ProductItem(props) {
  const { product } = props;
  return (
    <div className={styles.productItem}>
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}
