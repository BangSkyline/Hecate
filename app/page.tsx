
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import PartnersSection from '../components/PartnersSection';
import SolutionsSection from '../components/SolutionsSection';
import BenchmarkSection from '../components/BenchmarkSection';
import PlatformSection from '../components/PlatformSection';
import ScienceSection from '../components/ScienceSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <MissionSection />
        <PartnersSection />
        <SolutionsSection />
        <BenchmarkSection />
        <PlatformSection />
        <ScienceSection />
      </main>
    </div>
  );
}
