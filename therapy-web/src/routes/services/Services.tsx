import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import JourneySection from "../../components/JourneySection/JourneySection";
import OurServices from "../../components/OurServices/OurServices";
import ServicesSection from "../../components/ServiceSection/ServiceSecxtion";
import IndividualTherapy from "../../components/OurServices/OurServices";
import "./Services.scss";

const Services = () => {
  return <>

   {/* <HomeCareSection/> */}
  <IndividualTherapy/>
   <OurServices/>
   <ServicesSection isCarousel ={false}/>
   <GuidingPrinciples/>
   <AppointmentForm/> 
   < JourneySection/>

  </>
};

export default Services;
