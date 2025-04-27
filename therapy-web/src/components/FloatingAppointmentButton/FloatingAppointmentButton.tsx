// components/MobileFloatingButton.tsx
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import buttonstyles from "../styles/button.module.scss";
import styles from "./button.module.scss";

const MobileFloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={`${buttonstyles.secondary} ${styles.floatingBtn}`}
      onClick={() => navigate("/contact-us")}
    >
      <FaCalendarAlt style={{ marginRight: "8px" }} />
      Book an Appointment
    </button>
  );
};

export default MobileFloatingButton;
