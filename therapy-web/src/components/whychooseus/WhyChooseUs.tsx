import React from "react";
import styles from "./WhyChooseUs.module.scss";
import { FaUserTie, FaShieldAlt, FaHeart, FaUsers } from "react-icons/fa";
import buttonstyles from '../../components/styles/button.module.scss'
import image3 from '../../assets/image3.jpeg'
import smallImage from '../../assets/aboutus.jpg'
import { useNavigate } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.content}>
        {/* Left Section - Large Image */}
        <div className={styles.leftSection}>
          <div className={styles.largeImage}>
            <img src={image3} alt="Consultation" />
            <div className={styles.smallImage}>
              <img src={smallImage} alt="Small Consultation" />
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
            <button onClick={()=>{
            navigate('/contact-us')
            }} className={buttonstyles.primary}>Contact Us</button>
          </div>
     
        </div>
        
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
