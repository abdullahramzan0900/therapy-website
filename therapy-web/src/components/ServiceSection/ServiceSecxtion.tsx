import React from "react";
import Slider from "react-slick";
import styles from "./ServiceSection.module.scss";
import individualTherapy from "../../assets/individualtherapy.jpg";
import lowcosttherapy from "../../assets/lowcosttherapyy.jpg";
import freeconsulation from "../../assets/freeconsulation.png";

const services = [
  { title: "personalized individual therapy", image: individualTherapy },
  { title: "supportive couples counseling", image: lowcosttherapy },
  { title: "youth and adolescent counseling", image: freeconsulation },
  { title: "family counseling", image: lowcosttherapy },
  { title: "grief support therapy", image: individualTherapy },
  { title: "stress management", image: freeconsulation },
];

const Services = ({ isCarousel  }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <p className={styles.subtitle}>● SERVICES</p>
        <h2 className={styles.heading}>
          Comprehensive services care <br /> for mind and wellness
        </h2>

        {isCarousel ? (
          <Slider {...sliderSettings} className={styles.carousel}>
  {services.map((service, index) => (
    <div key={index} className={styles.slideWrapper}>
      <div className={styles.serviceCard}>
        <img src={service.image} alt={service.title} className={styles.image} />
        <div className={styles.overlay}>
          <p>{service.title}</p>
          <a href="#" className={styles.readMore}>
            Read More →
          </a>
        </div>
      </div>
    </div>
  ))}
</Slider>

        ) : (
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <img src={service.image} alt={service.title} className={styles.image} />
                <div className={styles.overlay}>
                  <p>{service.title}</p>
                  <a href="#" className={styles.readMore}>
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonWrapper}>
          <button className={styles.viewAllButton}>View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
