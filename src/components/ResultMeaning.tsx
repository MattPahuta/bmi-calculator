
import { tips } from "../data/tips";

// tips icons
import eatingIcon from "./assets/images/icon-eating.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import sleepIcon from "./assets/images/icon-sleep.svg";

import manEatingImg from "./assets/images/image-man-eating.webp";


function ResultMeaning() {
  return (
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
              chances of experiencing health issues later on, such as
              obesity and type 2 diabetes. Aim for a nutritious diet
              with reduced fat and sugar content, incorporating ample
              fruits and vegetables. Additionally, strive for regular
              physical activity, ideally about 30 minutes daily for
              five days a week.
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
              prevention, better digestion, immunity, mental clarity,
              and mood.
            </p>
          </li>
          <li className="">
            <img src={exerciseIcon} alt="" className="" />
            <h3 className="">Regular exercise</h3>
            <p className="">
              Exercise improves fitness, aids weight control, elevates
              mood, and reduces disease risk, fostering wellness and
              longevity.
            </p>
          </li>
          <li className="">
            <img src={sleepIcon} alt="" className="" />
            <h3 className="">Adequate sleep</h3>
            <p className="">
              Sleep enhances mental clarity, emotional stability, and
              physical wellness, promoting overall restoration and
              rejuvenation.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ResultMeaning;
