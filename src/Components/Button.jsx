import PropTypes from "prop-types";

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-amber-300 text-black text-lg px-5 py-2 active:scale-95 cursor-pointer select-none"
    >
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
