import React from 'react';
import styles from './LowCostCounselling.module.scss';
import { FaCheckCircle, FaMoneyBillWave, FaUserCheck, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CounsellingImage from '../../assets/appointment.png'; 

const LowCostCounselling: React.FC = () => {
  return (
    <section
      className={styles.lowCostWrapper}
      style={{ backgroundImage: `url(${CounsellingImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1>
            Low-Cost Counselling at <span>Nura Counselling and Psychotherapy</span>
          </h1>
          <p className={styles.intro}>
            At Nura, we believe everyone deserves access to mental health support, regardless of financial circumstances. Our low-cost counselling ensures professional therapy is accessible to all.
          </p>

          <div className={styles.card}>
            <h2>🧠 What is Low-Cost Counselling?</h2>
            <p>
              Delivered by trainee counsellors in their final stages of training, under strict clinical supervision. Safe, confidential, and supportive therapy at an affordable price.
            </p>
            <Link to="/contact" className={styles.button}>🡲 Apply for Low-Cost Counselling</Link>
          </div>

          <div className={styles.card}>
            <h2>👥 Who is it for?</h2>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Low-income individuals or those receiving benefits</li>
              <li><FaCheckCircle /> Students or young adults</li>
              <li><FaCheckCircle /> Those facing financial hardship</li>
              <li><FaCheckCircle /> Anyone who can’t afford private counselling rates</li>
            </ul>
            <Link to="/contact-us" className={styles.button}>🡲 Contact Us</Link>
          </div>

          <div className={styles.gridBlock}>
            <h2>📌 What to Expect</h2>
            <div className={styles.featuresGrid}>
              <div>
                <FaUserCheck className={styles.icon} />
                <h4>Professional Support</h4>
                <p>Delivered by trainee counsellors under professional supervision.</p>
              </div>
              <div>
                <FaComments className={styles.icon} />
                <h4>Safe & Confidential</h4>
                <p>Non-judgemental sessions in a secure and private setting.</p>
              </div>
              <div>
                <FaComments className={styles.icon} />
                <h4>Online Convenience</h4>
                <p>Access therapy from your home. No travel needed.</p>
              </div>
              <div>
                <FaComments className={styles.icon} />
                <h4>Tailored to You</h4>
                <p>Anxiety, depression, grief, transitions — we support it all.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2><FaMoneyBillWave /> How Much Does It Cost?</h2>
            <p>
              Sessions start from <strong>£X per session</strong>. Sliding scale available based on financial need.
              No one is turned away due to cost.
            </p>
          </div>

          <div className={styles.card}>
            <h2>📝 How to Apply</h2>
            <ol className={styles.stepList}>
              <li>Fill out our enquiry form</li>
              <li>We’ll contact you to discuss your needs</li>
              <li>Book your first session with a matched counsellor</li>
            </ol>
            <Link to="/contact" className={styles.button}>🡲 Apply Now</Link>
          </div>

          <div className={styles.card}>
            <h2>🌿 Why Choose Nura?</h2>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Affordable and accessible therapy</li>
              <li><FaCheckCircle /> Caring trainee counsellors under supervision</li>
              <li><FaCheckCircle /> Flexible online sessions</li>
              <li><FaCheckCircle /> Confidential and safe space</li>
              <li><FaCheckCircle /> Inclusive care for all backgrounds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowCostCounselling;
