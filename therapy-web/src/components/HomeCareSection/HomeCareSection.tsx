  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import styles from "./HomeCareSection.module.scss";
  import data from "../../data/data.json";
  import { useNavigate } from "react-router-dom";

  const HomeCareSection = () => {
    const homeCareData = data.components.HomeCareData;
    const navigate = useNavigate();

    return (
      <>
        <ToastContainer />
        <section className={styles.homeCareMain}>
          <div className={styles.homeCareSection}>
            <div className={styles.content}>
              <div className={styles.badge}>
                Safe · Confidential · Accessible
              </div>

              <h1>
                {homeCareData.title.split(" ")[0]}{" "}
                <span>{homeCareData.titleHighlight}</span>
              </h1>
              <span className={styles.titleText}>{homeCareData.titleHighlight2}</span>
              <p>{homeCareData.description}</p>

              <div className={styles.trustRow}>
                <span>✓ Safe</span>
                <span>✓ Confidential</span>
                <span>✓ Accessible</span>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => navigate("contact-us")}
                  className={styles.consultationButton}
                >
                  Book Your Free 15-Minute Consultation
                </button>
                <button
                onClick={() => navigate("/services")}
                className={styles.exploreButton}>
                  Explore Our Services
                </button>
              </div>

              <div className={styles.features}>
                {[
                  { icon: "🧠", label: "Trauma-Informed" },
                  { icon: "🌍", label: "Culturally Sensitive" },
                  { icon: "💰", label: "Low-Cost Options" },
                  { icon: "💻", label: "Online Therapy" },
                  { icon: "🗣️", label: "English, Urdu & Punjabi" },
                ].map((f) => (
                  <div className={styles.featureItem} key={f.label}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.visuals}>
              <div className={styles.imageWrapper}>
                <img
                  src={homeCareData.imageSrc}
                  alt={homeCareData.imageAlt}
                  className={styles.mainImage}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default HomeCareSection;