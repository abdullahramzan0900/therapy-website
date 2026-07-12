// pages/ForOrganisations/ForOrganisations.tsx

import React from 'react';
import styles from './Fororganisations.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaUsers,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaBrain,
  FaHeart,
  FaCheckCircle,
  FaClock,
  FaSchool,
  FaLandmark,
  FaUserFriends,
  FaChild,
} from 'react-icons/fa';

import heroImage from '../../assets/mansitting.jpg';
import workshopUnderPressure from '../../assets/mansitting.jpg';
import workshopSafeSpaces from '../../assets/mansitting.jpg';
import workshopTraumaInformed from '../../assets//image1.jpeg';
import workshopTraumaBonds from '../../assets/image1.jpeg';
import workTogetherImage from '../../assets/image1.jpeg';

const heroBadges = [
  { icon: <FaShieldAlt />, label: 'Trauma-Informed Approach' },
  { icon: <FaChalkboardTeacher />, label: 'Workshops & Training' },
  { icon: <FaUsers />, label: 'Community Partnerships' },
  { icon: <FaMapMarkerAlt />, label: 'Online & In-Person Delivery' },
];

const whoWeWorkWith = [
  {
    icon: <FaGraduationCap />,
    title: 'Schools & Colleges',
    description:
      'Emotional wellbeing workshops, exam stress support, emotional literacy, and safe-space discussions for students and staff.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Workplaces & Organisations',
    description:
      'Trauma-informed wellbeing workshops focused on burnout, emotional fatigue, communication, and resilience.',
  },
  {
    icon: <FaUniversity />,
    title: 'Councils & Community Services',
    description:
      'Accessible emotional wellbeing support, referral pathways, outreach sessions, and community wellbeing programmes.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Individuals & Groups',
    description:
      'Trauma bond workshops, emotional awareness groups, self-esteem, boundaries, and personal growth spaces.',
  },
];

const workshops = [
  {
    image: workshopUnderPressure,
    icon: <FaBrain />,
    title: 'Under Pressure',
    subtitle: 'Exam Stress & Emotional Wellbeing Workshops',
    description: 'For Year 6, GCSE, A-Level and college students.',
    points: [
      'Stress regulation',
      'Overwhelm management',
      'Confidence building',
      'Emotional coping tools',
    ],
  },
  {
    image: workshopSafeSpaces,
    icon: <FaHeart />,
    title: 'Safe Spaces',
    subtitle: 'Emotional Awareness, Boundaries & Self-Expression',
    description: 'Interactive sessions helping young people and adults to:',
    points: [
      'Recognise emotions',
      'Communicate safely',
      'Understand boundaries',
      'Build emotional confidence',
    ],
  },
  {
    image: workshopTraumaInformed,
    icon: <FaUsers />,
    title: 'Trauma-Informed Workplaces',
    subtitle: 'Burnout, Emotional Fatigue & Sustainable Wellbeing',
    description:
      'For corporate teams, leadership, HR departments and emotionally demanding environments.',
    points: [
      'Burnout prevention',
      'Emotional resilience',
      'Healthy communication',
      'Sustainable performance',
    ],
  },
  {
    image: workshopTraumaBonds,
    icon: <FaHeart />,
    title: 'Trauma Bonds & Emotional Attachment',
    subtitle: 'Understanding Unhealthy Emotional Cycles',
    description: 'For individuals and groups exploring:',
    points: [
      'Emotional attachment',
      'Inconsistency & patterns',
      'Nervous system responses',
      'Healing & personal growth',
    ],
  },
];

const wePartnerWith = [
  { icon: <FaSchool />, label: 'Schools & Colleges' },
  { icon: <FaLandmark />, label: 'Local Authorities' },
  { icon: <FaUniversity />, label: 'Councils' },
  { icon: <FaHandsHelping />, label: 'Charities' },
  { icon: <FaUsers />, label: 'Community Organisations' },
  { icon: <FaBriefcase />, label: 'Corporate Teams' },
  { icon: <FaChild />, label: 'Youth Services' },
];

