import styles from "./Hero.module.css";
import hero_img from "../../Assets/hero_image.png"
import arrow from "../../Assets/arrow.png"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <p>
          new 👋
          <br />
          collections <br />
          for everyone
        </p>
        <button>Latest Collection <img src={arrow} alt="arrow"/></button>
      </div>
      <div className={styles.heroRight}>
        <img src={hero_img} alt="img Hero"></img>
      </div>
    </div>
  );
}
