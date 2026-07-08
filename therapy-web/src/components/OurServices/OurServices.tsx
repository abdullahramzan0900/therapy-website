// pages/IndividualTherapy/IndividualTherapy.tsx

import styles from './IndividualTherapy.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { useNavigate } from 'react-router-dom';

type Area = {
  icon: JSX.Element;
  title: string;
  summary: string;
  points: string[];
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#6B8D7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MindIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18a4 4 0 0 1-2-7.5 4.5 4.5 0 0 1 6.2-4.9A4 4 0 0 1 19 8a3.5 3.5 0 0 1-1 6.9" stroke="#4B6C57" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18h6M10 21h4" stroke="#4B6C57" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9.5 11.5c.5-1 1.5-1 2 0M13 10.5c.5-1 1.5-1 2 0" stroke="#4B6C57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CloudRainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 15a4 4 0 0 1 .3-8 5 5 0 0 1 9.5-1.5A4.5 4.5 0 0 1 16.5 15H7Z" stroke="#4B6C57" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 18.5l-1 2M12 18.5l-1 2M16 18.5l-1 2" stroke="#4B6C57" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.5l6.5 2.5v5c0 4.5-2.8 7.8-6.5 9.5-3.7-1.7-6.5-5-6.5-9.5v-5L12 3.5Z" stroke="#4B6C57" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="12" cy="10.5" r="1.6" stroke="#4B6C57" strokeWidth="1.2" />
    <path d="M12 12v3" stroke="#4B6C57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18c-1.5-5.5 1-11 10-12.5C17.5 14.5 12 17 6 18Z" stroke="#4B6C57" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 17c2-3 4.5-6 9-9.5" stroke="#4B6C57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const MountainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 17.5 9 8l3 4.2 2-2.7 6.5 8Z" stroke="#4B6C57" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M9 8l1.4 2" stroke="#4B6C57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const areas: Area[] = [
  {
    icon: <MindIcon />,
    title: 'Anxiety & Stress',
    summary: 'Support for overwhelming thoughts, stress, panic, and constant worry.',
    points: [
      'Understand emotional triggers',
      'Develop grounding techniques',
      'Feel more calm and in control',
      'Build confidence and self-trust',
    ],
  },
  {
    icon: <CloudRainIcon />,
    title: 'Depression & Low Mood',
    summary: 'Support for persistent sadness, lack of motivation, and feeling emotionally drained.',
    points: [
      'Talk openly about your feelings',
      'Manage negative thought patterns',
      'Find motivation and emotional balance',
      'Rediscover hope and joy',
    ],
  },
  {
    icon: <ShieldIcon />,
    title: 'Self-Esteem & Confidence',
    summary: 'Support to help you feel more confident, worthy, and secure in yourself.',
    points: [
      'Challenge self-doubt and criticism',
      'Build self-worth and self-respect',
      'Improve confidence in daily life',
      'Encourage personal growth',
    ],
  },
  {
    icon: <LeafIcon />,
    title: 'Bereavement & Grief Support',
    summary: 'Compassionate support to help you process loss and navigate life after grief.',
    points: [
      'Process emotions in a safe space',
      'Work through sadness, anger or guilt',
      'Adjust to life after loss',
      'Honour memories while healing',
    ],
  },
  {
    icon: <MountainIcon />,
    title: 'Life Transitions & Growth',
    summary: 'Support for big life changes and building a more meaningful, fulfilling life.',
    points: [
      'Navigate career and relationship changes',
      'Manage uncertainty and fear of change',
      'Set goals and build resilience',
      'Create a life aligned with you',
    ],
  },
];

const IndividualTherapy = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.individualTherapySection}>
      <div className={styles.sectionContent}>
        <h2 className={styles.heading}>Individual Therapy</h2>
        <p className={styles.intro}>
          Compassionate, one-to-one support for personal growth and emotional well-being.
        </p>

        <div className={styles.bookBtnWrap}>
          <button
            onClick={() => {
              navigate('/contact-us');
            }}
            className={buttonstyles.primary}
          >
            Book a Consultation
          </button>
        </div>

        <div className={styles.grid}>
          {areas.map((area) => (
            <div className={styles.card} key={area.title}>
              <div className={styles.iconWrap}>{area.icon}</div>
              <h4>{area.title}</h4>
              <p className={styles.summary}>{area.summary}</p>
              <ul>
                {area.points.map((point) => (
                  <li key={point}>
                    <span className={styles.checkIcon}>
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.learnMore}>
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}

          <div className={styles.quoteCard}>
            <svg
              className={styles.quoteLeaf}
              width="120"
              height="150"
              viewBox="0 0 120 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M60 150V40" stroke="#B37204" strokeOpacity="0.5" strokeWidth="1.2" />
              <path d="M60 60c-14-8-22-4-30 6 12 6 22 4 30-6Z" stroke="#B37204" strokeOpacity="0.5" strokeWidth="1.2" />
              <path d="M60 85c14-8 22-4 30 6-12 6-22 4-30-6Z" stroke="#B37204" strokeOpacity="0.5" strokeWidth="1.2" />
              <path d="M60 110c-14-8-22-4-30 6 12 6 22 4 30-6Z" stroke="#B37204" strokeOpacity="0.5" strokeWidth="1.2" />
              <circle cx="60" cy="38" r="4" fill="#B37204" fillOpacity="0.5" />
            </svg>
            <p className={styles.quoteText}>
              You don&apos;t have to go through it alone.
              <br />
              <br />
              Support is here, and you matter.
            </p>
            <span className={styles.quoteHeart} aria-hidden="true">
              ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTherapy;