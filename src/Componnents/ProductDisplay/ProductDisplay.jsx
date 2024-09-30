import styles from "./ProductDisplay.module.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
export default function ProductDisplay(props) {
  const { product } = props;
  return (
    <div className={styles.productDisplay}>
      <div className={styles.productLeft}>
        <div className={styles.imgList}>
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.mainImg}>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className={styles.productRight}>
        <h1>{product.name}</h1>
        <div className={styles.stars}>
          <div>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className={styles.prices}>
          <p>${product.old_price}</p>
          <span>${product.new_price}</span>
        </div>
        <p>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeve lightweight, usually knitted,
          pullover shirt.
        </p>
        <p className={styles.size}>Select Size</p>
        <div className={styles.measures}>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button>Add To Cart</button>
        <div className={styles.cat}>
          <p>
            Category: <span>{product.category}</span>
          </p>
          <p>
            Tags:<span>Modern, latest</span>
          </p>
        </div>
      </div>
    </div>
  );
}
