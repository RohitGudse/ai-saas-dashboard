
import React from "react";

const PlanCard = ({ plan }) => {
  const { name, price } = plan;

  return (
    <div className="plan-card">
      <div className="plan-card-header">
        <h3>{name}</h3>
        <span className="plan-price">
          ₹{Number(price).toLocaleString("en-IN")}
          <small> / month</small>
        </span>
      </div>

      <button
        className="plan-button"
        onClick={() => alert(`You selected ${name} plan!`)}
      >
        Get Started
        <span> →</span>
      </button>
    </div>
  );
};

export default PlanCard;
