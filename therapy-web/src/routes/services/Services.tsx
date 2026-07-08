import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import JourneySection from "../../components/JourneySection/JourneySection";
import IndividualTherapy from "../../components/OurServices/OurServices";
import "./Services.scss";
import TherapySupport from "../../components/therapySupport/TherapySupport";
import TherapyProcess from "../../components/GuidingPrinciples/GuidingPrinciples";
import WhoWeSupport from "../../components/WhoWesupport/WhoWeSupport";

const Services = () => {
  return <>
<TherapySupport/>
   {/* <HomeCareSection/> */}
  <IndividualTherapy/>
 <WhoWeSupport/>
   {/* <OurServices/> */}
   {/* <ServicesSection isCarousel ={false}/> */}
   <TherapyProcess/>
   <AppointmentForm/> 
   < JourneySection/>

  </>
};

export default Services;
