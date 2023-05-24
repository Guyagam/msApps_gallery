import { useSelector } from "react-redux";
import { Photo } from "../Photo/Photo";
import classes from "./Gallery.module.css";

export const Gallery = () => {
  const { photos } = useSelector((state) => state.gallery);

  return (
    <div className={classes.gallery}>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
