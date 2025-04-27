
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import GoalsMissionVision from "../../components/GoalsMissionVision/GoalsMissionVision";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import JourneySection from "../../components/JourneySection/JourneySection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeAboutSection";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import "./AboutUs.scss";

const AboutUs = () => {
  return <>
   <WelcomeSection/>
   <GoalsMissionVision/>
   <WhatWeOffer/>
   <GuidingPrinciples/>
   <AppointmentForm/>
   <JourneySection/>
  </>
};
export default AboutUs;
