import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero({ t, activeAccent }) {
    return (
        <section className="relative min-h-screen flex items-center justify-end pt-20 px-4 overflow-hidden">
            <div className="absolute inset-0 w-full h-full left-0">
                <img
                    src={`${import.meta.env.BASE_URL}quimen2.png`}
                    alt="Quimen"
                    className="w-full h-full object-cover object-left"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-2xl w-full md:mr-20 lg:mr-32 text-left space-y-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 ${activeAccent.ui.hero.badge} border rounded-full`}
                >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                        {t.pilotBadge}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bold leading-tight text-white"
                    style={{ fontSize: "52px", textShadow: "0 4px 16px rgba(0,0,0,0.5)" }}
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
                    className="text-lg md:text-xl text-white leading-relaxed"
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
                    <motion.button className="group px-8 py-4 bg-white text-black font-semibold rounded-lg border border-white/20 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 w-fit backdrop-blur-sm">
                        {t.ctaButton}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg transition-colors hover:bg-[#fef3c7]/20 hover:border-[#fef3c7]">
                        {t.learnMore}
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;