const weSupportThrough = [
  'Referral partnerships',
  'Wellbeing workshops & training',
  'Psychoeducation & awareness sessions',
  'Emotional support programmes',
  'Wellbeing events & campaigns',
  'Staff wellbeing initiatives',
];

const whyChooseNura = [
  { icon: <FaBrain />, label: 'Trauma-informed approach' },
  { icon: <FaUserFriends />, label: 'Human, culturally aware support' },
  { icon: <FaUsers />, label: 'Accessible & community focused' },
  { icon: <FaClock />, label: 'Flexible online & in-person delivery' },
  { icon: <FaShieldAlt />, label: 'Emotionally safe workshop environments' },
  { icon: <FaHeart />, label: 'Low-barrier emotional wellbeing support' },
];

const ForOrganisations: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>For Organisations</span>
          <h1>
            Supporting Emotional Wellbeing Beyond{' '}
            <span>the Therapy Room</span>
          </h1>
          <p>
            We partner with schools, workplaces, councils, and communities to
            deliver trauma-informed workshops, training, and wellbeing
            programmes that create real, lasting impact.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact-us" className={buttonstyles.primary}>
              Enquire About Working With NURA <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.heroBadges}>
            {heroBadges.map((badge) => (
              <div className={styles.heroBadge} key={badge.label}>
                <span className={styles.heroBadgeIcon}>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <img src={heroImage} alt="A facilitator leading a wellbeing workshop" />
        </div>
      </section>

      {/* Who We Work With */}
      <section className={styles.workWithSection}>
        <h2 className={styles.centeredHeading}>Who We Work With</h2>
        <div className={styles.workWithGrid}>
          {whoWeWorkWith.map((item) => (
            <div className={styles.workWithCard} key={item.title}>
              <span className={styles.circleIcon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Workshops & Programmes */}
      <section className={styles.workshopSection}>
        <h2 className={styles.centeredHeading}>Our Workshops &amp; Programmes</h2>
        <div className={styles.workshopGrid}>
          {workshops.map((workshop) => (
            <div className={styles.workshopCard} key={workshop.title}>
              <div className={styles.workshopImageWrap}>
                <img src={workshop.image} alt={workshop.title} />
                <span className={styles.workshopIcon}>{workshop.icon}</span>
              </div>
              <h4>{workshop.title}</h4>
              <p className={styles.workshopSubtitle}>{workshop.subtitle}</p>
              <p className={styles.workshopDescription}>{workshop.description}</p>
              <ul className={styles.checkList}>
                {workshop.points.map((point) => (
                  <li key={point}>
                    <FaCheckCircle /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership & Referral Support */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipGrid}>
          <div className={styles.partnershipLeft}>
            <h2>Partnership &amp; Referral Support</h2>
            <h3>We Partner With:</h3>
            <div className={styles.partnerIcons}>
              {wePartnerWith.map((item) => (
                <div className={styles.partnerIcon} key={item.label}>
                  <span className={styles.circleIcon}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.partnershipRight}>
            <h3>We Can Support Through:</h3>
            <ul className={styles.checkList}>
              {weSupportThrough.map((item) => (
                <li key={item}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Organisations Choose NURA */}
      <section className={styles.whySection}>
        <h2 className={styles.centeredHeading}>Why Organisations Choose NURA</h2>
        <div className={styles.whyGrid}>
          {whyChooseNura.map((item) => (
            <div className={styles.whyItem} key={item.label}>
              <span className={styles.whyIcon}>{item.icon}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Work Together */}
      <section className={styles.workTogetherSection}>
        <div className={styles.workTogetherImageWrap}>
          <img src={workTogetherImage} alt="Hands joined together in support" />
        </div>
        <div className={styles.workTogetherContent}>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Whether you are a school, workplace, council or community
            organisation, we&apos;d love to explore how NURA can support your
            community.
          </p>
          <Link to="/contact-us" className={styles.workTogetherButton}>
            Enquire About Partnerships <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForOrganisations;