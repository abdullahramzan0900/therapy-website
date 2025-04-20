import React from 'react';
import styles from './LowCostCounselling.module.scss'; // Import SCSS module
import buttonstyles from '../../components/styles/button.module.scss'; // Import button styles

const LowCostCounselling: React.FC = () => {
  return (
    <section className={styles.lowCostCounselling}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Low-Cost Counselling</h2>
        <p className={styles.sectionIntro}>
          We believe that financial difficulties should not be a barrier to mental health support.
        </p>

        <div className={styles.contentWrapper}>
          {/* What is Low-Cost Counselling? */}
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>💚</div>
            <h3 className={styles.infoTitle}>What is Low-Cost Counselling?</h3>
            <ul className={styles.infoList}>
              <li>Sessions provided by trainee counsellors under professional supervision.</li>
              <li>Reduced-cost therapy for those who need support but struggle with private fees.</li>
            </ul>
          </div>

          {/* Who Can Access It? */}
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>💚</div>
            <h3 className={styles.infoTitle}>Who Can Access It?</h3>
            <ul className={styles.infoList}>
              <li>Individuals on a low income or receiving benefits.</li>
              <li>Students and young adults.</li>
              <li>Anyone experiencing financial hardship.</li>
            </ul>
          </div>

          {/* How Much Does It Cost? */}
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>💚</div>
            <h3 className={styles.infoTitle}>How Much Does It Cost?</h3>
            <ul className={styles.infoList}>
              <li>First Consultation: Free / Discounted</li>
              <li>Ongoing Sessions: £X per session (Sliding scale available based on circumstances)</li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <a style={{
          textDecoration:'none'
        }} href="/low-cost-counselling" className={buttonstyles.primary}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default LowCostCounselling;