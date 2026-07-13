import "./Report.css";

function Report() {
  return (
    <div className="report-page">

      <div className="report-header">

        <h1>📊 VYRA AI Analysis Report</h1>

        <p>
          Artificial Intelligence has completed a full analysis of your video.
        </p>

      </div>

      <div className="report-card">

        <h2>🎥 Video Information</h2>

        <p><strong>Filename:</strong> Sunday_Service.mp4</p>
        <p><strong>Duration:</strong> 52 Minutes</p>
        <p><strong>Language:</strong> English</p>
        <p><strong>Speaker:</strong> Prophet E. Nota.</p>

      </div>

      <div className="report-card">

        <h2>🧠 AI Summary</h2>

        <p>
          This sermon focuses on faith, perseverance,
          purpose and trusting God during difficult
          seasons.
        </p>

      </div>

      <div className="report-card">

        <h2>🔥 Powerful Moments Detected</h2>

        <ul>
          <li>03:15 – Faith produces results.</li>
          <li>12:40 – Never give up.</li>
          <li>18:22 – God's timing is perfect.</li>
          <li>29:10 – Walking in purpose.</li>
          <li>45:06 – Prayer changes everything.</li>
        </ul>

      </div>

      <div className="report-card">

        <h2>📱 Recommended Platforms</h2>

        <div className="platforms">

          <span>🎵 TikTok</span>

          <span>📸 Instagram Reels</span>

          <span>▶ YouTube Shorts</span>

          <span>📘 Facebook Reels</span>

          <span>💼 LinkedIn</span>

        </div>

      </div>

      <div className="report-card">

        <h2>📈 Viral Prediction</h2>

        <h1 style={{color:"#16A34A"}}>96%</h1>

        <p>
          Based on engagement patterns, emotional
          impact and speech analysis.
        </p>

      </div>

      <div className="buttons">

        <button>⬇ Download Report</button>

        <button>📤 Share Report</button>

      </div>

    </div>
  );
}

export default Report;