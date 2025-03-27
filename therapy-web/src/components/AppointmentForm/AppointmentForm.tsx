import { useState } from "react";
import { CalendarIcon, PhoneCall } from "lucide-react";
import styles from "./AppointmentForm.module.scss";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>Make an appointment</h2>
          <p className={styles.subtitle}>
            Schedule your handyman service with ease. Choose a date and time that works best for you.
          </p>

          <div className={styles.inputGrid}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={styles.inputField} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={styles.inputField} />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={styles.inputField} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={styles.inputField} />
            <select name="service" value={formData.service} onChange={handleChange} className={styles.inputField}>
              <option value="">— Please choose an option</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="carpentry">Carpentry</option>
            </select>
            <div className={styles.dateWrapper}>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.inputField} />
              <CalendarIcon className={styles.calendarIcon} size={18} />
            </div>
          </div>

          <button className={styles.bookButton}>Book An Appointment</button>
        </div>

        {/* Contact Info Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactItem}>
            <PhoneCall size={24} className={styles.icon} />
            <div>
              <p className={styles.label}>Customer Services</p>
              <p className={styles.value}>+91 - 123 456 7890</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.hoursIcon}>24</div>
            <div>
              <p className={styles.label}>Opening Hours</p>
              <p className={styles.value}>Mon - Sat (09:00 - 21:00)</p>
              <p className={styles.note}>Sunday (Closed)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
