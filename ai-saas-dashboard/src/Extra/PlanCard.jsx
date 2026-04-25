const PlanCard = ({ plan }) => {
  return (
    <div>
      <h3>{plan.name}</h3>
      <p>₹{plan.price}/month</p>
      <button>Select</button>
    </div>
  );
};

export default PlanCard;