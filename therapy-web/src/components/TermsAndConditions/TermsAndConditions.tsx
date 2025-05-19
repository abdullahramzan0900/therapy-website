
import styles from  './TermsAndConditions.module.scss';

const TermsAndConditions = () => {
  return (
    <div className={styles.TermsAndConditions}>
      <h2>Terms & Conditions</h2>
      <p><strong>Last Updated:</strong> 07/03/25</p>
      <p>By accessing Nura Counselling & Psychotherapy’s website, you agree to the following terms:</p>
      
      <h3>1. Use of Website</h3>
      <p>The content provided is for informational purposes only and does not constitute medical advice.</p>
      <p>You must be 18 years or older to use our services.</p>
      
      <h3>2. Online Counselling Sessions</h3>
      <p>Sessions are provided via secure online platforms (e.g., Zoom, Doxy.me).</p>
      <p>Payment must be made before the session via the agreed method.</p>
      <p>Cancellations require at least 24 hours' notice for a refund or reschedule.</p>
      
      <h3>3. Limitation of Liability</h3>
      <p>While we provide professional counselling services, we are not responsible for outcomes beyond reasonable control.</p>
      <p>We are not liable for disruptions caused by third-party platforms.</p>
      
      <h3>4. Amendments</h3>
      <p>We may update these Terms & Conditions at any time. Continued use of the site constitutes acceptance of these terms.</p>
    </div>
  );
};
export default TermsAndConditions;