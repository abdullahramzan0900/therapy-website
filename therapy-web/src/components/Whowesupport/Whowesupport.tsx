// pages/WhoWeSupport/WhoWeSupport.tsx

import styles from './WhoWeSupport.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { useNavigate } from 'react-router-dom';

type SupportGroup = {
  icon: JSX.Element;
  iconBg: string;
  title: string;
  description: string;
};

const IndividualsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" stroke="#fff" strokeWidth="1.4" />
    <path d="M3.5 19c.6-3 2.7-4.7 5.5-4.7s4.9 1.7 5.5 4.7" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="16.5" cy="7.5" r="2.2" stroke="#fff" strokeWidth="1.3" />
    <path d="M14.8 14.8c1-1.1 2.3-1.6 3.7-1.4 1.7.2 3 1.5 3.5 3.6" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.5 21 9l-9 3.5L3 9l9-3.5Z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 11v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M21 9v5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="8" width="17" height="11" rx="1.8" stroke="#fff" strokeWidth="1.4" />
    <path d="M8.5 8V6.5A2 2 0 0 1 10.5 4.5h3a2 2 0 0 1 2 2V8" stroke="#fff" strokeWidth="1.4" />
    <path d="M3.5 13h17" stroke="#fff" strokeWidth="1.4" />
  </svg>
);

const groups: SupportGroup[] = [
  {
    icon: <IndividualsIcon />,
    iconBg: '#6B8D7A',
    title: 'Individuals',
    description:
      'Supporting adults through anxiety, stress, trauma, burnout, grief, and emotional overwhelm.',
  },
  {
    icon: <GraduationCapIcon />,
    iconBg: '#8B3A3A',
    title: 'Young People & Students',
    description:
      'Emotional wellbeing support, exam stress, self-esteem, transitions, and personal development.',
  },
  {
    icon: <BriefcaseIcon />,
    iconBg: '#C9922E',
    title: 'Organisations & Workplaces',
    description:
      'Trauma-informed workshops and wellbeing programmes for teams, leaders, and communities.',
  },
];

const WhoWesupport = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.whoWeSupportSection}>
      <div className={styles.sectionContent}>
        <h2 className={styles.heading}>Who We Support</h2>

        <div className={styles.grid}>
          {groups.map((group) => (
            <div className={styles.card} key={group.title}>
              <div className={styles.iconWrap} style={{ backgroundColor: group.iconBg }}>
                {group.icon}
              </div>
              <h4>{group.title}</h4>
              <p>{group.description}</p>
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
            Enquire About Workshops & Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWesupport;