import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import headerlogo from "../../assets/headerlogoNew.svg";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${
          menuOpen ? styles.showOverlay : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={styles.navbar} ref={menuRef}>
        {/* Logo */}
        <div className={styles.logo}>
          <img
            src={headerlogo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Menu */}
        <div
          className={`${styles.links} ${
            menuOpen ? styles.showMenu : ""
          }`}
        >
          {menuOpen && (
            <div className={styles.mobileHeader}>
              <img src={headerlogo} alt="logo" />

              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={() => setMenuOpen(false)}
              />
            </div>
          )}

          <p onClick={() => navigate("/")}>Home</p>

          <p onClick={() => navigate("/about-us")}>About Us</p>

          {/* Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <p>
              Therapy Services
              <FontAwesomeIcon icon={faChevronDown} />
            </p>

            {servicesOpen && (
              <div className={styles.dropdownMenu}>
          <p onClick={() => navigate("/services")}>
          services
          </p>
                <p onClick={() => navigate("/low-cost-counselling")}>
                low-cost-counselling
                </p>

                <p onClick={() => navigate("/Workshops")}>
                Workshops
                </p>
              </div>
            )}
          </div>
          <p onClick={() => navigate("/PartnershipsOutreach")}>
          Partnerships
          </p>

        

          <p onClick={() => navigate("/contact-us")}>
            Contact Us
          </p>
        </div>

        {/* CTA */}
        <div className={styles.contact}>
          <button
            className={styles.bookBtn}
            onClick={() => navigate("/contact-us")}
          >
            Book Free Consultation
          </button>
        </div>

        {/* Mobile Hamburger */}
        {!menuOpen && (
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;