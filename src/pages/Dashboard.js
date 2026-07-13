import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ImportSection from "../components/ImportSection";
import "../Dashboard.css";

function Dashboard() {

  const [videos, setVideos] = useState(0);
  const [clips, setClips] = useState(0);
  const [success, setSuccess] = useState(0);

  useEffect(() => {

    let v = 0;
    let c = 0;
    let s = 0;

    const timer = setInterval(() => {

      if (v < 23) {
        v++;
        setVideos(v);
      }

      if (c < 156) {
        c += 4;
        setClips(c);
      }

      if (s < 98) {
        s++;
        setSuccess(s);
      }

    }, 30);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="dashboard">

      <Navbar />

      <section className="hero">

        <h2>AI Content Dashboard</h2>

        <p>

          Upload videos or paste any public video URL.

          VYRA automatically finds the most powerful

          moments using Artificial Intelligence.

        </p>

      </section>

      <ImportSection />

      <section className="projects">

        <h3>📁 Recent Projects</h3>

        <div className="project">

          Sunday Service.mp4

          <span>Completed ✅</span>

        </div>

        <div className="project">

          Leadership Summit.mp4

          <span>Completed ✅</span>

        </div>

        <div className="project">

          Youth Conference.mp4

          <span>Processing ⏳</span>

        </div>

      </section>

      <section className="stats">

        <div className="stat-card">

          <h2>{videos}</h2>

          <p>Videos Uploaded</p>

        </div>

        <div className="stat-card">

          <h2>{clips}</h2>

          <p>Clips Generated</p>

        </div>

        <div className="stat-card">

          <h2>{success}%</h2>

          <p>AI Success Rate</p>

        </div>

      </section>

    </div>

  );

}

export default Dashboard;