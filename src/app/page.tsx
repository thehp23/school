import CurriculumSection from "./components/section/CurriculumSection";
import FeatureGrid from "./components/section/FeatureGrid";
import Trustt from "./components/section/Turstt";
import ImageSlider from "./components/slider/ImageSlider";
import SkillsSlider from "./components/slider/SkillsSlider";


export default function Home() {
  return (
    <main>
      <ImageSlider />
      <Trustt />
      <FeatureGrid />
      <CurriculumSection />
      <SkillsSlider/>
    </main>
  );
}