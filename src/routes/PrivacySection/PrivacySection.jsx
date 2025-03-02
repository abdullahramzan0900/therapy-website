import styles from './PrivacySection.module.scss';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from '../../components/TermsAndConditions/TermsAndConditions'
import Disclaimer from '../../components/Disclaimer/Disclaimer'
import GDPRCompliance from '../../components/GDPRCompliance/GDPRCompliance.'
import CookiesPolicy from '../../components/CookiesPolicy/CookiesPolicy'





const PrivacySection = () => {
  
  return (
    <div className={styles.mainSection}>

    <section className={styles.PrivacySection}>
       <PrivacyPolicy />
      <TermsAndConditions />
      <Disclaimer />
      <CookiesPolicy />
      <GDPRCompliance />

    </section>
    </div>
  );
};

export default PrivacySection;
