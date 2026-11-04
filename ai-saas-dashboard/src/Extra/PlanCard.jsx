
import React from "react";

function PlanCard({ plan: { name, price } }) {
  const formattedPrice = `₹${price}/month`;

  const handleSelect = () => {
    console.log(`${name} plan selected`);
  };

  return (
    <article className="plan-card">
      <h3>{name}</h3>

      <p>{formattedPrice}</p>

      <button type="button" onClick={handleSelect}>
        Select Plan
      </button>
    </article>
  );
}

export default PlanCard;
