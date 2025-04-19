import React from "react";
import styles from "./GuidingPrinciples.module.scss";
import buttonstyles from '../../components/styles/button.module.scss'

const GuidingPrinciples: React.FC = () => {
  return (
    <section className={styles.therapyProcess}>
      <div className={styles.container}>
        {/* Heading Section */}
        <div className={styles.heading}>
          <span>● HOW IT WORK</span>
          <h2>Guiding You Our Therapy Process</h2>
        </div>

        {/* Steps Section */}
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.step1}`}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h4>O1. Book Appointment</h4>
              <p>Scheduling appointment with us is simple and</p>
            </div>
          </div>

          {/* <div className={styles.dashedLine}></div> */}

          <div className={`${styles.step} ${styles.step2}`}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h4>O2. Initial Consultation</h4>
              <p>Scheduling appointment with us is simple and</p>
            </div>
          </div>

          {/* <div className={styles.dashedLine}></div> */}

          <div className={`${styles.step} ${styles.step3}`}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h4>O3. Progress Check-Ins</h4>
              <p>Scheduling appointment with us is simple and</p>
            </div>
          </div>
{/* 
          <div className={styles.dashedLine}></div> */}

          <div className={`${styles.step} ${styles.step4}`}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h4>O4. Ongoing Support</h4>
              <p>Scheduling appointment with us is simple and</p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className={styles.buttonWrapper}>
          <button className={buttonstyles.primary }>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
