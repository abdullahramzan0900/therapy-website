
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandshake, faEye } from '@fortawesome/free-solid-svg-icons'; 
import styles from './GoalsMissionVision.module.scss';

const GoalsMissionVision = () => {
  return (
    <section className={styles.gmvSection}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faBullseye} />
        </div>
        <h3>Our Goal</h3>
        <p>
        To provide affordable, accessible, and ethical therapy services to individuals from all backgrounds, ensuring mental well-being is a right, not a privilege.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHandshake} />
        </div>
        <h3>Our Mission</h3>
        <p>
        To create a safe and inclusive space where individuals can access professional counselling and psychotherapy. We are committed to offering low-cost, high-quality therapy while upholding ethical standards and cultural sensitivity.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEye} />
        </div>
        <h3>Our Vision</h3>
        <p>
        To become a leading provider of affordable mental health support in the UK, expanding our services to reach diverse communities and making therapy accessible, stigma-free, and transformative.
        </p>
      </div>
    </section>
  );
};

export default GoalsMissionVision;
