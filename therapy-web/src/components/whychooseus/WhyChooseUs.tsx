import React from "react";
import styles from "./WhyChooseUs.module.scss";
import { FaUserTie, FaShieldAlt, FaHeart, FaUsers } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.content}>
        {/* Left Section - Large Image */}
        <div className={styles.leftSection}>
          <div className={styles.largeImage}>
            <img src="https://placehold.co/500x500" alt="Consultation" />
            <div className={styles.smallImage}>
              <img src="https://placehold.co/150x150" alt="Small Consultation" />
            </div>
          </div>
        </div>

        {/* Right Section - Text and Benefits */}
        <div className={styles.rightSection}>
          <h5>WHY CHOOSE US</h5>
          <h2>Trusted Care, Lasting Positive Change</h2>
          <p>
            With a commitment to compassionate, evidence-based care, we empower individuals to create
            lasting positive change in their lives. Our team of experienced therapists provides:
          </p>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <FaUserTie className={styles.icon} />
              <span>Experienced Professionals</span>
            </div>
            <div className={styles.benefit}>
              <FaShieldAlt className={styles.icon} />
              <span>Safe & Confidential Environment</span>
            </div>
            <div className={styles.benefit}>
              <FaHeart className={styles.icon} />
              <span>Client-Centered Approach</span>
            </div>
            <div className={styles.benefit}>
              <FaUsers className={styles.icon} />
              <span>Commitment to Growth</span>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
     
        </div>
        
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
