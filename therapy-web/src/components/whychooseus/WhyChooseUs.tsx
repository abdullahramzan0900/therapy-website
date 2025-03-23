import styles from "./WhyChooseUs.module.scss";
import { FaUserMd, FaDollarSign, FaLock, FaComments } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaUserMd />, title: "Professional & Compassionate", desc: "Offering personalized support." },
    { icon: <FaDollarSign />, title: "Affordable & Flexible", desc: "Making therapy accessible to everyone." },
    { icon: <FaLock />, title: "Online & Confidential", desc: "Speak with a therapist from home." },
    { icon: <FaComments />, title: "Free Consultation", desc: "Get started with a free 15-minute consultation." }
  ];

  return (
    <section className={styles.whyChooseUs}>
      {/* Circular Main Heading */}
      <div className={styles.circleContainer}>
        <h2>WHY<br />CHOOSE<br />US?</h2>
        <div className={styles.fadedCircle}></div>
      </div>

      {/* Right Side List */}
      <div className={styles.reasonsList}>
        {reasons.map((item, index) => (
          <div key={index} className={styles.reason}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
