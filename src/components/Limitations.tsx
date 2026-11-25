import { limitations } from "../data/limitations";
import LimitationCard from "./LimitationCard";

function Limitations() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <h2 className="">Limitations of BMI</h2>
          <p className="">
            Although BMI is often a practical indicator of healthy
            weight, it is not suited for every person. Specific groups
            should carefully consider their BMI outcomes, and in
            certain cases, the measurement may not be beneficial to
            use.
          </p>
        </div>
        {/* limitations list grid */}
        <ul className="">
          {limitations.map(({ icon, title, description }) => ( 
            <LimitationCard key={title} icon={icon} title={title} description={description} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Limitations;
