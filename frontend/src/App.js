import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GALLERY_ACTIONS } from "./store/gallery.reducer";
import { Gallery } from "./components/Gallery/Gallery";
import { Button } from "./components/Button/Button";
import { httpService } from "./services/http-service";
import { Modal } from "./components/Modal/Modal";
import { CATEGORIES, SORT_BY } from "./constants";
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const { photos, page, category, sortBy } = useSelector(
    (state) => state.gallery
  );
  const dispatch = useDispatch();
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  useEffect(() => {
    httpService.getPhotos(category, page, sortBy).then((photos) => {
      dispatch({
        type: GALLERY_ACTIONS.SET_PHOTOS,
        photos,
      });
    });
  }, [category, dispatch, page, sortBy]);

  if (photos.length === 0) {
    return <div className={classes.loader}><PacmanLoader color="#36d7b7" /></div>
      ;
  }

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <Button
          disabled={page === 1}
          onClick={() => dispatch({ type: GALLERY_ACTIONS.PREV_PAGE })}
        >
          Prev
        </Button>
        <Button onClick={() => setCategoryModalOpen(true)}>
          Choose parameters
        </Button>
        <Button onClick={() => dispatch({ type: GALLERY_ACTIONS.NEXT_PAGE })}>
          Next
        </Button>
      </div>
      <Gallery />
      <Modal open={categoryModalOpen} setOpen={setCategoryModalOpen}>
        <h3>Choose Category:</h3>
        <div className={classes.modalBtnContanier}>
          {CATEGORIES.map((category) => (
            <button className={classes.modalBtn}
              onClick={() => {
                dispatch({ type: GALLERY_ACTIONS.SET_CATEGORY, category });
                setCategoryModalOpen(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <h3>Choose Sorting:</h3>
        <div className={classes.modalBtnContanier}>
          {SORT_BY.map((sortBy) => (
            <button className={classes.modalBtn}
              onClick={() => {
                dispatch({ type: GALLERY_ACTIONS.SET_SORT_BY, sortBy });
                setCategoryModalOpen(false);
              }}
            >
              {sortBy}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
