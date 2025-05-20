// pages/IndividualTherapy/IndividualTherapy.tsx

import styles from './IndividualTherapy.module.scss';
import buttonstyles from '../../components/styles/button.module.scss'

const IndividualTherapy = () => {
  return (
    <section className={styles.individualTherapySection}>
      <div className={styles.sectionContent}>
        <h2 style={{
          color:"rgba(179, 114, 4, 0.9)"
        }}>Individual Therapy</h2>
        <p className={styles.intro}>
          Compassionate, one-to-one support for personal growth and emotional well-being.
        </p>
        <p>
          Individual therapy is a dedicated space where you can explore your emotions, challenges, and experiences with a trained professional. 
          Whether you are facing difficulties in your personal life, struggling with mental health concerns, or simply need support to navigate 
          a challenging period, our sessions are tailored to help you find clarity, confidence, and relief.
        </p>
        {/* <a href="/booking" className={styles.bookBtn}>🡲 Book a Consultation</a> */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <button className={buttonstyles.primary}>🡲 Book a Consultation</button>
        </div>

        <h3>Areas We Cover</h3>

        <div className={styles.area}>
          <h4>Anxiety & Stress Management</h4>
          <p><strong>What is Anxiety?</strong></p>
          <p>
            Anxiety is a feeling of worry, fear, or unease that can range from mild to severe. It can affect your daily life, making even simple tasks feel overwhelming.
          </p>
          <p><strong>How We Can Help:</strong></p>
          <ul>
            <li>Identify triggers and understand the root causes of anxiety.</li>
            <li>Teach relaxation techniques and mindfulness strategies.</li>
            <li>Develop coping mechanisms to manage anxious thoughts.</li>
            <li>Help build confidence in dealing with stress in daily life.</li>
          </ul>
        </div>

        <div className={styles.area}>
          <h4>Depression & Low Mood</h4>
          <p><strong>What is Depression?</strong></p>
          <p>
            Depression is more than just feeling sad—it can lead to a persistent sense of emptiness, loss of interest in activities, and difficulty managing daily life.
          </p>
          <p><strong>How We Can Help:</strong></p>
          <ul>
            <li>Provide a supportive space to talk openly about your feelings.</li>
            <li>Explore techniques to manage negative thought patterns.</li>
            <li>Work on regaining motivation and finding joy in life again.</li>
            <li>Offer emotional support and coping strategies tailored to you.</li>
          </ul>
        </div>

        <div className={styles.area}>
          <h4>Self-Esteem & Confidence Issues</h4>
          <p><strong>What is Low Self-Esteem?</strong></p>
          <p>
            Low self-esteem can make you feel inadequate, doubt yourself, or struggle with self-worth.
          </p>
          <p><strong>How We Can Help:</strong></p>
          <ul>
            <li>Challenge negative self-beliefs and develop a healthier self-image.</li>
            <li>Work on assertiveness and self-acceptance.</li>
            <li>Explore ways to build resilience and inner confidence.</li>
            <li>Identify strengths and encourage personal growth.</li>
          </ul>
        </div>

        <div className={styles.area}>
          <h4>Bereavement & Grief Support</h4>
          <p><strong>What is Bereavement?</strong></p>
          <p>
            Grief is a natural response to losing someone or something important. It can cause emotional, physical, and mental distress.
          </p>
          <p><strong>How We Can Help:</strong></p>
          <ul>
            <li>Provide a safe space to process your grief at your own pace.</li>
            <li>Offer guidance on navigating emotions like sadness, anger, and guilt.</li>
            <li>Help with adjusting to life after loss and finding ways to move forward.</li>
            <li>Support in honouring memories while focusing on healing.</li>
          </ul>
        </div>

        <div className={styles.area}>
          <h4>Life Transitions & Personal Growth</h4>
          <p><strong>What Are Life Transitions?</strong></p>
          <p>
            Life changes—whether planned or unexpected—can be challenging. These may include career shifts, relationship changes, or moving to a new place.
          </p>
          <p><strong>How We Can Help:</strong></p>
          <ul>
            <li>Support in navigating changes with confidence.</li>
            <li>Provide tools to manage uncertainty and fear of the unknown.</li>
            <li>Help in setting personal goals and building resilience.</li>
            <li>Offer guidance in adapting to new situations while maintaining emotional well-being.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndividualTherapy;
