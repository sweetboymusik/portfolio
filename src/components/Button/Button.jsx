import "./Button.css";
function Button({ color, icon, text, path, size }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color, width: size.width, height: size.height }}
    >
      {icon}
      {text}
    </button>
  );
}

Button.defaultProps = {
  size: { width: "96px", height: "48px" },
};

export default Button;
