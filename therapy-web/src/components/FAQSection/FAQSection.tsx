import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import styles from "./FAQSection.module.scss";
import buttonstyles from '.././styles/button.module.scss'
import { useNavigate } from "react-router-dom";

const faqs = [
  { question: "What is mental therapy, and how can it help me?", answer: "Mental therapy helps individuals understand their emotions, develop coping strategies, and improve their overall mental well-being." },
  { question: "What if I don't feel a connection with my therapist?", answer: "It’s important to find the right therapist. If you don’t feel connected, consider discussing your concerns or finding another therapist who suits your needs." },
  { question: "What should I expect in my first session?", answer: "Your first session typically involves discussing your concerns, goals, and background to help your therapist understand your situation better." },
  { question: "Will therapy be covered by my insurance?", answer: "Insurance coverage varies. It's best to check with your provider to see if therapy sessions are included." },
  { question: "How long does therapy usually take?", answer: "The duration varies based on individual needs, but therapy can range from a few sessions to several months or longer." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook                

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      {/* Title */}
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

      <div className={styles.faqContainer}>
        {/* FAQ List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button onClick={() => toggleFAQ(index)} className={styles.faqQuestion}>
                {faq.question}
                <span className={`${styles.faqIcon} ${openIndex === index ? styles.open : ""}`}>+</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={styles.faqAnswer}
              >
                {faq.answer}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className={styles.contactBox}>
          <div className={styles.avatars}>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User 1" />
            <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="User 2" />
            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="User 3" />
            <img src="https://randomuser.me/api/portraits/women/48.jpg" alt="User 4" />
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>Still have questions?</p>
            <p className={styles.phoneNumber}>
              <PhoneCall size={20} />
              +01 789 859 664
            </p>
            <button onClick={()=>{
            navigate('/contact-us')
            }} className={buttonstyles.primary}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
