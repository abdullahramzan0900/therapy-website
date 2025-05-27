import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import JourneySection from "../../components/JourneySection/JourneySection";
import IndividualTherapy from "../../components/OurServices/OurServices";
import "./Services.scss";
import TherapySupport from "../../components/therapySupport/TherapySupport";

const Services = () => {
  return <>
<TherapySupport/>
   {/* <HomeCareSection/> */}
  <IndividualTherapy/>
   {/* <OurServices/> */}
   {/* <ServicesSection isCarousel ={false}/> */}
   <GuidingPrinciples/>
   <AppointmentForm/> 
   < JourneySection/>

  </>
};

export default Services;
