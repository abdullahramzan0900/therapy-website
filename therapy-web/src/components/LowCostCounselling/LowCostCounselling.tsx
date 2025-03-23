import React from "react";
import styles from "./LowCostCounselling.module.scss";
import { FaUserGraduate, FaWallet, FaHandHoldingHeart } from "react-icons/fa";

const LowCostCounselling: React.FC = () => {
  return (
    <div className={styles.lowCostCounselling}>
      <h2>Low-Cost Counselling</h2>
      <p>We believe that financial difficulties should not be a barrier to mental health support.</p>

      <div className={styles.content}>
        <div className={styles.highlight}>What is Low-Cost Counselling?</div>
        <div className={styles.infoCard}>
          <div className={styles.icon}><FaHandHoldingHeart /></div>
          <div className={styles.text}>
            <h3>Affordable Therapy</h3>
            <p>Sessions provided by trainee counsellors under professional supervision.</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.icon}><FaWallet /></div>
          <div className={styles.text}>
            <h3>Budget-Friendly</h3>
            <p>Reduced-cost therapy for those who need support but struggle with private fees.</p>
          </div>
        </div>

        <div className={styles.highlight}>Who Can Access It?</div>
        <div className={styles.infoCard}>
          <div className={styles.icon}><FaUserGraduate /></div>
          <div className={styles.text}>
            <h3>Students & Low Income Individuals</h3>
            <p>Available for students, young adults, and those facing financial hardship.</p>
          </div>
        </div>

        <div className={styles.highlight}>How Much Does It Cost?</div>
        <div className={styles.infoCard}>
          <div className={styles.icon}><FaWallet /></div>
          <div className={styles.text}>
            <h3>Flexible Pricing</h3>
            <p><strong>First Consultation:</strong> Free / Discounted</p>
            <p><strong>Ongoing Sessions:</strong> £X per session (Sliding scale available based on circumstances)</p>
          </div>
        </div>
      </div>

      <a href="/low-cost-counselling" className={styles.button}>
        Learn More About Low-Cost Counselling
      </a>
    </div>
  );
};

export default LowCostCounselling;
