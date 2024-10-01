import styles from "./RelatedProducts.module.css";
import data_product from "../../Assets/data";
import Item from "../Items/Item";
import React from "react";
export default function RelatedProducts() {
  return (
    <div className={styles.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.relatedItem}>
        {data_product.map((item, i) => {
          return (
            <Item
              src={item.image}
              description={item.name}
              key={item.id}
              id={item.id}
              oldPrice={item.old_price}
              newPrice={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}
