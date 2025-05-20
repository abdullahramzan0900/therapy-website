// pages/TherapySupport/TherapySupport.tsx

import styles from './TherapySupport.module.scss';
import services from '../../assets/services.jpg';

const TherapySupport = () => {
  return (
    <section className={styles.therapySection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1>Services – Nura Counselling and Psychotherapy</h1>
          <p>
            At <strong>Nura Counselling and Psychotherapy</strong>, we offer individual therapy tailored to support you through life’s challenges.
            Our services are designed to provide a <strong>safe</strong>, <strong>confidential</strong>, and <strong>non-judgemental</strong> space 
            where you can explore your thoughts and emotions, develop coping strategies, and work towards improved well-being.
          </p>
          {/* <Link to="/services" className={styles.servicesBtn}>View Therapy Services</Link> */}
        </div>
        <div className={styles.imageContent}>
          <img src={services} alt="Therapy Support" />
        </div>
      </div>
    </section>
  );
};

export default TherapySupport;
