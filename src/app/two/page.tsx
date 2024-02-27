import { ContactUs } from '@/components/ContactUs';
import Event from '@/components/Event';
import Footer from '@/components/Footer';
import HeroSection2 from '@/components/HeroSection/HeroSection2';
import { InfoSection } from '@/components/InfoSection';
import Sponsors from '@/components/Sponsors';
import { Team } from '@/components/Team';

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <HeroSection2 />
      <InfoSection />
      <Event />
      <Sponsors />
      <Team />
      <ContactUs />
      <Footer />
    </main>
  );
}
