import { ContactUs } from '@/components/ContactUs';
import Event from '@/components/Event';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { InfoSection } from '@/components/InfoSection';
import Sponsors from '@/components/Sponsors';
import { Team } from '@/components/Team';

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <HeroSection />
      <InfoSection />
      <Event />
      <Sponsors />
      <Team />
      <ContactUs />
      <Footer />
    </main>
  );
}
