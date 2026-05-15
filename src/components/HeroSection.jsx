import { motion } from "framer-motion";

function Hero({ t, activeAccent }) {
    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);

        if (!target) return;

        const offset = 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetTop,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative min-h-screen flex items-start sm:items-center justify-center md:justify-end pt-24 sm:pt-20 pb-10 sm:pb-12 px-4 overflow-hidden">
            <div className="absolute inset-0 w-full h-full left-0 hidden md:block">
                <img
                    src={`${import.meta.env.BASE_URL}quimen2.webp`}
                    alt="Quimen"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center md:object-left"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-2xl w-full mx-auto md:mx-0 md:mr-20 lg:mr-32 text-left space-y-4 sm:space-y-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 ${activeAccent.ui.hero.badge} border rounded-full`}
                >
                    <span className="text-white text-xs sm:text-sm font-medium">
                        {t.pilotBadge}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bold leading-tight text-white text-xl sm:text-4xl md:text-5xl lg:text-[52px]"
                    style={{ textShadow: "0 4px 16px rgba(0,0,0,0.5)" }}
                >
                    {t.heroTitle}{" "}
                    <span className="text-[#f6d36b] drop-shadow-[0_0_20px_rgba(246,211,107,0.75)]">
                        {t.heroSubtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-sm sm:text-base md:text-xl text-white leading-relaxed"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
                >
                    {t.heroDescription}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <motion.button
                        type="button"
                        onClick={() => scrollToSection("cta")}
                        className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-[#1A1510] text-sm sm:text-base font-semibold shadow-[0_8px_32px_rgba(255,255,255,0.2)] border border-white hover:bg-gray-50 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-fit inline-flex items-center justify-center gap-2 group"
                    >
                        <span>{t.ctaButton}</span>
                        <span className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                            ›
                        </span>
                    </motion.button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("about")}
                        className="px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-[#F5E4C3]/30 bg-white/5 text-[#FDFAF5] text-sm sm:text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-[#F5E4C3]/10 hover:border-[#F5E4C3]/60 hover:text-white w-full sm:w-auto"
                    >
                        {t.learnMore}
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;
