import type { BmiInfo, Classification } from "../types";

interface BmiResultProps {
  result: BmiInfo | null;
}

const bmiStatement: Record<Classification, string> = {
  underweight: "you are underweight",
  healthy: "you're a healthy weight",
  overweight: "you are overweight",
  obese: "you are obese"
}

function BmiResult({ result }: BmiResultProps) {
  return (
    <div className="">
      {!result ? (
        <>
          <h3 className="">Welcome!</h3>
          <p className="">
            Enter your height and weight and you'll see your BMI
            result here
          </p>
        </>
      ) : (
        <>
          <h3 className="">Your BMI is...</h3>
          <output className="">{result.bmi.toFixed(1)}</output>
          <p className="">
            Your BMI suggests {bmiStatement[result.classification]}. Your
            ideal weight is between{" "}
            <strong>{result.range.min}lbs</strong> and{" "}
            <strong>{result.range.max}lbs</strong>.
          </p>
        </>
      )}
    </div>
  );
}

export default BmiResult;
