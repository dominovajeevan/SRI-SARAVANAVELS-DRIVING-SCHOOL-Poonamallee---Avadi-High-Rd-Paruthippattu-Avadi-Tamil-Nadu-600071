import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroStats } from './components/HeroStats';
import { About } from './components/About';
import { SchoolPhotos } from './components/SchoolPhotos';
import { Services } from './components/Services';
import { Courses } from './components/Courses';
import { LearningProcess } from './components/LearningProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { BusinessInfo } from './components/BusinessInfo';
import { LocationMap } from './components/LocationMap';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#27232A] flex flex-col font-sans selection:bg-[#C9A86A] selection:text-[#27232A] overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <HeroStats />
        <About />
        <SchoolPhotos />
        <Services />
        <Courses />
        <LearningProcess />
        <WhyChooseUs />
        <Reviews />
        <BusinessInfo />
        <LocationMap />
        <FAQ />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar on Mobile */}
      <MobileActionBar />

      {/* Fixed WhatsApp Floating Chat Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
