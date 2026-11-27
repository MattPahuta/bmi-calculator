import { useState } from "react";
import BmiResult from "./BmiResult";
import type { Unit, BmiInfo } from "../types";

function BmiCalculator() {
  const [selectedUnit, setSelectedUnit] = useState<Unit>("metric");

  const sampleBmiInfo: BmiInfo = {
    bmi: 22.0,
    classification: "healthy",
    range: {
      min: 132,
      max: 178,
    }
  }

  return (
    <div className="">
      <h2 id="formTitle" className="">
        Enter your details below
      </h2>
      <form aria-labelledby="formTitle" className="">
        <fieldset>
          <legend className="sr-only">
            Select metric or imperial units
          </legend>
          <div>
            <input
              type="radio"
              name="units"
              id="metric"
              value="metric"
              checked={selectedUnit === "metric"}
              onChange={() => setSelectedUnit("metric")}
            />
            <label htmlFor="metric">Metric</label>
          </div>
          <div>
            <input
              type="radio"
              name="units"
              id="imperial"
              value="imperial"
              checked={selectedUnit === "imperial"}
              onChange={() => setSelectedUnit("imperial")}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
        </fieldset>
        {/* metric units */}
        {selectedUnit === "metric" && (
          <div className="">
            <div className="">
              <label htmlFor="metricCm">Height</label>
              <input
                type="number"
                inputMode="decimal"
                step="0.25"
                id="metricCm"
              />
              <span className="">cm</span>
            </div>
            <div className="">
              <label htmlFor="metricKg">Weight</label>
              <input
                type="number"
                inputMode="decimal"
                step="any"
                id="metricKg"
              />
              <span className="">kg</span>
            </div>
          </div>
        )}
        {/* imperial units */}
        {selectedUnit === "imperial" && (
          <div className="">
            <fieldset className="">
              <legend>Height</legend>
              <div className="">
                <label htmlFor="imperialFeet" className="sr-only">
                  Feet
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  step="1"
                  id="imperialFeet"
                />
                <span className="">ft</span>
              </div>
              <div className="">
                <label htmlFor="imperialInches" className="sr-only">
                  Inches
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  step="0.25"
                  id="imperialInches"
                />
                <span className="">in</span>
              </div>
            </fieldset>
            <div className="">
              <label htmlFor="imperialLbs" className="">
                Weight
              </label>
              <input
                type="number"
                inputMode="decimal"
                step="0.1"
                id="imperialLbs"
              />
              <span className="">lbs</span>
            </div>
          </div>
        )}
      </form>
      {/* Result */}
      <BmiResult result={sampleBmiInfo} />
    </div>
  );
}

export default BmiCalculator;
