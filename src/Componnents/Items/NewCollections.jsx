import Item from "./Item";
import styles from "./Items.module.css";
import new_collections from "../../Assets/new_collections";
export default function NewCollections() {
  return (
    <>
      <div className={styles.head}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      </div>
      <div className={styles.newCollections}>
        {new_collections.map((item) => {
          return (
            <Item
              src={item.image}
              description={item.name}
              key={item.id}
              oldPrice={item.old_price}
              newPrice={item.new_price}
            />
          );
        })}
      </div>
    </>
  );
}
