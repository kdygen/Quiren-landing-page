import { useState } from "react";
import { translations, languages, accentThemes } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhySection from "./components/WhySection";
import TechSection from "./components/TechSection";
import AudienceSection from "./components/AudienceSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("RU");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(-1);

  const t = translations[currentLanguage] || translations.RU;
  const activeAccent = accentThemes[0];

  return (
    <div
      className={`min-h-screen overflow-hidden ${activeAccent.pageBackground}`}
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
      <Hero t={t} activeAccent={activeAccent} />
      <AboutSection t={t} activeAccent={activeAccent} />
      <WhySection t={t} activeAccent={activeAccent} />
      <TechSection t={t} activeAccent={activeAccent} />
      <AudienceSection t={t} activeAccent={activeAccent} />
      <FaqSection
        t={t}
        activeAccent={activeAccent}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />
      <CtaSection t={t} activeAccent={activeAccent} />
      <Footer t={t} activeAccent={activeAccent} />
    </div>
  );
}

export default App;