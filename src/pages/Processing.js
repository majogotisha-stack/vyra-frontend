import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Processing.css";

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

function Processing() {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {

    if (currentStep < steps.length) {

      const timer = setTimeout(() => {

        setCurrentStep(currentStep + 1);

      }, 900);


      return () => clearTimeout(timer);

    } else {

      const timer = setTimeout(() => {

        navigate("/results");

      }, 1500);


      return () => clearTimeout(timer);

    }

  }, [currentStep, navigate]);


  return (

    <div className="processing">

      <h1>VYRA AI Engine</h1>

      <p className="status">
        Your video is being analyzed...
      </p>


      {steps.map((step, index) => (

        <div
          className={
            index <= currentStep
              ? "step active"
              : "step"
          }
          key={index}
        >

          <span>{step}</span>

        </div>

      ))}


    </div>

  );

}

export default Processing;