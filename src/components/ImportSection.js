import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ImportSection.css";
import { uploadVideo } from "../services/api";

function ImportSection() {

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  async function startUpload() {

    // Upload from device
    if (selectedFile) {

      setUploading(true);
      setProgress(0);

      try {
        await uploadVideo(selectedFile);
      } catch (err) {
        console.log(err);
      }

      return;
    }

    // Import using URL (Demo Mode)

    if (videoUrl.trim() !== "") {

      alert(
        "Demo Mode\n\nVYRA detected a valid public video URL and has started AI analysis."
      );

      setUploading(true);
      setProgress(0);

      return;
    }

    alert("Please upload a video or paste a public video URL.");
  }

  useEffect(() => {

    if (uploading && progress < 100) {

      const timer = setTimeout(() => {

        setProgress(progress + 10);

      }, 250);

      return () => clearTimeout(timer);

    }

    if (progress === 100) {

      setUploading(false);

      setTimeout(() => {

        navigate("/processing");

      }, 700);

    }

  }, [progress, uploading, navigate]);

  return (

    <section className="import-section">

      <h2>Import Video</h2>

      <p className="import-description">

        Upload from your computer or paste a YouTube, Facebook, TikTok,
        Instagram or any public video link.

      </p>

      <div className="import-container">

        <div className="url-card">

          <h3>📁 Upload From Device</h3>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          {selectedFile &&

            <p className="file-name">

              ✅ {selectedFile.name}

            </p>

          }

          <hr />

          <h3>🔗 Paste Public Video URL</h3>

          <input
            type="text"
            placeholder="https://youtube.com/... or Facebook, TikTok..."
            value={videoUrl}
            onChange={(e)=>setVideoUrl(e.target.value)}
          />

          <button
            className="analyze-btn"
            onClick={startUpload}
          >

            🚀 Analyze Video

          </button>

          {uploading &&

            <>

              <progress
                value={progress}
                max="100"
              ></progress>

              <p>{progress}% Uploaded</p>

            </>

          }

        </div>

      </div>

    </section>

  );

}

export default ImportSection;