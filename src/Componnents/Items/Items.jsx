import Item from "./Item";
import styles from "./Items.module.css";
import data_product from "../../Assets/data";
import React from "react";
export default function Items() {
  return (
    <>
      <div className={styles.head}>
        <h1>POPULAR FOR WOMEN</h1>
        <hr />
      </div>
      <div className={styles.items}>
        {data_product.map((item) => {
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
    </>
  );
}
