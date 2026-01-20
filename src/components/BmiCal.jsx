import "./style.css";
import { useState } from "react";

export function Bmical() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height > 0 && weight > 0) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="container">
      <div className="dialog">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBmi}>
          <label>
            Weight (kg):
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label>
            Height (cm):
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <button type="submit">Calculate</button>
        </form>

        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
