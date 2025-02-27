import React from 'react';
import './Policies.module.scss'; 

const Policies = () => {
  const policies = [
    {
      title: "Confidentiality",
      description: "Your privacy is our top priority. All sessions and personal information are kept strictly confidential.",
      icon: "🤐", 
    },
    {
      title: "Cancellation Policy",
      description: "We understand life happens. Please cancel or reschedule at least 24 hours in advance to avoid fees.",
      icon: "⏰",
    },
    {
      title: "Payment Options",
      description: "We accept various payment methods, including insurance, credit cards, and flexible payment plans.",
      icon: "💳",
    },
    {
      title: "Code of Ethics",
      description: "Our therapists adhere to strict ethical guidelines to ensure the highest standard of care for our clients.",
      icon: "📜",
    },
  ];

  return (
    <section className="policies-section">
      <h2>Our Policies</h2>
      <div className="policies-container">
        {policies.map((policy, index) => (
          <div key={index} className="policy-card">
            <div className="policy-icon">{policy.icon}</div>
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Policies;