import styles from "./WhatWeOffer.module.scss";
import { FaUser, FaHandHoldingHeart, FaBrain, FaHeart, FaLeaf, FaLifeRing } from "react-icons/fa";


const WhatWeOffer = () => {
  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What We Offer</h2>
        <p className={styles.description}>
          At Nura Counselling and Psychotherapy, we specialise in individual therapy, helping people navigate a variety of personal challenges. 
          Our services are tailored to meet each client's unique needs.
        </p>

        <div className={styles.grid}>
          {/* Individual Therapy */}
          <div className={styles.card}>
            <div className={styles.icon}><FaUser /></div>
            <h4>Individual Therapy</h4>
            <p>One-to-one therapy for individuals struggling with personal challenges.</p>
            <ul className={styles.list}>
              <li><FaBrain /> Anxiety & Stress – Learn how to manage overwhelming thoughts and emotions.</li>
              <li><FaHeart /> Depression & Low Mood – Find ways to regain motivation and emotional balance.</li>
              <li><FaLeaf /> Self-Esteem & Confidence Issues – Develop a healthier self-image and self-worth.</li>
              <li><FaLifeRing /> Bereavement & Loss – Process grief and adjust to life after a loss.</li>
              <li><FaUser /> Life Transitions & Challenges – Navigate changes in career, relationships, or personal growth.</li>
            </ul>
            <a style={{
              marginTop:'10px',
            }} href="/services" className={styles.link}>Learn More About Our Services</a>
          </div>

          {/* Low-Cost Counselling */}
          <div className={styles.card}>
            <div className={styles.icon}><FaHandHoldingHeart /></div>
            <h4>Low-Cost Counselling</h4>
            <p>Affordable therapy options with trainee counsellors for individuals facing financial difficulties.</p>
            <ul className={styles.list}>
              <li><FaUser /> Individuals on a low income or receiving benefits.</li>
              <li><FaUser /> Students and young adults seeking mental health support.</li>
              <li><FaUser /> Those experiencing financial hardship who need affordable therapy options.</li>
            </ul>
            <a href="/low-cost-counselling" className={styles.link}>Learn More About Low-Cost Counselling →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
