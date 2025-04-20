import styles from "./Contact.module.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThankYou from "../../components/ThankYouMessage/ThankYou";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const reqBody = {
      content: {
        YourName: name,
        Email: email,
        Phone: phone,
        MessageUs: message,
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
    <>
      <ToastContainer />
      <section className={styles.contactMain}>
        <div className={styles.contactContainer}>
          <div className={styles.leftSection}>
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +44 123 456 789</p>
            <p><strong>Email:</strong> therapycenter@example.com</p>
            <p>Reach out to us to schedule your session or ask any questions.</p>
          </div>
          <div className={styles.rightSection}>
            {isSubmitted ? (
              <ThankYou message={messageResponse} />
            ) : (
              <>
                <h2 className={styles.heading}>Book Your Appointment</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 123 456 789"
                    />
                  </div>

                  <div className={styles.fullWidth}>
                    <label htmlFor="message">Reason for Therapy</label>
                    <textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your reason for booking..."
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="submit" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
