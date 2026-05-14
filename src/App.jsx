import { useState } from "react";
import { translations, languages, accentThemes } from "./data/content";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InstrumentSection from "./components/InstrumentSection";
import TechSection from "./components/TechSection";
import LMSSection from "./components/LMSSection";
import AudienceSection from "./components/AudienceSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("RU");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLanguage] || translations.RU;
  const activeAccent = accentThemes[0];

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${activeAccent.pageBackground}`}
      style={{
        "--accent-1": activeAccent.primary,
        "--accent-2": activeAccent.secondary,
        "--accent-soft": activeAccent.soft,
        "--accent-border": activeAccent.border,
        "--accent-shadow": activeAccent.shadow,
        "--accent-text": activeAccent.text,
      }}
    >
      <Navbar
        t={t}
        activeAccent={activeAccent}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        languages={languages}
      />
      <HeroSection t={t} activeAccent={activeAccent} />
      <AboutSection t={t} activeAccent={activeAccent} />
      <InstrumentSection t={t} activeAccent={activeAccent} />
      <TechSection t={t} />
      <LMSSection t={t} />
      <AudienceSection t={t} activeAccent={activeAccent} />
      <CTASection t={t} activeAccent={activeAccent} />
      <Footer t={t} activeAccent={activeAccent} />
    </div>
  );
}

export default App;