import React from "react";
import PlanCard from "./PlanCard";

const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: 0,
    description: "Perfect for beginners and personal use.",
  },
  {
    id: 2,
    name: "Pro",
    price: 499,
    description: "Best for freelancers and small businesses.",
  },
  {
    id: 3,
    name: "Enterprise",
    price: 1999,
    description: "Advanced features for large organizations.",
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <div className="pricing-header">
          <h2>Choose Your Pricing Plan</h2>
          <p>
            Select a pricing package that matches your business needs.
            Upgrade or downgrade anytime without hassle.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;