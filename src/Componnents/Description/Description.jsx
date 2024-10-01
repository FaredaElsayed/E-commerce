import styles from "./Description.module.css";
export default function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.navigator}>
        <div className={styles.descNav}>Description</div>
        <div className={styles.descNavFade}>Reviews (122)</div>
      </div>
      <div className={styles.descrip}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          nulla obcaecati corrupti non distinctio tempora pariatur, odio,
          assumenda beatae debitis culpa. Molestiae incidunt consequatur dicta
          soluta fugiat aspernatur dolores eveniet.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aliquid nulla obcaecati corrupti non
          distinctio tempora pariatur, odio, assumenda beatae debitis culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente
          repudiandae molestias, praesentium impedit necessitatibus laboriosam
          officiis voluptas labore nisi explicabo dolor quos error voluptates
          mollitia, amet ducimus ab id.
        </p>
      </div>
    </div>
  );
}
