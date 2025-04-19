import React from "react";
import styles from "./About.module.scss";
import buttonstyles from '../../components/styles/button.module.scss'

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        {/* Left Side - Images and Reviews */}
        <div className={styles.left}>
          <div className={styles.reviewCard}>
            <p>⭐⭐⭐⭐⭐</p>
            <h4>Customer Review <strong>30,000</strong></h4>
            <div className={styles.avatars}>
              <img src="/avatars/avatar1.jpg" alt="User 1" />
              <img src="/avatars/avatar2.jpg" alt="User 2" />
              <img src="/avatars/avatar3.jpg" alt="User 3" />
              <img src="/avatars/avatar4.jpg" alt="User 4" />
              <div className={styles.more}>30K</div>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <img src="/images/therapy1.jpg" alt="Therapy Session 1" className={styles.largeImage} />
            <img src="/images/therapy2.jpg" alt="Therapy Session 2" className={styles.smallImage} />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.right}>
          <h5>ABOUT US</h5>
          <h2>About Nura Counselling</h2>
          <p>
            At Nura Counselling and Psychotherapy, we provide compassionate and professional 
            online therapy, ensuring that mental health support is accessible to everyone. 
            Our focus is on individual therapy, offering a safe, confidential space to help 
            clients navigate anxiety, depression, bereavement, stress, and self-esteem challenges. 
            With affordable pricing and low-cost counselling options, we are committed to making 
            quality therapy available to those who need it most.
          </p>

          <div className={styles.buttons}>
            <button className={buttonstyles.primary}>Read More</button>
            <button className={buttonstyles.secondary}>Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
