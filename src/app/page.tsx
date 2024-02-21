import Footer from '@/components/Footer';
import { DotBackground, GridBackground } from '@/components/GridBackground';
import { HeroSection } from '@/components/HeroSection';
import { InfoSection } from '@/components/InfoSection';
import { Team } from '@/components/Team';
import { TechnicalEvents } from '@/components/TechnicalEvents';

export default function Home() {
  return (
    <main className='bg-black'>
      <HeroSection />
      <InfoSection />
      <GridBackground />
      <TechnicalEvents />
      <DotBackground />
      <TechnicalEvents />
      <Team />
      <Footer />
    </main>
  );
}
