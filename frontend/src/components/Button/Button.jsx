import classes from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled,
  ...props
}) => {
  return (
    <button
      className={classes.root}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
