// import patternLineLeft from "../assets/images/pattern-curved-line-left.svg"
import manEatingImg from "../assets/images/image-man-eating.webp";
import Tips from "./Tips";

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
        <Tips />
      </div>
    </section>
  );
}

export default ResultMeaning;
