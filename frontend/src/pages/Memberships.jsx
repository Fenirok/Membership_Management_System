import { useEffect, useState } from "react";
import axios from "axios";

const Memberships = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/memberships`);
      setPlans(response.data);
    };
    fetchPlans();
  }, []);

  // Handle payment for a selected membership plan
  const handlePayment = async (membershipId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payments/create-checkout-session`,
        { membershipId }
      );
      window.location.href = response.data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div>
      <h2>Membership Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan._id}>
            <h3>{plan.name} - ${plan.price}</h3>
            <p>{plan.duration} months</p>
            <ul>
              {plan.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            {/* Updated Subscribe Button with handlePayment function */}
            <button onClick={() => handlePayment(plan._id)}>Subscribe</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memberships;
