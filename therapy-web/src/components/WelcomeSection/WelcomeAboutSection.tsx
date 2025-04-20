import React from "react";
import styles from "./WelcomeAboutSection.module.scss";
import { FaHeart, FaComments, FaUsers } from "react-icons/fa";

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcomeContainer}>
      <div className={styles.overlay}></div>

      <div className={styles.content}> 
        <h1>Welcome to <span>Nura Counselling and Psychotherapy</span></h1>
        <p>
          At Nura Counselling and Psychotherapy, we believe that mental health
          support should be accessible to everyone. Life can be challenging, and
          whether you are struggling with anxiety, depression, bereavement, or
          self-confidence issues, you don’t have to face it alone.
        </p>
        <p>
          We provide compassionate, professional online therapy for individuals,
          ensuring a <strong>safe, confidential</strong> space where you can explore your thoughts,
          emotions, and experiences.
        </p>
        <p className={styles.highlight}>
          Our focus is on <strong>affordable therapy</strong>, offering both standard counselling
          and a low-cost counselling service to make professional support available
          to those who need it most. 
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <FaHeart className={styles.icon} />
            <h3>Compassionate Care</h3>
          </div>
          <div className={styles.feature}>
            <FaComments className={styles.icon} />
            <h3>Confidential Support</h3>
          </div>
          <div className={styles.feature}>
            <FaUsers className={styles.icon} />
            <h3>Affordable Therapy</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
