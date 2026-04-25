import PlanCard from "./PlanCard";

const plans = [
  { name: "Free", price: 0 },
  { name: "Pro", price: 499 },
  { name: "Enterprise", price: 1999 },
];

const PricingPlans = () => {
  return (
    <div>
      {plans.map((plan, i) => (
        <PlanCard key={i} plan={plan} />
      ))}
    </div>
  );
};

export default PricingPlans;