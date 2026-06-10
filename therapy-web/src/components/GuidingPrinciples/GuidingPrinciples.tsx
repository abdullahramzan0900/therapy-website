import React from "react";
import styles from "./GuidingPrinciples.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const steps = [
  {
    num: "01",
    icon: "ti-calendar",
    title: "Book a Free Consultation",
    desc: "A relaxed 15-minute call to explore your needs and answer any questions.",
  },
  {
    num: "02",
    icon: "ti-message-circle",
    title: "Initial Assessment",
    desc: "We'll discuss what's bringing you to therapy and how support can be tailored to you.",
  },
  {
    num: "03",
    icon: "ti-heart",
    title: "Ongoing Sessions",
    desc: "A safe, confidential space to explore emotions, experiences, and healing at your own pace.",
  },
  {
    num: "04",
    icon: "ti-leaf",
    title: "Continued Support",
    desc: "Therapy that supports long-term emotional wellbeing and personal growth.",
  },
];

const GuidingPrinciples: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/contact-us") return null;

  return (
    <section className={styles.therapyProcess}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Therapy Process</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div className={styles.step} key={step.num}>
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepIcon}>
                <i className={`ti ${step.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.stepContent}>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={styles.startButton}
            onClick={() => navigate("/contact-us")}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;