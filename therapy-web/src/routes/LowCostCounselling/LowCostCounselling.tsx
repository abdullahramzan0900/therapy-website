import React from 'react';
import styles from './LowCostCounselling.module.scss';
import { FaCheckCircle, FaUserCheck, FaComments, FaLaptopHouse, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LowCostCounselling: React.FC = () => {
  return (
    <section
      className={styles.lowCostWrapper}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1>
            Affordable Therapy at <span>Nura Counselling</span>
          </h1>
          <p className={styles.intro}>
            At Nura, we make mental wellness accessible. Our low-cost counselling provides confidential and compassionate care tailored to your needs—without financial barriers.
          </p>

          <div className={styles.card}>
            <h2>What is Low-Cost Counselling?</h2>
            <p>
              Sessions are conducted by advanced trainee therapists under expert clinical supervision. This ensures quality care that is safe, supportive, and confidential.
            </p>
            <Link to="/contact-us " className={styles.button}>Apply for Support</Link>
          </div>

          <div className={styles.card}>
            <h2>Who Can Benefit?</h2>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Individuals with limited income</li>
              <li><FaCheckCircle /> Students and young adults</li>
              <li><FaCheckCircle /> Those in financial difficulty</li>
              <li><FaCheckCircle /> Anyone seeking affordable mental health care</li>
            </ul>
          </div>

          <div className={styles.gridBlock}>
            <h2>What to Expect</h2>
            <div className={styles.featuresGrid}>
              <div>
                <FaUserCheck className={styles.icon} />
                <h4>Qualified Trainees</h4>
                <p>Sessions led by skilled trainees under supervision.</p>
              </div>
              <div>
                <FaComments className={styles.icon} />
                <h4>Confidential Space</h4>
                <p>Your sessions are private, judgment-free, and secure.</p>
              </div>
              <div>
                <FaLaptopHouse className={styles.icon} />
                <h4>Virtual Convenience</h4>
                <p>Therapy from the comfort of your own space.</p>
              </div>
              <div>
                <FaHandshake className={styles.icon} />
                <h4>Personalised Support</h4>
                <p>Care that fits your emotional needs and life journey.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Pricing</h2>
            <p>
              Sessions range between <strong>£15 to £25</strong>. Fees are income-based—ensuring no one is turned away due to cost.
            </p>
          </div>

          <div className={styles.card}>
            <h2>How to Begin</h2>
            <ol className={styles.stepList}>
              <li>Complete our simple enquiry form</li>
              <li>We’ll reach out to understand your needs</li>
              <li>Start your sessions with a matched therapist</li>
            </ol>
            <Link to="/contact-us" className={styles.button}>Start Now</Link>
          </div>

          <div className={styles.card}>
            <h2>Why Nura?</h2>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Respectful, inclusive care</li>
              <li><FaCheckCircle /> Affordable mental health support</li>
              <li><FaCheckCircle /> Safe and nurturing sessions</li>
              <li><FaCheckCircle /> Culturally sensitive practitioners</li>
              <li><FaCheckCircle /> Flexible online appointments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowCostCounselling;
