import PropTypes from "prop-types";

const Button = (props) => {
  const { text, onClick, disabled } = props;

  const classNames = `text-black text-lg px-5 py-2 select-none ${
    disabled
      ? "bg-amber-300 opacity-50 pointer-events-none"
      : "bg-amber-300 active:scale-95 cursor-pointer"
  }`;

  return (
    <div
      onClick={onClick}
      className={classNames}
    >
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
