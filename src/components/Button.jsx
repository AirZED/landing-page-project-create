const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${props.bgcolor}`,
        color: `${props.color}`,
      }}
      className="button"
    >
      {props.title}
    </button>
  );
};

export default Button;
