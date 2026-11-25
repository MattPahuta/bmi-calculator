import { useState } from "react";

import logo from "./assets/images/logo.svg";

import ResultMeaning from "./components/ResultMeaning";
import Tips from "./components/Tips";
import Limitations from "./components/Limitations";

// decorative accents

// import patternLineRight from "./assets/images/pattern-curved-line-right.svg";

import type { Unit } from "./types";

// type Unit = "metric" | "imperial";

function App() {
  const [selectedUnit] = useState<Unit>("metric");

  const isCalculated = false;

  return (
    <main className="min-h-screen py-8 px-6">
      {/* hero & form */}
      <section className="">
        <div className="max-w-6xl mx-auto">
          {/* intro, blue gradient bg */}
          <div className="">
            <img src={logo} alt="" />
            <h1 className="text-preset-2 lg:text-preset-1 text-blue-900">
              Body Mass Index Calculator
            </h1>
            <p className="">
              Better understand your weight in relation to your height
              using our body mass index (BMI) calculator. While BMI is
              not the sole determinant of a healthy weight, it offers
              a valuable starting point to evaluate your overall
              health and well-being.
            </p>
          </div>
          {/* form & result wrapper - white bg, rounded */}
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
                  />
                  <label htmlFor="metric">Metric</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="units"
                    id="imperial"
                    value="imperial"
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
                      <label
                        htmlFor="imperialFeet"
                        className="sr-only">
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
                      <label
                        htmlFor="imperialInches"
                        className="sr-only">
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
            <div className="">
              {/* empty state */}
              {!isCalculated && (
                <>
                  <h3 className="">Welcome!</h3>
                  <p className="">
                    Enter your height and weight and you'll see your
                    BMI result here
                  </p>
                </>
              )}
              {/* calculated state */}
              {isCalculated && (
                <>
                  <h3 className="">Your BMI is...</h3>
                  <output className="">22.0</output>
                  <p className="">
                    Your BMI suggests you're a healthy weight. Your
                    ideal weight is between{" "}
                    <strong>132lbs and 178lbs</strong>.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* what your BMI result means section */}
      <ResultMeaning />
      {/* BMI tips section */}
      <Tips />
      {/* limitations of BMI section */}
      <Limitations />
    </main>
  );
}

export default App;
