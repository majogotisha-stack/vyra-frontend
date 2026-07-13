import "../Results.css";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  const downloadDemo = (clip) => {
    alert(`✅ Demo download started for ${clip}`);
  };

  return (
    <div className="results">

      <h1>🎉 AI Analysis Complete</h1>

      <p className="subtitle">
        VYRA has successfully analyzed your content and generated AI insights.
      </p>

      {/* SUMMARY */}

      <section className="summary-card">

        <h2>📊 AI Analysis Summary</h2>

        <div className="summary-grid">

          <div className="summary-item">
            <h3>Duration</h3>
            <p>18 min 42 sec</p>
          </div>

          <div className="summary-item">
            <h3>Transcript Accuracy</h3>
            <p>98%</p>
          </div>

          <div className="summary-item">
            <h3>AI Confidence</h3>
            <p>96%</p>
          </div>

          <div className="summary-item">
            <h3>Clip Opportunities</h3>
            <p>3 Clips</p>
          </div>

        </div>

      </section>

      {/* TRANSCRIPT */}

      <section className="transcript-card">

        <h2>📝 Transcript Preview</h2>

        <p>
          Welcome everyone.
          Today we are discussing consistency,
          discipline and believing in yourself.
          Success comes from the small actions we repeat every day.
          Keep showing up even when nobody is watching.
        </p>

      </section>

      {/* CLIPS */}

      <h2 className="section-title">
        🔥 AI Generated Clips
      </h2>

      <div className="clip-card">

        <div className="video-preview">

        ▶

        <p>Generated Clip Preview</p>

    </div>

        <h3>Clip 1 • Believe In Yourself</h3>

        <p><strong>Time:</strong> 00:00 - 00:15</p>

        <p><strong>Viral Score:</strong> ⭐⭐⭐⭐⭐ (96%)</p>

        <p>
          "Believe in yourself before the results appear."
        </p>

        <button
          onClick={() => downloadDemo("Clip 1")}
        >
          ⬇ Download Clip
        </button>

      </div>

      <div className="clip-card">

        <div className="video-preview">

        ▶

        <p>Generated Clip Preview</p>

    </div>

        <h3>Clip 2 • Consistency Wins</h3>

        <p><strong>Time:</strong> 00:18 - 00:35</p>

        <p><strong>Viral Score:</strong> ⭐⭐⭐⭐☆ (93%)</p>

        <p>
          "Small daily actions create extraordinary success."
        </p>

        <button
          onClick={() => downloadDemo("Clip 2")}
        >
          ⬇ Download Clip
        </button>

      </div>

      <div className="clip-card">

        <div className="video-preview">

        ▶

        <p>Generated Clip Preview</p>

    </div>

        <h3>Clip 3 • Never Give Up</h3>

        <p><strong>Time:</strong> 00:40 - 00:58</p>

        <p><strong>Viral Score:</strong> ⭐⭐⭐⭐⭐ (91%)</p>

        <p>
          "Consistency always beats talent when talent doesn't work."
        </p>

        <button
          onClick={() => downloadDemo("Clip 3")}
        >
          ⬇ Download Clip
        </button>

      </div>

      {/* CAPTION */}

      <section className="caption-card">

        <h2>💬 AI Caption Suggestion</h2>

        <p>
          Success isn't built overnight.
          Stay consistent.
          Keep improving.
          Trust the process.
        </p>

      </section>

      {/* TITLE */}

      <section className="title-card">

        <h2>🏷 Suggested Title</h2>

        <p>
          How Consistency Changes Everything
        </p>

      </section>

      {/* HASHTAGS */}

      <section className="hashtags-card">

        <h2>#️⃣ Suggested Hashtags</h2>

        <p>
          #Success #Motivation #Leadership #Growth #Faith #Mindset #VYRA
        </p>

      </section>

      {/* AI INSIGHTS */}

      <section className="recommendation-card">

        <h2>🧠 VYRA AI Insights</h2>

        <div className="insight-score">

          <h1>96%</h1>

          <p>Overall Viral Potential</p>

        </div>

        <hr />

        <h3>Why these clips were selected</h3>

        <ul>

          <li>✅ Strong opening hook</li>

          <li>✅ High emotional engagement</li>

          <li>✅ Clear speech recognition</li>

          <li>✅ Excellent audience retention</li>

          <li>✅ Motivational message</li>

        </ul>

        <hr />

        <h3>Predicted Performance</h3>

        <p>🎵 TikTok ⭐⭐⭐⭐⭐</p>

        <p>📺 YouTube Shorts ⭐⭐⭐⭐☆</p>

        <p>📷 Instagram Reels ⭐⭐⭐⭐⭐</p>

      </section>

      {/* ROADMAP */}

      <section className="roadmap-card">

        <h2>🚀 VYRA Roadmap</h2>

        <ul>

          <li>🎙 AI Voice Cloning</li>

          <li>✂ Automatic Video Editing</li>

          <li>🌍 Multi-language Translation</li>

          <li>📱 Direct Social Media Publishing</li>

          <li>👥 Team Collaboration</li>

          <li>📊 Creator Analytics Dashboard</li>

          <li>🎨 AI Brand Templates</li>

        </ul>

      </section>

      {/* NOTICE */}

      <section className="notice-card">

        <h2>ℹ Version 1 Proof of Concept</h2>

        <p>

          This prototype demonstrates the complete VYRA workflow.

          The production version will perform real AI transcription,
          intelligent clip selection,
          automatic caption generation,
          and AI-powered video editing.

        </p>

      </section>

      {/* BUTTONS */}

     <div className="bottom-buttons">

    <button
        className="primary-btn"
        onClick={() => navigate("/dashboard")}
    >
        🔄 Analyze Another Video
    </button>

    <button
        className="secondary-btn"
        onClick={() => alert("Export coming in Version 2")}
    >
        🚀 Export
    </button>

    <button
        className="report-btn"
        onClick={() => navigate("/report")}
    >
        📄 Generate AI Report
    </button>

</div>

    </div>
  );
}

export default Results;