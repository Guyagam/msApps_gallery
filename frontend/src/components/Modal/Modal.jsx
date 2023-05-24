import classes from "./Modal.module.css";

export const Modal = ({ open, setOpen, children }) => {
  const closeModal = (e) => {
    // clicked element === element that has event listener
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className={classes.modal} onClick={closeModal}>
      <div className={classes.modalContent}>
        <span onClick={closeModal} className={classes.close}>
          X
        </span>

        {children}
      </div>
    </div>
  );
};
