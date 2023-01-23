import React, { useRef } from "react";
import "./ImageUpload.scss";

const ImageUpload = ({ isNewImageFile }) => {
  const fileSelectorRef = useRef();

  const openImageSelectorHandler = () => {
    fileSelectorRef.current.click();
  };

  const changeImageHandler = (event) => {
    if (event.target.files.length === 1) {
      console.log(event.target.files);
      const image = event.target.files[0];
      console.log("imageupload: ", image);
      isNewImageFile(image);
    } else {
      console.error("invalid image");
    }
  };

  return (
    <div className="image-upload">
      <input
        type="file"
        accept=".jpg, .png, .jpeg"
        ref={fileSelectorRef}
        onChange={changeImageHandler}
        style={{ display: "none" }}
        className="image-upload__image-selector"
      />
      <button
        className="image-upload__button"
        type="button"
        onClick={openImageSelectorHandler}
      >
        VIDEO IMAGE
      </button>
    </div>
  );
};

export default ImageUpload;
