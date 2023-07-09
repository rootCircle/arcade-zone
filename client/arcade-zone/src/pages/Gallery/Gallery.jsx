import React from "react";
import GalleryVideo from "./GalleryVideo";
import Carousal from "./CarousalGallery";
import StaticImg from "./StaticImg";

function Gallery() {
  return (
    <>
      <GalleryVideo />
      <Carousal />
      <StaticImg />
    </>
  );
}

export default Gallery;
