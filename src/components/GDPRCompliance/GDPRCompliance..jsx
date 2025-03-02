import React from 'react';
import styles from './GDPRCompliance.module.scss'; // Import specific SCSS file

const GDPRCompliance = () => {
  return (
    <div className={styles.gdprcompliance}>
      <h2>GDPR Compliance Statement</h2>
      <p>We are committed to protecting your personal data under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.</p>
      
      <h3>1. What Data We Collect</h3>
      <p><strong>Personal Information:</strong> Name, email, phone number, booking details.</p>
      <p><strong>Sensitive Data:</strong> Information related to therapy, handled with strict confidentiality.</p>
      <p><strong>Website Usage Data:</strong> Via cookies, analytics tools.</p>
      
      <h3>2. Lawful Basis for Processing Data</h3>
      <p>We collect data based on:</p>
      <ul>
        <li>Consent (when you book a session or accept cookies).</li>
        <li>Contractual Necessity (to provide therapy services).</li>
        <li>Legal Obligations (for record-keeping and safeguarding policies).</li>
      </ul>
      
      <h3>3. Your Rights Under GDPR</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Access your data and request a copy.</li>
        <li>Rectify inaccurate information.</li>
        <li>Request erasure ("Right to be Forgotten").</li>
        <li>Restrict processing under certain conditions.</li>
        <li>Withdraw consent at any time.</li>
        <li>Lodge a complaint with the UK Information Commissioner’s Office (ICO) if you believe your data is misused.</li>
      </ul>
      
      <h3>4. How We Store & Protect Data</h3>
      <p>Data is stored securely using encrypted systems.</p>
      <p>We do not share personal data with third parties unless legally required.</p>
      <p>Data is retained only for as long as necessary to provide services and meet legal obligations.</p>
      
      <h3>5. Contact for Data Requests</h3>
      <p>If you have any GDPR-related questions or want to exercise your rights, contact our Data Protection Officer at <a href="mailto:info@ncptherapy.com">info@ncptherapy.com</a>.</p>
    </div>
  );
};

export default GDPRCompliance;