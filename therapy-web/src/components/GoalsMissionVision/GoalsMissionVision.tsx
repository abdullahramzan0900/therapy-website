import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaEye, FaHeart, FaBullseye } from "react-icons/fa";
import styles from "./GoalsMissionVision.module.scss"; // Import styles

const GoalsMissionVision: React.FC = () => {
  const missionData = [
    {
      title: "Mission",
      description:
        "To provide high-quality mental health support in an accessible, affordable, and professional manner.",
      icon: <FaCheckCircle />,
      colorClass: styles["icon-1"],
    },
    {
      title: "Vision",
      description:
        "To create a safe and non-judgemental space where individuals feel heard, valued, and supported.",
      icon: <FaEye />,
      colorClass: styles["icon-2"],
    },
    {
      title: "Value",
      description:
        "To make therapy financially accessible, ensuring that no one is excluded due to cost.",
      icon: <FaHeart />,
      colorClass: styles["icon-3"],
    },
    {
      title: "Goals",
      description:
        "We believe that mental well-being is a right, not a privilege, and we are committed to making counselling available to as many people as possible.",
      icon: <FaBullseye />,
      colorClass: styles["icon-4"],
    },
  ];

  return (
    <div className={styles.missionContainer}>
      <h2 className={styles.title}>Our mission is simple</h2>

      <div className={styles.missionGrid}>
        {missionData.map((item, index) => (
          <div className={styles.missionCard} key={index}>
            <div className={`${styles.iconWrapper} ${item.colorClass}`}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className={styles.stepNumber}>{`0${index + 1}`}</span>
            {index !== missionData.length - 1 && (
              <div className={styles.arrow} style={{ borderColor: `${item.colorClass}` }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsMissionVision;
