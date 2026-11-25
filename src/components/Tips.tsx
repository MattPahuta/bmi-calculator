import { tips } from "../data/tips";
import TipCard from "./TipCard";

function Tips() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <ul className="">
          {tips.map(({ icon, title, description }) => (
            <TipCard key={title} icon={icon} title={title} description={description} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tips;