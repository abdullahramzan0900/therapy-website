// pages/TherapyProcess/TherapyProcess.tsx

import styles from './GuidingPrinciples.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { useNavigate } from 'react-router-dom';

type Step = {
  number: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5.5" width="16" height="14" rx="1.8" stroke="#4B6C57" strokeWidth="1.4" />
    <path d="M4 9.5h16" stroke="#4B6C57" strokeWidth="1.4" />
    <path d="M8 4v3M16 4v3" stroke="#4B6C57" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4 3.5V15H6.5A2.5 2.5 0 0 1 4 12.5v-6Z"
      stroke="#4B6C57"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19s-7-4.4-7-9.6A4 4 0 0 1 12 7a4 4 0 0 1 7 2.4C19 14.6 12 19 12 19Z"
      stroke="#4B6C57"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const GrowthLeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18c-1.5-5.5 1-11 10-12.5C17.5 14.5 12 17 6 18Z" stroke="#4B6C57" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 17c2-3 4.5-6 9-9.5" stroke="#4B6C57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const steps: Step[] = [
  {
    number: '01',
    icon: <CalendarIcon />,
    title: 'Free Consultation',
    description: 'A relaxed 15-minute call to explore what support may feel right for you.',
  },
  {
    number: '02',
    icon: <ChatIcon />,
    title: 'Initial Assessment',
    description: "We'll gently explore your experiences, needs, and goals for therapy.",
  },
  {
    number: '03',
    icon: <HeartIcon />,
    title: 'Ongoing Therapy',
    description: 'A safe, confidential space to process, heal, and grow at your own pace.',
  },
  {
    number: '04',
    icon: <GrowthLeafIcon />,
    title: 'Continued Growth',
    description: 'Support that promotes long-term wellbeing, resilience, and self-growth.',
  },
];

const TherapyProcess = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.therapyProcessSection}>
      <div className={styles.sectionContent}>
        <p className={styles.eyebrow}>HOW IT WORKS</p>
        <h2 className={styles.heading}>Guiding You Our Therapy Process</h2>

        <div className={styles.stepsRow}>
          {steps.map((step) => (
            <div className={styles.step} key={step.number}>
              <div className={styles.iconBoxWrap}>
                <div className={styles.iconBox}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <button
            onClick={() => {
              navigate('/contact-us');
            }}
            className={buttonstyles.primary}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default TherapyProcess;