import React from "react";
import styles from "./WhyChooseUs.module.scss";
import { FaUserTie, FaShieldAlt, FaHeart, FaChartLine } from "react-icons/fa";
import { FaCoins, FaChalkboardUser, FaPeopleGroup, FaSchool, FaHandshake, FaLandmark, FaBuilding } from "react-icons/fa6";
import image3 from "../../assets/image3.jpeg";
import smallImage from "../../assets/aboutus.jpg";
import { useNavigate } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.whyChooseUs}>

      {/* ── TOP SECTION ── */}
      <div className={styles.topSection}>
        <div className={styles.topInner}>

          {/* Images */}
          <div className={styles.imageCol}>
            <img src={image3} alt="Therapy consultation" className={styles.largeImage} />
            <img src={smallImage} alt="Counselling session" className={styles.smallImage} />
          </div>

          {/* Middle text */}
          <div className={styles.midCol}>
            <p className={styles.label}>About NURA</p>
            <h2>Compassionate Care.<br />Lasting Positive Change.</h2>
            <p>
              At NURA, we believe everyone deserves access to quality mental health support.
              Our team of experienced therapists provides evidence-based, trauma-informed care
              in a safe, confidential and non-judgemental space.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}><FaUserTie /> Experienced &amp; Accredited Therapists</li>
              <li className={styles.benefit}><FaShieldAlt /> Safe, Confidential &amp; Non-Judgemental</li>
              <li className={styles.benefit}><FaHeart /> Client-Centred Approach</li>
              <li className={styles.benefit}><FaChartLine /> Commitment to Growth</li>
            </ul>
            <button className={styles.aboutBtn} onClick={() => navigate("/about-us")}>
              About Us
            </button>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <h4>We Also Offer</h4>
            <div className={styles.offerItem}>
              <div className={styles.offerIcon}><FaCoins /></div>
              <div className={styles.offerText}>
                <h5>Low-Cost Counselling</h5>
                <p>Accessible support for those who need it.</p>
              </div>
            </div>
            <div className={styles.offerItem}>
              <div className={styles.offerIcon}><FaChalkboardUser/></div>
              <div className={styles.offerText}>
                <h5>Workshops &amp; Training</h5>
                <p>For schools, workplaces and communities.</p>
              </div>
            </div>
            <div className={styles.offerItem}>
              <div className={styles.offerIcon}><FaPeopleGroup /></div>
              <div className={styles.offerText}>
                <h5>Community Support</h5>
                <p>Working together to create emotionally healthier communities.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── PARTNER BANNER ── */}
      <div className={styles.partnerSection}>
        <div className={styles.partnerInner}>
          <div className={styles.partnerLeft}>
            <h3>Partner With NURA</h3>
            <p>
              We work with schools, colleges, charities, councils and businesses to deliver
              tailored workshops and wellbeing programmes.
            </p>
            <button className={styles.partnerBtn} onClick={() => navigate("/contact-us")}>
              Enquire About Workshops &amp; Partnerships
            </button>
          </div>
          <div className={styles.partnerIcons}>
            {[
              { icon: <FaSchool />, label: "Schools & Colleges" },
              { icon: <FaHandshake />, label: "Charities & Community Organisations" },
              { icon: <FaLandmark />, label: "Councils & Public Sector" },
              { icon: <FaBuilding />, label: "Workplaces & Businesses" },
            ].map((item) => (
              <div className={styles.partnerIconItem} key={item.label}>
                <div className={styles.partnerIconCircle}>{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;