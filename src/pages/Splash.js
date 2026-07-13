import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Splash.css";

function Splash() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/login");

    }, 3500);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div className="splash">

      <div className="logo">

        <h1>🚀 VYRA AI</h1>

        <h2>The AI Operating System for Content Creators</h2>

        <p>Version 1 Prototype</p>

        <h3>Developed by</h3>

        <strong>Tisha Majogo</strong>

        <div className="loading">

          <div className="bar"></div>

        </div>

        <p className="loading-text">

          Initializing Artificial Intelligence...

        </p>

      </div>

    </div>

  );

}

export default Splash;