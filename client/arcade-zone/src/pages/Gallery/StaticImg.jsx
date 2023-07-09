import React from "react";
import styles from "../../css/Gallery/StaticImg.module.css";

function StaticImg() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.inner} style={{height:"min-content"}}>
          <h1 style={{height:"min-content"}}>
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
