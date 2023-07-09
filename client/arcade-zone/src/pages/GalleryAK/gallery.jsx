import React from "react";
import GalleryVideo from "./GalleryVideo";
import Carousal from "./CarsoulGallery";
import StaticImg from "./staticimg";

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
