import type { InfoItem } from '../types';

function LimitationCard({ icon, title, description }:InfoItem ) {
  return (
    <li className="">
      <img src={icon} alt="" className="" />
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
    </li>
  );
}

export default LimitationCard;