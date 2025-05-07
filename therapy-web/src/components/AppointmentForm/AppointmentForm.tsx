import { useState } from "react";
import { PhoneCall } from "lucide-react";
import styles from "./AppointmentForm.module.scss";
import buttonstyles from "../styles/button.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThankYou from "../../components/ThankYouMessage/ThankYou";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const reqBody = {
      content: {
        YourName: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        MessageUs: formData.message,
      },
      pageInformation: [],
    };

    try {
      const response = await fetch("https://ncptherapyback.netlify.app/.netlify/functions/server/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.success);
        setIsSubmitted(true);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.formWrapper}>
        {/* Form Section */}
        <div className={styles.formSection}>

          {isSubmitted ? (
            <ThankYou message={messageResponse} />
          ) : (
            <>
            <h2 className={styles.title}>Make an appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGrid}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
                <div className={styles.dateWrapper}>
                  <textarea
                    name="message"
                    placeholder="Reason for Therapy"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.inputField}
                    rows={3}
                    required
                    />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{ marginTop: "15px" }}
                className={buttonstyles.primary}
                >
                {isLoading ? "Submitting..." : "Book An Appointment"}
              </button>
            </form>
          </>
          )}
        </div>

        {/* Contact Info Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactItem}>
            <PhoneCall size={24} className={styles.icon} />
            <div>
              <p className={styles.value}>07984628017</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.hoursIcon}>24</div>
            <div>
              <p className={styles.label}>Opening Hours</p>
              <p className={styles.value}>Mon - Sat (09:00 - 21:00)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
