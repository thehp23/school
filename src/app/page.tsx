import Footer from "./components/Footer";
import CurriculumSection from "./components/section/CurriculumSection";
import FeatureGrid from "./components/section/FeatureGrid";
import JourneySection from "./components/section/JourneySection";
import StatsSection from "./components/section/StatsSection";
import Trustt from "./components/section/Turstt";
import VoicesOfTrust from "./components/section/VoicesOfTrust";
import ImageSlider from "./components/slider/ImageSlider";
import LearningSlider from "./components/slider/LearningSlider";
import SkillsSlider from "./components/slider/SkillsSlider";
import StepSection from "./components/slider/StepSection";


export default function Home() {
  return (
    <main>
      <ImageSlider />
      <Trustt />
      <FeatureGrid />
      <CurriculumSection />
      <SkillsSlider/>
      <JourneySection/>
      <LearningSlider/>
      <StepSection/>
      <StatsSection/>
      <VoicesOfTrust/>
      <Footer/>
    </main>
  );
}