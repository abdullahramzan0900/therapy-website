import styles from './Workshops.module.scss';

const Workshops = () => {
  return (
    <section className={styles.workshops}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Workshops – Coming Soon</h1>
        <p className={styles.intro}>
          At <strong>NURA Counselling and Psychotherapy</strong>, we believe that mental health support should be accessible beyond the therapy room. That’s why we’ll soon be introducing a range of interactive workshops designed to support emotional wellbeing in communities, schools, and workplaces.
        </p>

        <div className={styles.themes}>
          <h2>Our workshops will focus on themes such as:</h2>
          <ul>
            <li>Understanding and managing anxiety and depression</li>
            <li>Building self-esteem and emotional resilience</li>
            <li>Promoting mental health awareness in culturally diverse spaces</li>
            <li>Supporting staff wellbeing and student mental health</li>
          </ul>
          <p>
            Whether you’re an individual looking for group support, a school seeking early intervention strategies, or a company aiming to prioritise employee wellbeing, our workshops will be designed with your needs in mind.
          </p>
          <div className={styles.note}>✨ This page will be updated regularly with upcoming dates and booking details.</div>
          <div className={styles.cta}>Stay tuned — healing is coming to your space, too.</div>
        </div>

        <div className={styles.workshopTypes}>
          <h2>🗂 Workshop Types</h2>

          <div className={styles.type}>
            <h3>🧠 Community & Group Workshops</h3>
            <p>
              These workshops are ideal for individuals looking for support in a group setting. We’ll explore common mental health challenges and help participants develop tools for everyday wellbeing in a safe, inclusive environment.
            </p>
            <ul>
              <li>Managing anxiety and low mood</li>
              <li>Rebuilding self-confidence</li>
              <li>Coping with stress and overwhelm</li>
              <li>Understanding emotional triggers</li>
            </ul>
          </div>

          <div className={styles.type}>
            <h3>🏫 Workshops for Schools & Colleges</h3>
            <p>
              Tailored for students, teachers, and support staff, our school-based workshops focus on emotional literacy, early intervention, and practical strategies for better mental health.
            </p>
            <p>
              We aim to create open, stigma-free spaces where young people and staff can learn to manage emotions, build resilience, and support one another.
            </p>
            <ul>
              <li>Anxiety and exam stress</li>
              <li>Self-esteem and peer pressure</li>
              <li>Mental health awareness for staff</li>
              <li>Creating emotionally safe classrooms</li>
            </ul>
          </div>

          <div className={styles.type}>
            <h3>💼 Corporate & Workplace Workshops</h3>
            <p>
              Supporting your employees' mental health isn’t just ethical — it’s essential. Our workplace wellbeing sessions are designed to help teams navigate stress, prevent burnout, and encourage emotionally intelligent communication.
            </p>
            <ul>
              <li>Stress management in high-pressure environments</li>
              <li>Building emotional resilience at work</li>
              <li>Navigating workplace conflict</li>
              <li>Mental health check-ins and peer support</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerNote}>
          ✨ We’ll be updating this page regularly with available dates, booking details, and tailored workshop packages.<br />
          If you’re interested in booking a session or partnering with us, get in touch — we’d love to hear from you.
        </div>
      </div>
    </section>
  );
};

export default Workshops;
