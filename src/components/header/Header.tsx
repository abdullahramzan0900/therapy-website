import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faBars, faTimes,faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import headerlogo from '../../assets/header-logo.svg'
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import data from '../../data/data.json'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const {header}=data.components
  const navigate=useNavigate()

  useEffect(() => {
    // Remove active class from all links
    document.querySelectorAll(`.${styles.links} p`).forEach((link) => {
      link.classList.remove(styles.activeLink);
    });

    // Find the matching path and add active class
    header.links.forEach((link, index) => {
      if (link.path === location.pathname) {
        document.querySelectorAll(`.${styles.links} p`)[index]?.classList.add(styles.activeLink);
      }
    });
  }, [location.pathname]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className={styles.header}>
      <div>
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {header.topbar.locationText}
            </span>
            <span>
            <FontAwesomeIcon icon={faEnvelope} /> {header.topbar.emailText}   
            </span>
          </div>
          <div className={styles.topbarRight}>
            <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} /> {header.topbar.whatsappText}
            </a>
          </div>
        </div>
      </div>

    </header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
        <img alt="logo" src={headerlogo} />
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        {header.links.map((link, index) => (
            <p key={index}  onClick={(()=>{
              navigate(link.path)
            })}  >
              {link.name}
            </p>
          ))}
        </div>
        <div className={styles.contact}>
          <a className="phone" href={`tel:${header.navbar.phone}`}>
          <FontAwesomeIcon icon={faPhone} /> <span>{header.navbar.phone}</span>
          </a>
          <div className={styles.appointmentBtnDiv}> 
            <button
              className={styles.appointmentBtn}

              onClick={(()=>{
                navigate('/contact-us')
              })}
            >
              Book an appointment
            </button>
          </div>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>
    </>
  );
};

export default Header;
