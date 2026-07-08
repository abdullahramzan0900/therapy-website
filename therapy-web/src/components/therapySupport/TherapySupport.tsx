import styles from "./TherapySupport.module.scss";
import services from "../../assets/services.jpg";

import {
  FaShieldAlt,
  FaHeart,
  FaUsers
} from "react-icons/fa";


const TherapySupport = () => {

  return (

    <section className={styles.therapySection}>

      <div className={styles.container}>


        {/* LEFT CONTENT */}

        <div className={styles.textContent}>

          <span className={styles.subtitle}>
            OUR SERVICES
          </span>


          <h1>
            Therapy That Meets
            <br />
            You Where You Are
          </h1>


          <p>
            At <strong>Nura Counselling and Psychotherapy</strong>, we offer
            individual therapy tailored to support your life's challenges.
            Our services provide a safe, confidential, and non-judgemental
            space where you can explore, heal, and grow.
          </p>



          <div className={styles.features}>


            <div className={styles.feature}>

              <FaShieldAlt />

              <span>
                Safe &<br />
                Confidential
              </span>

            </div>



            <div className={styles.feature}>

              <FaHeart />

              <span>
                Trauma-Informed
                <br />
                Approach
              </span>

            </div>




            <div className={styles.feature}>

              <FaUsers />

              <span>
                Culturally Sensitive
                <br />
                & Inclusive
              </span>

            </div>


          </div>


        </div>




        {/* IMAGE */}


        <div className={styles.imageContent}>

          <img
            src={services}
            alt="Therapy session"
          />

        </div>



      </div>


    </section>

  );

};


export default TherapySupport;