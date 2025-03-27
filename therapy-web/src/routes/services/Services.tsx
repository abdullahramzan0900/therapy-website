import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import HomeCareSection from "../../components/HomeCareSection/HomeCareSection";
import JourneySection from "../../components/JourneySection/JourneySection";
import ServicesSection from "../../components/ServiceSection/ServiceSecxtion";
import "./Services.scss";

const Services = () => {
  return <>

   <HomeCareSection/>
   <ServicesSection isCarousel ={false}/>
   <GuidingPrinciples/>
   <AppointmentForm/> 
   < JourneySection/>

  </>
};

export default Services;
