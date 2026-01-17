import React from "react";
import "./style.css";
import { FaSearch, FaCalendarAlt, FaTruck, FaMagic } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Find a Service",
    description:
      "Browse local laundry shops, compare prices and read customer reviews.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Book & Schedule",
    description:
      "Select your services and schedule a convenient pickup time.",
    icon: <FaCalendarAlt />,
  },
  {
    id: 3,
    title: "We Pick Up",
    description:
      "Sit back while we collect your laundry from your doorstep.",
    icon: <FaTruck />,
  },
  {
    id: 4,
    title: "Fresh & Clean",
    description:
      "Receive your clothes fresh, clean, and ready to wear.",
    icon: <FaMagic />,
  },
];

function Component8() {
  return (
    <section className="how-section">
      <h1>
        How <span>FreshFold</span> Works
      </h1>
      <p>
        Getting your laundry done has never been easier. Here's how it works.
      </p>

      <div className="steps">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-number">{step.id}</div>

            <div className="step-icon">{step.icon}</div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Component8;
