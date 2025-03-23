import "./Home.scss";
import HomeCareSection from "../../components/HomeCareSection/HomeCareSection";
import AboutSection from "../../components/AboutSection/About";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import ServicesSection from "../../components/ServiceSection/ServiceSecxtion";
import Testimonials from "../../components/Testimonials/Testimonials";
import JourneySection from "../../components/JourneySection/JourneySection";
import WhyChooseUs from "../../components/whychooseus/whychooseus";
import LowCostCounselling from "../../components/LowCostCounselling/LowCostCounselling";


const Home = () => {
  return <>

<HomeCareSection/>
<AboutSection/>
<GuidingPrinciples/>
<ServicesSection showAll={false}/>
<WhyChooseUs/>
<LowCostCounselling/>
<Testimonials/>
<JourneySection/>

  </>;
};
export default Home;
