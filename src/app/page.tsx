import Event from '@/components/Event';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { InfoSection } from '@/components/InfoSection';
import { Team } from '@/components/Team';

export default function Home() {
  return (
    <main className='bg-black'>
      <HeroSection />
      <InfoSection />
      <Event />
      <Team />
      <Footer />
    </main>
  );
}
