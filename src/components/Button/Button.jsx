import "./Button.css";
function Button({ color, icon, text, path, size }) {
  return (
    <a href={path} target="_blank">
      <button
        className="btn"
        style={{
          backgroundColor: color,
          width: size.width,
          height: size.height,
        }}
      >
        {icon}
        {text}
      </button>
    </a>
  );
}

Button.defaultProps = {
  size: { width: "96px", height: "48px" },
};

export default Button;
