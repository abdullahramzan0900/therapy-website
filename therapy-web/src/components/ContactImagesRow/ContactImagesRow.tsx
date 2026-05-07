import React from "react";
import styles from "./ContactImagesRow.module.scss";
import image1 from '../../assets/trauma1.jpeg'
import image2 from '../../assets/trauma2.jpeg'
import image3 from '../../assets/trauma3.jpeg'


const ContactImagesRow: React.FC = () => {
  const images = [
    {
      src: image1,
      alt: "Compassionate Care",
    },
    {
      src: image2,
      alt: "Confidential Support",
    },
    {
      src: image3,
      alt: "Affordable Therapy",
    },
  ];

  return (
    <section className={styles.imagesSection}>
      <div className={styles.imagesGrid}>
        {images.map((image, index) => (
          <div className={styles.imageCard} key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactImagesRow;