import React from "react";
import styles from "./WelcomeAboutSection.module.scss";
import aboutImage from "../../assets/image1.jpeg";

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>

          <span className={styles.label}>
            ABOUT NURA
          </span>

          <h1>
            About Nura Counselling
            <br />
            & Psychotherapy
          </h1>

          <h3>
            Compassionate care. Meaningful change.
          </h3>

          <p>
            At Nura Counselling and Psychotherapy, we provide compassionate,
            professional therapy that is accessible, culturally sensitive,
            and grounded in understanding.
          </p>

          <p>
            As a trauma-informed practice, we recognise that many emotional
            challenges are shaped by past experiences. Our approach prioritises
            safety, trust, and collaboration, allowing each client to move at
            their own pace without judgement or pressure.
          </p>


          {/* Features */}
          <div className={styles.features}>

            <div className={styles.feature}>
              <div className={styles.icon}>
                ♡
              </div>

              <span>
                Trauma-Informed
                <br />
                Practice
              </span>
            </div>


            <div className={styles.feature}>
              <div className={styles.icon}>
                ♧
              </div>

              <span>
                Safe, Confidential
                <br />
                & Supportive
              </span>
            </div>


            <div className={styles.feature}>
              <div className={styles.icon}>
                ♧
              </div>

              <span>
                Culturally Sensitive
                <br />
                & Inclusive
              </span>
            </div>


          </div>

        </div>


        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <img
            src={aboutImage}
            alt="Counselling session"
          />
        </div>


      </div>
    </section>
  );
};


export default WelcomeSection;