import styles from './Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/transparentLogo.svg'
const Footer = () => {
  const footerData = {
    companyName: "Nura counselling and Psychotherapy",
    tagline: "We're Here When You're Ready.",
    contacts: [
      { icon: faPhone, title: "Phone Number", value: "0798-4628-017" },
      { icon: faEnvelope, title: "Email Address", value: "info@ncptherapy.com" },
      { 
        icon: faMapMarkerAlt, 
        title: "Location", 
        value: "71–75 Shelton Street, WC2H 9JQ, London, United Kingdom" 
      }
    ],
    
    community: {
      heading: "Join Our Community",
      text: "Join Us Today for Resources, Insight & Connection"
    },
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact Us", path: "/contact" }
    ],
    socialLinks: [
      { icon: faInstagram, url: "#" },
      { icon: faLinkedinIn, url: "#" }
    ]
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <img src={logo} alt="image" />
            </div>
            {/* <h2 className={styles.companyName}>{footerData.companyName}</h2>
            <p className={styles.tagline}>{footerData.tagline}</p>
            
            <div className={styles.socialIcons}>
              {footerData.socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.icon.iconName}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Contact Information */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              {footerData.contacts.map((contact, index) => (
                <li key={index} className={styles.contactItem}>
                  <FontAwesomeIcon icon={contact.icon} className={styles.contactIcon} />
                  <div>
                    <h4>{contact.title}</h4>
                    <p>{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          {/* <div className={styles.communitySection}>
            <h3 className={styles.sectionTitle}>{footerData.community.heading}</h3>
            <p className={styles.communityText}>{footerData.community.text}</p>
            <button className={styles.joinButton}>Join Now</button>
          </div> */}

          {/* Navigation Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.navList}>
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className={styles.navLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightSection}>
          <p>Copyright © {new Date().getFullYear()} Nura Counselling and Psychotherapy. All Rights Reserved.</p>
          <a href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;