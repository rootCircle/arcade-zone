import React from "react";
import styles from "../../css/Gallery/Gallery.module.css";
import vid from "./loop.mp4";

function GalleryVideo() {
  return (
    <>
      <div className={styles.head}>
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            GALLERY
          </text>
        </svg>
      </div>
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
    </>
  );
}

export default GalleryVideo;
