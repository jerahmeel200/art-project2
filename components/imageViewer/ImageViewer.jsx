// ImageViewer.js
import React from "react";

function ImageViewer({ imageSrc }) {
  return (
    <div className="image-viewer">
      <img src={imageSrc} alt="large" />
    </div>
  );
}

export default ImageViewer;
