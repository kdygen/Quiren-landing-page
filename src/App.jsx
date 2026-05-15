import { useState, useEffect } from "react";
import { RU } from "./data/translations-ru.js";
import { languages, accentThemes } from "./data/content";
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
  const [allTranslations, setAllTranslations] = useState({ RU });

  useEffect(() => {
    // Skip RU since it's already in initial state
    if (currentLanguage === "RU") return;

    // Load other languages dynamically
    const loadLanguage = async () => {
      if (!allTranslations[currentLanguage]) {
        try {
          const module = await import(`./data/translations-${currentLanguage.toLowerCase()}.js`);
          setAllTranslations((prev) => ({ ...prev, [currentLanguage]: module[currentLanguage] }));
        } catch (error) {
          console.warn(`Failed to load language ${currentLanguage}:`, error);
        }
      }
    };
    loadLanguage();
  }, [currentLanguage, allTranslations]);

  const t = allTranslations[currentLanguage] || allTranslations.RU;
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