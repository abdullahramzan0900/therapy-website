
import styles from "./LowCostCounselling.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptop, FaClock, FaPoundSign, FaComments } from "react-icons/fa";

const LowCostCounselling: React.FC = () => {
  return (
    <div className={styles.lowCostContainer}>
      <div className={styles.heroSection}>
        <h1>Low-Cost Counselling</h1>
        <p>
          We understand that therapy can be a financial commitment, and we want
          to ensure that everyone has access to mental health support,
          regardless of their circumstances.
        </p>
      </div>
      <div className={styles.infoSection}>
        <p>
          Our low-cost counselling service is available for individuals who may
          find private therapy unaffordable. These sessions are provided by
          trainee counsellors under professional supervision and are ideal for
          those looking for support at a reduced cost.
        </p>
        <a href="/low-cost-counselling" className={styles.learnMoreBtn}>
          Learn More About Low-Cost Counselling <FaArrowRight />
        </a>
      </div>
      <div className={styles.sessionSection}>
        <h2>How Our Sessions Work</h2>
        <div className={styles.sessionItem}>
          <FaLaptop className={styles.icon} />
          <h3>Online Therapy Sessions</h3>
          <p>
            All our sessions are conducted online, allowing you to access
            support from the comfort and privacy of your own home. This means
            no travel time, flexible scheduling, and a more comfortable
            environment for you to open up.
          </p>
        </div>
        <div className={styles.sessionItem}>
          <FaClock className={styles.icon} />
          <h3>Session Length & Frequency</h3>
          <p>
            • Sessions typically last 50 minutes.<br />• Weekly or fortnightly
            sessions are available, depending on your needs.
          </p>
        </div>
        <div className={styles.sessionItem}>
          <FaPoundSign className={styles.icon} />
          <h3>Costs & Pricing</h3>
          <p>
            We offer affordable standard pricing as well as low-cost therapy
            options for those who need financial support.
          </p>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <h2>Take the First Step Towards Your Well-Being</h2>
        <p>
          If you’re feeling overwhelmed, anxious, or stuck, you don’t have to
          go through it alone. Therapy can help you gain clarity, develop
          coping strategies, and build emotional resilience.
        </p>
        <a href="/book-consultation" className={styles.ctaBtn}>
          Book a Free Consultation <FaArrowRight />
        </a>
        <a href="/contact" className={styles.ctaBtn}>
          Contact Us for More Information <FaComments />
        </a>
      </div>
    </div>
  );
};

export default LowCostCounselling;
