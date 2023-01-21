import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Upload.scss";
import upload_video from "../../assets/images/Upload-video-preview.jpg";
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

  useEffect(() => {
    setValid(title.trim().length > 0 && description.trim().length > 0);
  }, [title, description]);

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
      await axios.post(`http://localhost:8080/api/v1/videos`, {
        name: "Mohan Muruge",
        title: title,
        description: description,
      });
      console.log("POST");
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
        title.trim().length === 0 ? "upload-form__input--invalid" : ""
      );
      setAddClassDescription(
        description.trim().length === 0 ? "upload-form__textarea--invalid" : ""
      );
    } else {
      setAddClassTitle("upload-form__input--success");
      setAddClassDescription("upload-form__textarea--success");
      postVideo();
    }
  };

  return (
    <>
      <form className="upload-form" onSubmit={submitHandler}>
        <h1 className="upload-form__heading">Upload Video</h1>
        <div className="upload-form__image-text-box">
          <div className="upload-form__image-box">
            <label htmlFor="title" className="upload-form__label">
              VIDEO THUMBNAIL{" "}
              <img
                src={upload_video}
                alt="upload video image"
                className="upload-form__image"
              />
            </label>
          </div>
          <div className="upload-form__text-box">
            <label htmlFor="title" className="upload-form__label">
              TITLE YOUR VIDEO{" "}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`upload-form__input ${addClassTitle}`}
              />
            </label>
            <label htmlFor="description" className="upload-form__label">
              ADD A VIDEO DESCRIPTION{" "}
              <textarea
                name="description"
                id="description"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`upload-form__textarea ${addClassDescription}`}
              />
            </label>
          </div>
        </div>

        <div className="upload-form__buttons">
          <Link to="/">
            <button className="upload-form__cancel">CANCEL</button>
          </Link>

          <Button
            icon={publish}
            text={"PUBLISH"}
            type="submit"
            className="upload-form__publish"
          />
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Upload;
