import { tips } from "../data/tips";
import TipCard from "./TipCard";

function Tips() {
  return (
    <div className="">
      <ul className="">
        {tips.map((tip) => (
          <TipCard key={tip.title} {...tip} />
        ))}
      </ul>
    </div>
  );
}

export default Tips;
