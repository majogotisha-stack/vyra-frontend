import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Processing.css";

function Processing() {

  const navigate = useNavigate();

  const steps = [
    "🎥 Extracting Video",
    "🎙️ Extracting Audio",
    "📝 Converting Speech to Text",
    "🧠 Understanding Content",
    "✨ Detecting Powerful Moments",
    "✂️ Generating Short Clips",
    "💬 Creating Captions",
    "🏷️ Generating Titles & Hashtags"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {

    if (currentStep < steps.length) {

      const timer = setTimeout(() => {

        setCurrentStep(currentStep + 1);

      }, 900);

      return () => clearTimeout(timer);

    } else {

      setTimeout(() => {

        navigate("/results");

      }, 1500);

    }

  }, [currentStep, navigate]);

  return (

    <div className="processing">

      <h1>VYRA AI Engine</h1>

      <p className="status">

        Your video is being analyzed...

      </p>

      {steps.map((step, index) => (

        <div className="step" key={index}>

          {index < currentStep ? "✅ " : "⏳ "}

          {step}

        </div>

      ))}

      <br />

      <h3>

        {currentStep < steps.length

          ? "Artificial Intelligence is processing..."

          : "Analysis Complete ✔"}

      </h3>

    </div>

  );

}

export default Processing;