// pages/ForOrganisations/ForOrganisations.tsx

import React from 'react';
import styles from './Fororganisations.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/mansitting.jpg';
import workshopUnderPressure from '../../assets/workshop-under-pressure.jpg';
import workshopSafeSpaces from '../../assets/workshop-safe-spaces.jpg';
import workshopTraumaInformed from '../../assets/workshop-trauma-informed-workplaces.jpg';
import workshopTraumaBonds from '../../assets/workshop-trauma-bonds.jpg';
import workTogetherImage from '../../assets/image1.jpeg';

const whoWeWorkWith = [
  {
    title: 'Schools & Colleges',
    description:
      'Emotional wellbeing workshops, exam stress support, emotional literacy, and safe-space discussions for students and staff.',
  },
  {
    title: 'Workplaces & Organisations',
    description:
      'Trauma-informed wellbeing workshops focused on burnout, emotional fatigue, communication, and resilience.',
  },
  {
    title: 'Councils & Community Services',
    description:
      'Accessible emotional wellbeing support, referral pathways, outreach sessions, and community wellbeing programmes.',
  },
  {
    title: 'Individuals & Groups',
    description:
      'Trauma bond workshops, emotional awareness groups, self-esteem, boundaries, and personal growth spaces.',
  },
];

const workshops = [
  {
    image: workshopUnderPressure,
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

const referralCategories = [
  {
    title: 'Parents & Carers',
    description: 'Guidance and emotional support for those caring for others.',
  },
  {
    title: 'Young People & Students',
    description: 'Safe, age-appropriate support through school, college and beyond.',
  },
  {
    title: 'Adults in the Community',
    description: 'Accessible wellbeing support close to home, online or in person.',
  },
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
  'Trauma-informed approach',
  'Human, culturally aware support',
  'Accessible & community focused',
  'Flexible online & in-person delivery',
  'Emotionally safe workshop environments',
  'Low-barrier emotional wellbeing support',
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
              Enquire About Working With NURA&nbsp;<span aria-hidden="true">→</span>
            </Link>
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
            <div className={styles.workWithColumn} key={item.title}>
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
                <img src={workshop.image} alt="" loading="lazy" />
              </div>
              <h4>{workshop.title}</h4>
              <p className={styles.workshopSubtitle}>{workshop.subtitle}</p>
              <p className={styles.workshopDescription}>{workshop.description}</p>
              <ul className={styles.textList}>
                {workshop.points.map((point) => (
                  <li key={point}>{point}</li>
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
            <div className={styles.referralColumns}>
              {referralCategories.map((item) => (
                <div className={styles.referralColumn} key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.partnershipRight}>
            <h3>We Can Support Through:</h3>
            <ul className={styles.textList}>
              {weSupportThrough.map((item) => (
                <li key={item}>{item}</li>
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
            <div className={styles.whyItem} key={item}>
              <p>{item}</p>
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
            Enquire About Partnerships&nbsp;<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForOrganisations;