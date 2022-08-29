const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${props.bgcolor}`,
        color: `${props.color}`,
      }}
      className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
