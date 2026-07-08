// pages/LowCostCounselling/LowCostCounselling.tsx

import React from 'react';
import styles from './LowCostCounselling.module.scss';
import buttonstyles from '../../components/styles/button.module.scss';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaShieldAlt,
  FaLaptop,
  FaPoundSign,
  FaUsers,
  FaGraduationCap,
  FaCoins,
  FaUserFriends,
  FaUserCheck,
  FaLock,
  FaCheckCircle,
} from 'react-icons/fa';

import heroImage from '../../assets/image1.jpeg';

const trustBadges = [
  { icon: <FaHeart />, label: 'Trauma-Informed Approach' },
  { icon: <FaShieldAlt />, label: 'Confidential Support' },
  { icon: <FaLaptop />, label: 'Online Therapy Available' },
  { icon: <FaPoundSign />, label: 'Low-Cost Options' },
  { icon: <FaUsers />, label: 'Culturally Sensitive Care' },
];

const whoBenefits = [
  {
    icon: <FaGraduationCap />,
    title: 'Students & Young Adults',
    description: 'Support during stress, transitions, emotional overwhelm, and identity development.',
  },
  {
    icon: <FaCoins />,
    title: 'Individuals Facing Financial Hardship',
    description: 'Accessible therapy options for those unable to afford standard private fees.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Community Members Seeking Support',
    description: 'Safe emotional support without judgement or pressure.',
  },
];

const whatToExpect = [
  {
    icon: <FaUserCheck />,
    title: 'Qualified Therapists',
    description: 'Sessions provided by trainee or newly qualified therapists under professional supervision.',
  },
  {
    icon: <FaLock />,
    title: 'Safe & Confidential',
    description: 'A non-judgemental space where you can speak openly and feel heard.',
  },
  {
    icon: <FaLaptop />,
    title: 'Flexible Online Support',
    description: 'Attend sessions from the comfort and privacy of your own space.',
  },
  {
    icon: <FaHeart />,
    title: 'Personalised Care',
    description: 'Support tailored to your emotional needs, experiences, and goals.',
  },
];

const whoMayHelp = [
  'Anxiety or stress',
  'Low mood or overwhelm',
  'Grief or loss',
  'Emotional burnout',
  'Life transitions',
  'Relationship difficulties',
];

const whyChooseNura = [
  'Emotionally safe environment',
  'Trauma-informed approach',
  'Compassionate and human support',
  'Affordable without judgement',
  'Culturally sensitive care',
  'Flexible online therapy',
  'Support that meets you where you are',
];

const howToBegin = [
  {
    number: '1',
    title: 'Complete a short enquiry form',
    description: 'Tell us a little about your needs so we can understand best how to support you.',
  },
  {
    number: '2',
    title: "We'll explore your needs and availability",
    description: "We'll reach out by phone or email, guiding you through the next steps.",
  },
  {
    number: '3',
    title: 'Begin sessions with a matched therapist',
    description: "You'll be matched with a therapist and begin your sessions, safe and supported.",
  },
];

const LowCostCounselling: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Affordable Emotional Support That Feels Safe, Human &amp;{' '}
            <span>Accessible</span>
          </h1>
          <p>
            We believe emotional support should never be out of reach. NURA offers
            compassionate, low-cost counselling that is safe, confidential, and
            non-judgemental.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact-us" className={buttonstyles.primary}>
              Apply for Support
            </Link>
            <Link to="/about-us" className={styles.textLink}>
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <img src={heroImage} alt="A calm, warmly lit reading corner" />
          <div className={styles.quoteCard}>
            {/* <span className={styles.quoteMark}>&ldquo;</span> */}
            <p>You do not need to be in crisis to deserve support.</p>
            <span className={styles.quoteHeart} aria-hidden="true">
              ♡
            </span>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className={styles.badgesSection}>
        <div className={styles.badgesRow}>
          {trustBadges.map((badge) => (
            <div className={styles.badge} key={badge.label}>
              <span className={styles.badgeIcon}>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What is Low-Cost Counselling */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div className={styles.infoLeft}>
            <h2>What is Low-Cost Counselling?</h2>
            <p>
              NURA&apos;s low-cost counselling service provides accessible emotional
              support for individuals who may not otherwise be able to access private
              therapy. Sessions are led by carefully selected trainee or newly
              qualified therapists under professional clinical supervision, ensuring
              support remains safe, ethical, and compassionate.
            </p>
          </div>
          <div className={styles.infoRight}>
            <h3>This support may feel helpful if you are experiencing:</h3>
            <ul className={styles.checkList}>
              {whoMayHelp.map((item) => (
                <li key={item}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className={styles.benefitSection}>
        <h2 className={styles.centeredHeading}>Who Can Benefit?</h2>
        <div className={styles.benefitGrid}>
          {whoBenefits.map((item) => (
            <div className={styles.benefitCard} key={item.title}>
              <span className={styles.circleIcon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className={styles.expectSection}>
        <h2 className={styles.centeredHeading}>What to Expect</h2>
        <div className={styles.expectGrid}>
          {whatToExpect.map((item) => (
            <div className={styles.expectCard} key={item.title}>
              <span className={styles.circleIcon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Why Choose Nura */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h2>Pricing</h2>
            <p className={styles.priceLine}>Sessions from £15 – £25</p>
            <p>
              Pricing is offered on a sliding scale based on individual circumstances.
            </p>
            <p>
              We aim to ensure emotional support remains accessible, without
              compromising compassionate care.
            </p>
            <Link to="/contact-us" className={buttonstyles.primary}>
              Apply for Support
            </Link>
          </div>

          <div className={styles.whyCard}>
            <h2>Why People Choose NURA</h2>
            <ul className={styles.checkList}>
              {whyChooseNura.map((item) => (
                <li key={item}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>
            <span className={styles.whyHeart} aria-hidden="true">
              ♡
            </span>
          </div>
        </div>
      </section>

      {/* How to Begin */}
      <section className={styles.beginSection}>
        <h2 className={styles.centeredHeading}>How to Begin</h2>
        <div className={styles.beginGrid}>
          {howToBegin.map((step) => (
            <div className={styles.beginStep} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCta}>
        <div className={styles.footerContent}>
          <span className={styles.footerIcon} aria-hidden="true">
            🌱
          </span>
          <div className={styles.footerText}>
            <p className={styles.footerHeadline}>
              Support should feel safe, accessible, and within reach.
            </p>
            <p className={styles.footerSub}>We are here whenever you&apos;re ready.</p>
          </div>
        </div>
        <Link to="/contact-us" className={styles.footerButton}>
          Take the First Step <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
};

export default LowCostCounselling;