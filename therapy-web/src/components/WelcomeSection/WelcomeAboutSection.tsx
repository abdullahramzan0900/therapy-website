import React from "react";
import styles from "./WelcomeAboutSection.module.scss";
import trauma from '../../assets/trauma.jpeg'

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcomeContainer}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Welcome to <span>Nura Counselling and Psychotherapy</span>
        </h1>

        {/* Trauma Informed Badge */}
        <div className={styles.badge}>
          <img src={trauma} alt="Trauma-informed Practice" />
          <span>Trauma-informed Practice</span>
        </div>

        {/* About Content */}
        <div className={styles.aboutText}>
          <p>
            At Nura Counselling and Psychotherapy, we provide compassionate,
            professional therapy that is accessible, culturally sensitive, and
            grounded in understanding.
          </p>

          <p>
            As a trauma-informed practice, we recognise that many emotional
            challenges are shaped by past experiences. Our approach prioritises
            safety, trust, and collaboration, allowing each client to move at
            their own pace without judgement or pressure.
          </p>

          <p>
            We offer a confidential and supportive space to explore anxiety,
            depression, bereavement, stress, and self-esteem, with a focus on
            helping you feel heard, understood, and empowered.
          </p>

          <p className={styles.highlight}>
            With affordable pricing and low-cost counselling options, we are
            committed to making meaningful mental health support available to
            those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;