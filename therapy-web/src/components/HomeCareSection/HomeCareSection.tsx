import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import styles from "./HomeCareSection.module.scss";
import data from "../../data/data.json";

const HomeCareSection = () => {
  const homeCareData = data.components.HomeCareData;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loader state

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email); // Checks if email contains '@' and '.'
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.error("Email is required!", { position: "top-left", icon: false, className: "custom-toast" });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format!", { position: "top-left", icon: false, className: "custom-toast" });
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch("https://ncptherapyback.netlify.app/.netlify/functions/server/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you for contacting us! We will reach out soon.", {
          position: "top-left",
          icon: false,
          className: "custom-toast",
        });
        setEmail(""); // Clear input
      } else {
        toast.error(result.message || "Something went wrong.", {
          position: "top-left",
          icon: false,
          className: "custom-toast",
        });
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Failed to send. Please try again.", {
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
      <section className={styles.homeCareMain}>
        <div className={styles.homeCareSection}>
          <div className={styles.content}>
            <h1>
              {homeCareData.title.split(" ")[0]} <span>{homeCareData.titleHighlight}</span>
            </h1>
            <p>{homeCareData.description}</p>

            <div className={styles.emailInput}>
              <input
                type="email"
                placeholder={homeCareData.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Submitting..." : homeCareData.buttonText}
              </button>
            </div>
          </div>

          <div className={styles.visuals}>
            <div className={styles.imageWrapper}>
              <img
                src={homeCareData.imageSrc}
                alt={homeCareData.imageAlt}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCareSection;
