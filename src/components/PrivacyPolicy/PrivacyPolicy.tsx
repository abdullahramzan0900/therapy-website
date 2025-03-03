
import styles from  './privacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.PrivacyPolicy}>
      <h2>Privacy Policy</h2>
      <p><strong>Last Updated:</strong> [Insert Date]</p>
      <p>Nova Counselling & Psychotherapy ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data in compliance with the UK GDPR and Data Protection Act 2018.</p>
      
      <h3>1. Information We Collect</h3>
      <p><strong>Personal Information:</strong> Name, email address, phone number, and other details provided through booking or contact forms.</p>
      <p><strong>Sensitive Information:</strong> Information related to mental health, disclosed voluntarily in therapy sessions (handled with strict confidentiality).</p>
      <p><strong>Technical Data:</strong> IP addresses, browser type, and cookies for website analytics.</p>
      
      <h3>2. How We Use Your Information</h3>
      <p>To provide counselling services and respond to inquiries.</p>
      <p>To process bookings and payments securely.</p>
      <p>To comply with legal obligations and maintain security.</p>
      
      <h3>3. How We Store and Protect Your Data</h3>
      <p>Data is stored securely using encrypted systems.</p>
      <p>We do not share your information with third parties without consent, except where legally required.</p>
      
      <h3>4. Your Rights Under GDPR</h3>
      <p>The right to access, update, or delete your personal data.</p>
      <p>The right to withdraw consent at any time.</p>
      <p>The right to request data portability.</p>
      
      <p>For privacy-related inquiries, contact us at <a href="mailto:info@ncptherapy.com">info@ncptherapy.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;