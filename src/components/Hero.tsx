import logo from "../assets/images/logo.svg";
import BmiCalculator from "./BmiCalculator";

function Hero() {
  return (
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
            not the sole determinant of a healthy weight, it offers a
            valuable starting point to evaluate your overall health
            and well-being.
          </p>
        </div>
        {/* form & result wrapper - white bg, rounded */}
        <BmiCalculator />
      </div>
    </section>
  );
}

export default Hero;
