import styles from "./WhatWeOffer.module.scss";
import {
  FaUser,
  FaHandHoldingHeart,
  FaCheck,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>

        <h2 className={styles.heading}>WHAT WE OFFER</h2>

        <div className={styles.offerGrid}>

          {/* Individual Therapy */}
          <div className={styles.card}>

            <div className={styles.cardHeader}>
              <div className={styles.icon}>
                <FaUser />
              </div>

              <div>
                <h3>Individual Therapy</h3>
                <p>
                  One-to-one therapy for individuals struggling
                  with personal challenges.
                </p>
              </div>
            </div>


            <ul>
              <li>
                <FaCheck />
                Anxiety & Stress – Learn how to manage worries and emotions.
              </li>

              <li>
                <FaCheck />
                Depression & Low Mood – Find ways to regain motivation and
                emotional balance.
              </li>

              <li>
                <FaCheck />
                Self-Esteem & Confidence – Build self-worth and a positive
                self-image.
              </li>

              <li>
                <FaCheck />
                Bereavement & Loss – Process grief and adjust to life after a loss.
              </li>

              <li>
                <FaCheck />
                Life Transitions – Support with relationships, career,
                parenting and more.
              </li>
            </ul>


            <a href="/services">
              Learn more about our services →
            </a>

          </div>



          {/* Low Cost */}
          <div className={styles.card}>

            <div className={styles.cardHeader}>

              <div className={styles.icon}>
                <FaHandHoldingHeart />
              </div>


              <div>
                <h3>Low-Cost Counselling</h3>

                <p>
                  Affordable therapy options with trainee counsellors
                  for individuals facing financial difficulties.
                </p>

              </div>

            </div>



            <ul>

              <li>
                <FaCheck />
                Individuals on a low income or receiving benefits.
              </li>


              <li>
                <FaCheck />
                Students and young adults seeking mental health support.
              </li>


              <li>
                <FaCheck />
                Anyone experiencing financial hardship who needs
                affordable therapy.
              </li>

            </ul>


            <a href="/low-cost-counselling">
              Learn more about low-cost counselling →
            </a>


          </div>


        </div>



        {/* WHO WE SUPPORT */}

        <div className={styles.supportBox}>

          <h2>WHO WE SUPPORT</h2>


          <div className={styles.supportGrid}>


            <div className={styles.supportItem}>

              <div className={styles.supportIcon}>
                <FaUsers />
              </div>

              <div>
                <h4>Individuals</h4>

                <p>
                  Support for anxiety, stress, trauma,
                  grief, burnout, low mood and emotional overwhelm.
                </p>
              </div>

            </div>



            <div className={styles.supportItem}>

              <div className={styles.supportIcon}>
                <FaGraduationCap />
              </div>


              <div>
                <h4>Young People & Students</h4>

                <p>
                  Emotional wellbeing, self-esteem,
                  exam stress, transitions and personal development.
                </p>
              </div>

            </div>



            <div className={styles.supportItem}>

              <div className={styles.supportIcon}>
                <FaBriefcase />
              </div>


              <div>

                <h4>
                  Workplaces & Organisations
                </h4>

                <p>
                  Trauma-informed workshops and wellbeing
                  programmes for healthier teams.
                </p>

              </div>

            </div>


          </div>

        </div>



      </div>
    </section>
  );
};


export default WhatWeOffer;