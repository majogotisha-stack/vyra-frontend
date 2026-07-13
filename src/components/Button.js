import "./Button.css";

function Button({ text, onClick, className = "" }) {
  return (
    <button
      className={`vyra-btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;