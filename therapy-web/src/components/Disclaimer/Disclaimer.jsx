import React from 'react';
import styles from './Disclaimer.module.scss'; // Import specific SCSS file

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <h2>Disclaimer</h2>
      <p>Nova Counselling & Psychotherapy provides mental health support but does not offer emergency services. If you are in crisis or need urgent help, please contact:</p>
      <ul>
        <li>Samaritans (UK): 116 123</li>
        <li>NHS 111 or 999 in case of emergencies</li>
      </ul>
      <p>Our online therapy is not a substitute for medical diagnosis or treatment. Always consult a GP or specialist for medical concerns.</p>
    </div>
  );
};

export default Disclaimer;