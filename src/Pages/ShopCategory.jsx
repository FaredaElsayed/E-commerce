import { useContext } from "react";
import styles from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Componnents/Items/Item";
import Footer from "../Componnents/Footer/Footer";
export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles.shopCat}>
      <img src={props.banner} alt="banner" />
      <div className={styles.content}>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className={styles.sortBy}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.products}>
        {all_product.map((product, index) => {
          if (props.category === product.category) {
            return (
              <Item
                src={product.image}
                key={index}
                id = {product.id}
                alt={product.name}
                description={product.name}
                oldPrice={product.old_price}
                newPrice={product.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.loadMore}>EXplore More</div>

      <Footer />
    </div>
  );
}
