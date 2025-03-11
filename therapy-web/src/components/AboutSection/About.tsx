import styles from './About.module.scss';
import image1 from '/assets/familytherapy.jpg';
import data from '../../data/data.json'

const AboutSection = () => {
  const {aboutUs}=data.components;
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img src={image1} alt="" className={styles.mainImage} />
          <div className={styles.checkupTag}>
          <p>{aboutUs.stats.tagline}</p>
        </div>
        <div className={styles.badge}>
          <p><strong>{aboutUs.stats.patientsCount}</strong></p>
        </div>
      </div>
      <div className={styles.textContainer}>
          <h2>{aboutUs.title}</h2>
          <p>{aboutUs.whoweare}</p>
          <h4>{aboutUs.missionTitle}</h4>
          <ul>
            {aboutUs.missionValues.map((value) => (
              <>
                <strong> {value.title}</strong> – {value.description}
              </>
            ))}
          </ul>
        </div>
      </section>


    </>
  );
};

export default AboutSection;
