import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Hero({ t }) {
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
                >
                    <Badge
                        variant="outline"
                        className="h-auto max-w-full gap-2 whitespace-normal rounded-md border-border bg-background/60 px-3 py-1.5 text-left font-display text-[9px] font-light uppercase leading-snug tracking-[0.14em] text-copy backdrop-blur-sm sm:text-[10px] sm:tracking-[0.2em]"
                    >
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        {t.pilotBadge}
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bold leading-tight text-foreground md:text-white md:[text-shadow:0_4px_16px_rgba(0,0,0,0.5)] text-xl sm:text-4xl md:text-5xl lg:text-[52px]"
                >
                    {t.heroTitle}{" "}
                    <span className="text-gold-soft">
                        {t.heroSubtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-sm sm:text-base md:text-xl text-copy md:text-white md:[text-shadow:0_2px_8px_rgba(0,0,0,0.4)] leading-relaxed"
                >
                    {t.heroDescription}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 pt-4"
                >
                    <Button
                        type="button"
                        size="lg"
                        onClick={() => scrollToSection("cta")}
                        className="group h-12 w-full bg-foreground px-7 text-sm font-semibold text-background hover:bg-foreground/90 sm:w-fit sm:text-base md:bg-[#1c150c] md:text-[#fff8ec] md:hover:bg-[#2c2217]"
                    >
                        {t.ctaButton}
                        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Button>
                    <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={() => scrollToSection("about")}
                        className="h-12 w-full border-foreground/25 bg-transparent px-7 text-sm font-semibold text-foreground hover:border-foreground/45 hover:bg-foreground/5 hover:text-foreground sm:w-auto sm:text-base dark:border-foreground/25 dark:bg-transparent dark:hover:bg-foreground/5 md:border-white/70 md:bg-white/10 md:text-white md:backdrop-blur-sm md:hover:bg-white/20 md:hover:text-white md:dark:border-white/70 md:dark:bg-white/10 md:dark:hover:bg-white/20"
                    >
                        {t.learnMore}
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;
