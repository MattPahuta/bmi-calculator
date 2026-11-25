import type { CardType } from '../types';

function LimitationCard({ icon, title, description }:CardType ) {
  return (
    <li className="">
      <img src={icon} alt="" className="" />
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
    </li>
  );
}

export default LimitationCard;