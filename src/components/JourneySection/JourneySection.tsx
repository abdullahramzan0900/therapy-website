
import styles from './JourneySection.module.scss';
import group from '../../assets/group.jpg'
import Healthcareprofessionals from '../../assets/Healthcareprofessionals.jpg'

const JourneySection = () => {
  return (
    <section className={styles.journeySection}>
{/*    
      <div className={styles.peopleContainer}>
        <img src={group} alt="Healthcare professionals" /> 
      </div> */}


      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>Start Your Journey With Us Now</h2>
          <a href='/contact-us' className={styles.ctaButton}>Start Now</a>
        </div>

        <div className={styles.imageContainer}>
          <img src={group} alt="group" /> 
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
