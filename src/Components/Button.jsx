const Button = (props) => {
  const { text } = props;
  return (
    <div className="bg-amber-300 text-black text-lg px-5 py-2 active:scale-85 cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
