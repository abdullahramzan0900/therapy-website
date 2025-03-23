import styles from './ServiceSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faUserNurse, 
  faHeartbeat, 
  faUserMd, 
  faHandsHelping, 
  faWheelchair, 
  faUser, 
  faLaptop, 
  faUsers, 
  faChild, 
  faBrain, 
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';

const iconMapping: { [key: string]: any } = {
  faStethoscope,
  faUserNurse,
  faHeartbeat,
  faUserMd,
  faHandsHelping,
  faWheelchair,
  faUser,
  faLaptop,
  faUsers,
  faChild,
  faBrain,
  faComments
};

const ServicesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const { services } = data.components;
  const displayedServices = showAll ? services.services : services.services.slice(0, 2);

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesHeading}>{services.heading}</h2>
      <h3 className={styles.servicesSubHeading}>{services.subHeading}</h3>
      <div className={styles.servicesGrid}>
        {displayedServices.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FontAwesomeIcon icon={iconMapping[service.icon]} />
            </div>
            <div className={styles.innerServiceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
  
          <a href="/services" className={styles.ServicesMoreButton}>
            View Our Services
          </a>
      
      )}
    </section>
  );
};

export default ServicesSection;
