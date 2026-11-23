import { useState } from "react";

import logo from "./assets/images/logo.svg";
import manEatingImg from "./assets/images/image-man-eating.webp";
// tips icons
import eatingIcon from "./assets/images/icon-eating.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import sleepIcon from "./assets/images/icon-sleep.svg";
// limitations icons
import genderIcon from "./assets/images/icon-gender.svg";
import ageIcon from "./assets/images/icon-age.svg";
import muscleIcon from "./assets/images/icon-muscle.svg";
import pregnancyIcon from "./assets/images/icon-pregnancy.svg";
import raceIcon from "./assets/images/icon-race.svg";
// decorative accents
// import patternLineLeft from "./assets/images/pattern-curved-line-left.svg";
// import patternLineRight from "./assets/images/pattern-curved-line-right.svg";
type Unit = "metric" | "imperial";

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

      {/* about BMI results and Tips section */}
      <section className="">
        <div className="max-w-6xl mx-auto">
          <div className="">
            {/* decorative only image */}
            <img src={manEatingImg} alt="" />
            <div className="">
              <h2 className="">What your BMI result means</h2>
              <p className="">
                A BMI range of 18.5 to 24.9 is considered a 'healthy
                weight.' Maintaining a healthy weight may lower your
                chances of experiencing health issues later on, such
                as obesity and type 2 diabetes. Aim for a nutritious
                diet with reduced fat and sugar content, incorporating
                ample fruits and vegetables. Additionally, strive for
                regular physical activity, ideally about 30 minutes
                daily for five days a week.
              </p>
            </div>
          </div>
          {/* BMI tips list grid */}
          <ul className="">
            <li className="">
              <img src={eatingIcon} alt="" className="" />
              <h3 className="">Healthy eating</h3>
              <p className="">
                Healthy eating promotes weight control, disease
                prevention, better digestion, immunity, mental
                clarity, and mood.
              </p>
            </li>
            <li className="">
              <img src={exerciseIcon} alt="" className="" />
              <h3 className="">Regular exercise</h3>
              <p className="">
                Exercise improves fitness, aids weight control,
                elevates mood, and reduces disease risk, fostering
                wellness and longevity.
              </p>
            </li>
            <li className="">
              <img src={sleepIcon} alt="" className="" />
              <h3 className="">Adequate sleep</h3>
              <p className="">
                Sleep enhances mental clarity, emotional stability,
                and physical wellness, promoting overall restoration
                and rejuvenation.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* limitations of BMI section */}
      <section className="">
        <div className="max-w-6xl mx-auto">
          {/* limitations grid */}
          <div className="">
            <div className="">
              <h2 className="">Limitations of BMI</h2>
              <p className="">
                Although BMI is often a practical indicator of healthy
                weight, it is not suited for every person. Specific
                groups should carefully consider their BMI outcomes,
                and in certain cases, the measurement may not be
                beneficial to use.
              </p>
            </div>
            {/* limitations list grid */}
            <ul className="">
              <li className="">
                <img src={genderIcon} alt="" />
                <h3 className="">Gender</h3>
                <p className="">
                  The development and body fat composition of girls
                  and boys vary with age. Consequently, a child's age
                  and gender are considered when evaluating their BMI.
                </p>
              </li>
              <li className="">
                <img src={ageIcon} alt="" />
                <h3 className="">Age</h3>
                <p className="">
                  In aging individuals, increased body fat and muscle
                  loss may cause BMI to underestimate body fat
                  content.
                </p>
              </li>
              <li className="">
                <img src={muscleIcon} alt="" />
                <h3 className="">Muscle</h3>
                <p className="">
                  BMI may misclassify muscular individuals as
                  overweight or obese, as it doesn't differentiate
                  muscle from fat.
                </p>
              </li>
              <li className="">
                <img src={pregnancyIcon} alt="" />
                <h3 className="">Pregnancy</h3>
                <p className="">
                  Expectant mothers experience weight gain due to
                  their growing baby. Maintaining a healthy
                  pre-pregnancy BMI is advisable to minimize health
                  risks for both mother and child.
                </p>
              </li>
              <li className="">
                <img src={raceIcon} alt="" />
                <h3 className="">Race</h3>
                <p className="">
                  Certain health concerns may affect individuals of
                  some Black and Asian origins at lower BMIs than
                  others. To learn more, it is advised to discuss this
                  with your doctor.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
