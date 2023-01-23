import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";
import ImageUpload from "../ImageUpload/ImageUpload";
import "./Upload.scss";
import video_placeholder from "../../assets/images/video-placeholder.jpg";
import publish from "../../assets/images/icons/publish.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
  document.title = "Upload Video - Brainflix";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [valid, setValid] = useState(false);
  const [addClassTitle, setAddClassTitle] = useState("");
  const [addClassDescription, setAddClassDescription] = useState("");
  const [image, setImage] = useState(video_placeholder);
  const [isNewImage, setIsNewImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    setValid(title.trim().length > 0 && description.trim().length > 0);
  }, [title, description]);

  useEffect(() => {
    if (isNewImage) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(image);
    }
  }, [image]);

  const isNewImageFile = (imageFile) => {
    if (!imageFile) {
      setIsNewImage(false);
    }
    setImage(imageFile);
    setIsNewImage(true);
  };

  let navigate = useNavigate();

  const notify = () => {
    toast.success("Success!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const postVideo = async () => {
    try {
      const formData = new FormData();
      formData.set("name", "Mohan Muruge");
      formData.set("title", title);
      formData.append("description", description);
      if (isNewImage) {
        formData.append("image", image, previewUrl);
      }

      await axios.post(`http://localhost:8080/api/v1/videos/`, formData, {
        headers: { "Content-type": "multipart/form-data" },
      });

      notify();
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!valid) {
      setAddClassTitle(
        title.trim().length === 0 ? "upload__input--invalid" : ""
      );
      setAddClassDescription(
        description.trim().length === 0 ? "upload__textarea--invalid" : ""
      );
    } else {
      setAddClassTitle("upload__input--success");
      setAddClassDescription("upload__textarea--success");
      postVideo();
    }
  };

  const navToHome = () => {
    navigate("/");
  };

  return (
    <section className="upload">
      <form
        className="upload__form"
        onSubmit={submitHandler}
        encType="multipart/form-data"
        method="POST"
      >
        <h1 className="upload__heading">Upload Video</h1>
        <div className="upload__image-text-box">
          <div className="upload__image-box">
            <label htmlFor="title" className="upload__label">
              VIDEO THUMBNAIL
              <img
                src={!previewUrl ? image : previewUrl}
                alt="video image preview"
                className="upload__image"
              />
            </label>
            <ImageUpload id="image" isNewImageFile={isNewImageFile} />
          </div>
          <div className="upload__text-box">
            <label htmlFor="title" className="upload__label">
              TITLE YOUR VIDEO{" "}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`upload__input ${addClassTitle}`}
              />
            </label>
            <label htmlFor="description" className="upload__label">
              ADD A VIDEO DESCRIPTION{" "}
              <textarea
                name="description"
                id="description"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`upload__textarea ${addClassDescription}`}
              />
            </label>
          </div>
        </div>

        <div className="upload__buttons">
          <button type="button" className="upload__cancel" onClick={navToHome}>
            CANCEL
          </button>

          <Button
            icon={publish}
            text={"PUBLISH"}
            type={"submit"}
            className="upload__publish"
          />
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Upload;
