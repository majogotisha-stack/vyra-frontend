import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {

  const navigate = useNavigate();

  return (

    <div className="landing">

      <div className="overlay">

        <h1>VYRA</h1>

        <h2>
          AI-Powered Content Repurposing Platform
        </h2>

        <p>

          Upload a long-form video once.

          <br /><br />

          VYRA automatically detects the most powerful moments,
          generates captions,
          creates viral titles,
          recommends hashtags,
          and prepares social-media-ready short clips.

        </p>

        <div className="features">

          <div>🎥 Smart Clip Detection</div>

          <div>🎙 AI Speech Recognition</div>

          <div>💬 Auto Captions</div>

          <div>🏷 AI Titles & Hashtags</div>

          <div>📱 Social Media Ready</div>

          <div>🌍 Multi-platform Support</div>

        </div>

        <button
          onClick={() => navigate("/login")}
          className="launch-btn"
        >

          🚀 Launch VYRA

        </button>

      </div>

    </div>

  );

}

export default Landing;