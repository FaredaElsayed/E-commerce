import styles from "./Items.module.css";

export default function Item({ src, description, newPrice, oldPrice }) {
  return (
    <div className={styles.item}>
      <img src={src} alt={src} />
      <p>{description}</p>
      <div className={styles.prices}>
        <p className={styles.newPrice}>${newPrice}</p>
        <p className={styles.oldPrice}>${oldPrice}</p>
      </div>
    </div>
  );
}
