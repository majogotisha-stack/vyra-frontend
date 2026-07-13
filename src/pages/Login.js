import { useNavigate } from "react-router-dom";
import "../Login.css";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🚀 VYRA AI</h1>

        <h2>Create Viral Content in Minutes</h2>

        <p>
          Upload one long-form video and let Artificial Intelligence generate
          short clips, captions, titles and hashtags automatically.
        </p>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <p className="demo-text">
          Demo Prototype • Version 1.0
        </p>

      </div>

    </div>
  );
}

export default Login;