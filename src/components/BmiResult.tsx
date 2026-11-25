
// Recieve one prop
// - result data or null
// null means show 'welcom' state
// result data shows the result
// result object needs: BMI, classification, range of values
// propt type is result object type | null
/**
 * 22.0
 * Your BMI suggests you’re a healthy weight. 
 * Your ideal weight is between 9st 6lbs - 12st 10lbs.
 */

function BmiResult() {
  const isCalculated = false;

  return (
    <div className="">
      {/* empty state */}
      {!isCalculated && (
        <>
          <h3 className="">Welcome!</h3>
          <p className="">
            Enter your height and weight and you'll see your BMI
            result here
          </p>
        </>
      )}
      {/* calculated state */}
      {isCalculated && (
        <>
          <h3 className="">Your BMI is...</h3>
          <output className="">22.0</output>
          <p className="">
            Your BMI suggests you're a healthy weight. Your ideal
            weight is between <strong>132lbs and 178lbs</strong>.
          </p>
        </>
      )}
    </div>
  );
}

export default BmiResult;