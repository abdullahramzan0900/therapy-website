import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import headerlogo from "../../assets/logo1.svg";
import data from "../../data/data.json";
import FloatingAppointmentButton from "../FloatingAppointmentButton/FloatingAppointmentButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null); // ✅ Added correct typing
  const { header } = data.components;

  useEffect(() => {
    document.querySelectorAll(`.${styles.links} p`).forEach((link) => {
      link.classList.remove(styles.activeLink);
    });

    header.links.forEach((link, index) => {
      if (link.path === location.pathname) {
        document.querySelectorAll(`.${styles.links} p`)[index]?.classList.add(styles.activeLink);
      }
    });
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // ✅ Added correct typing
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { // ✅ Fixed type error
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <span>
            <a href={header.topbar.LocationLink} target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faMapMarkerAlt} /> {header.topbar.locationText}
</a>
            </span>
            <span>
              <a href="mailto:info@ncptherapy.com?subject=Inquiry&body=Hello," rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} /> {header.topbar.emailText}
              </a>   
            </span>
          </div>
          <div className={styles.topbarRight}>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} /> {header.topbar.whatsappText}
            </a>
          </div>
        </div>
      </header>

      <nav className={styles.navbar} ref={menuRef}>
        <div className={styles.logo}>
          <img alt="logo" src={headerlogo} />
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
          {header.links.map((link, index) => (
            <p
              key={index}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
            >
              {link.name}
            </p>
          ))}
        </div>
        <div className={styles.contact}>
          <a className="phone" href={`tel:${header.navbar.phone}`}>
            <FontAwesomeIcon icon={faPhone} /> <span>{header.navbar.phone}</span>
          </a>
       
         <FloatingAppointmentButton/>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>
    </>
  );
};

export default Header;
