import React from "react";
import styles from "../../css/Gallery/StaticImg.module.css";

function StaticImg() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.inner}>
          <h1>
            <strong>Perfect  Platform</strong>
          </h1>
        </div>
        <div className={styles.outer}>
          <h1>
            <strong>For Gamers</strong>
          </h1>
        </div>
      </div>
    </>
  );
}

export default StaticImg;
