import React from 'react';
import styles from './PartnershipsOutreach.module.scss';
import { FaCheckCircle, FaUsers, FaChalkboardTeacher, FaHandsHelping, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PartnershipsOutreach: React.FC = () => {
  return (
    <section className={styles.partnershipWrapper}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1>
            Partnerships & Outreach at <span>NURA</span>
          </h1>
          <p className={styles.intro}>
          NURA Counselling & Psychotherapy CIC operates under the umbrella of NURA Counselling & Psychotherapy Ltd, extending our mission to make emotional wellbeing accessible, inclusive, and rooted in real community care. We partner with schools, youth services, local authorities, community organisations, and wellbeing coordinators to offer practical emotional support pathways that people can actually access.
          </p>

          <div className={styles.card}>
            <h2>Counselling Referral Partnerships</h2>
            <p>
              A simple, low-barrier pathway for service users, parents, students, or community members to receive 1:1 emotional support. We aim to offer a first appointment within five working days of referral.
            </p>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Parents & Carers experiencing stress, burnout, or emotional overwhelm</li>
              <li><FaCheckCircle /> Young People & Students managing anxiety, identity, anger, or exam pressure</li>
              <li><FaCheckCircle /> Adults in the Community facing grief, life transitions, or isolation</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Wellbeing Programmes & Group Support</h2>
            <p>Designed to support your whole setting, not just individuals. Sessions are trauma-informed, interactive, and available in-person or online.</p>
            <ul className={styles.checkList}>
              <li><FaChalkboardTeacher /> Schools & Education Settings — stress awareness, emotional regulation, identity & resilience</li>
              <li><FaUsers /> Youth & Community Groups — safe-space circles, anger expression, emotional literacy</li>
              <li><FaHandsHelping /> Parents & Caregivers — understanding children’s emotions, parenting under pressure</li>
              <li><FaUsers /> Faith & Culture-Based Programmes — exploring identity, stigma, and wellbeing with sensitivity</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Community Presence & Mental Health Outreach</h2>
            <ul className={styles.checkList}>
              <li><FaUsers /> Mental Health & Wellbeing Days</li>
              <li><FaUsers /> Parent Engagement Events</li>
              <li><FaUsers /> Panels & Youth Forums</li>
              <li><FaUsers /> Community Outreach or Drop-in Days</li>
            </ul>
            <p>We offer talk-to-a-counsellor corners, mini consultations, signposting, and resource cards—showing up as part of your community, not above it.</p>
          </div>

          <div className={styles.card}>
            <h2>Why Organisations Choose NURA</h2>
            <ul className={styles.checkList}>
              <li><FaCheckCircle /> Warm, timely contact within five working days</li>
              <li><FaCheckCircle /> Realistic pricing & funded session models</li>
              <li><FaCheckCircle /> Human, culturally aware support, no clinical coldness</li>
              <li><FaCheckCircle /> Safeguarding-first, trauma-informed framework</li>
              <li><FaCheckCircle /> Flexible delivery that fits your environment</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Let’s Work Together</h2>
            <p>If you’re a school lead, safeguarding officer, community organiser, or wellbeing coordinator, we’d love to collaborate.</p>
            <p>Email for partnership enquiries: <strong>partnerships@ncptherapy.com</strong></p>
            <Link to="mailto:partnerships@ncptherapy.com" className={styles.button}>
              Contact Us
            </Link>
            <p className={styles.note}>Coming Soon — Partnership Pack </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsOutreach;
