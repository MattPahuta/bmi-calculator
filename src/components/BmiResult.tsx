
// Recieve one prop
// - result data or null
// null means show 'welcom' state
// result data shows the result
// result object needs: BMI, classification, range of values
// propt type is result object type | null
/**
 * 22.0
 * Your BMI suggests you’re a healthy weight. 
 * Your ideal weight is between 132lbs - 178lbs.
 */
import type { BmiInfo } from "../types";

function BmiResult({ result }: { result: BmiInfo | null }) {
  // const isCalculated = false;
  console.log(result);
  return (
    <div className="">
      {/* empty state */}
      {!result&& (
        <>
          <h3 className="">Welcome!</h3>
          <p className="">
            Enter your height and weight and you'll see your BMI
            result here
          </p>
        </>
      )}
      {/* calculated state */}
      {result && (
        <>
          <h3 className="">Your BMI is...</h3>
          <output className="">{result.bmi.toFixed(1)}</output>
          <p className="">
            Your BMI suggests you're a {result.classification}. Your ideal
            weight is between <strong>{result.range.min}lbs</strong> and <strong>{result.range.max}lbs</strong>.
          </p>
        </>
      )}
    </div>
  );
}

export default BmiResult;