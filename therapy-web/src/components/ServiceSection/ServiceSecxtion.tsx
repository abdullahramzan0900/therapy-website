
import Slider from "react-slick";
import styles from "./ServiceSection.module.scss";
import individualTherapy from "../../assets/individualtherapy.jpg";
import lowcosttherapy from "../../assets/image2.jpeg";
import freeconsulation from "../../assets/image7.jpeg";
import buttonstyles from '../../components/styles/button.module.scss'
import image8 from '../../assets/image8.jpg'
import image9 from '../../assets/image9.jpg'
import couplesimage from '../../assets/couplesimage.jpg'
import { useNavigate } from "react-router-dom";

const services = [
  { title: "personalized individual therapy", image: individualTherapy },
  { title: "supportive couples counseling", image: couplesimage },
  { title: "youth and adolescent counseling", image: freeconsulation },
  { title: "family counseling", image: image9 },
  { title: "grief support therapy", image: image8 },
  { title: "stress management", image: lowcosttherapy },
];

interface ServicesProps {
  isCarousel: boolean;
}

const Services = ({ isCarousel }: ServicesProps) => {
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
  const navigate = useNavigate(); // Initialize the useNavigate hook
  

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
          <p style={{
            color: "white"
          }}>{service.title}</p>
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

          {isCarousel && (
        <div className={styles.buttonWrapper}>
          <button onClick={()=>{
            navigate("/services")
          }}  className={buttonstyles.primary}>View All Services</button>
        </div>
)}

      </div>
    </section>
  );
};

export default Services;
