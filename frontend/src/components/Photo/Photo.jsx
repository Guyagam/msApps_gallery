import { useState } from "react";
import classes from "./Photo.module.css";
import { Modal } from "../Modal/Modal";

export const Photo = ({ photo }) => {
  const [open, setOpen] = useState(false);

  const onPhotoClick = () => setOpen(true);

  return (
    <div className={classes.imgContainer}>
      <img
        onClick={onPhotoClick}
        className={classes.img}
        src={photo.webformatURL}
        alt={photo.tags}
      />
      <Modal open={open} setOpen={setOpen}>
        <h4>Photo information:</h4>
        <ul className={classes.modalList}>
          <li>Comments: {photo.comments}</li>
          <li>Downloads: {photo.downloads}</li>
          <li>likes: {photo.likes}</li>
          <li>Tags: {photo.tags}</li>
          <li>Views: {photo.views}</li>
          <li> Collection: {photo.collections}</li>
        </ul>
      </Modal>
    </div>
  );
};
