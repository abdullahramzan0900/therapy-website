import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import headerlogo from "../../assets/headerlogoNew.svg";
import data from "../../data/data.json";
import FloatingAppointmentButton from "../FloatingAppointmentButton/FloatingAppointmentButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { header } = data.components;

  useEffect(() => {
    document.querySelectorAll(`.${styles.links} p`).forEach((link) => {
      link.classList.remove(styles.activeLink);
    });

    header.links.forEach((link, index) => {
      if (link.path === location.pathname) {
        document
          .querySelectorAll(`.${styles.links} p`)
          [index]?.classList.add(styles.activeLink);
      }
    });
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
              <a
                href={header.topbar.LocationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {header.topbar.locationText}
              </a>
            </span>
            <span>
              <a
                href="mailto:info@ncptherapy.com?subject=Inquiry&body=Hello,"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} /> {header.topbar.emailText}
              </a>
            </span>
          </div>
          <div className={styles.topbarRight}>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />{" "}
              {header.topbar.whatsappText}
            </a>
          </div>
        </div>
      </header>

      <div
        className={`${styles.menuOverlay} ${
          menuOpen ? styles.showOverlay : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={styles.navbar} ref={menuRef}>
        <div className={styles.logo}>
          <img
            alt="logo"
            src={headerlogo}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div
          className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}
        >
          {/* Close icon inside sidebar */}
          {menuOpen && (
            <>
            
            <div style={{
              display:'flex',
              justifyContent:'space-between'
            }}>
  
            <div className={styles.logo}>
            <img
              alt="logo"
              src={headerlogo}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
            <FontAwesomeIcon
              onClick={toggleMenu}
              className={styles.closeIcon}
              icon={faTimes}
            />
            </div>
            </>
        )}
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
          <a className={styles.phone} href={`tel:${header.navbar.phone}`}>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <span>{header.navbar.phone}</span>
          </a>

          <FloatingAppointmentButton />
        </div>

        {/* Hamburger icon - hidden when sidebar is open */}
        {!menuOpen && (

          <div>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
