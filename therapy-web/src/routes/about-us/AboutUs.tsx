import AboutSection from "../../components/AboutSection/About";
import GoalsMissionVision from "../../components/GoalsMissionVision/GoalsMissionVision";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import HomeCareSection from "../../components/HomeCareSection/HomeCareSection";
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
   <JourneySection/>
  </>
};
export default AboutUs;
