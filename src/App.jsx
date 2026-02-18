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
  const [accentTheme, setAccentTheme] = useState("sunset");

  const t = translations[currentLanguage] || translations.RU;
  const activeAccent =
    accentThemes.find((theme) => theme.id === accentTheme) || accentThemes[0];

  return (
    <div
      className={`min-h-screen overflow-hidden ${accentTheme === "bw"
          ? "bg-white text-black"
          : "bg-gradient-to-br from-stone-900 via-stone-950 to-stone-800 text-white"
        }`}
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
        accentTheme={accentTheme}
        accentThemes={accentThemes}
        setAccentTheme={setAccentTheme}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        languages={languages}
      />
      <Hero t={t} accentTheme={accentTheme} />
      <AboutSection t={t} accentTheme={accentTheme} />
      <WhySection t={t} accentTheme={accentTheme} />
      <TechSection t={t} accentTheme={accentTheme} />
      <AudienceSection t={t} accentTheme={accentTheme} />
      <FaqSection
        t={t}
        accentTheme={accentTheme}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />
      <CtaSection t={t} accentTheme={accentTheme} />
      <Footer t={t} accentTheme={accentTheme} />
    </div>
  );
}

export default App;