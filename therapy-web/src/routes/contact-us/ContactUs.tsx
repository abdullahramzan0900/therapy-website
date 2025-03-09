import styles from "./Contact.module.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import ThankYou from "../../components/ThankYouMessage/ThankYou";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loader state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.success);
        setIsSubmitted(true);
      } else {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-left",
          icon: false, // Remove default cross icon
          className: "custom-toast",
        });
      }
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("An error occurred. Please try again later.", {
        position: "top-left",
        icon: false,
        className: "custom-toast",
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <ToastContainer /> 
      <section className={styles.contactMain}>
        <div className={styles.contatctSection}>
          <div className={styles.content}>
            {isSubmitted ? (
              <ThankYou message={messageResponse} />
            ) : (
              <div>
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={100}
                      className={styles.inputField}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      className={styles.inputField}
                    />
                  </div>

                  <div>
                    <label>⁠Reason for Therapy</label>
                    <textarea
                      id="textarea"
                      required
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit"} {/* Show loader text */}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
