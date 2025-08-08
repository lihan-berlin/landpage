import { HeroSection } from '../components/sections/hero';
import { ModulesSection } from '../components/sections/modules';
import { ContactSection } from '../components/sections/contact';
import { FooterSection } from '../components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ModulesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
} 