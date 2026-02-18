import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";

function AboutSection({ t, accentTheme }) {
    return (
        <section
            id="about"
            className={`relative py-20 px-4 ${accentTheme === "bw"
                    ? "bg-gray-50 border-b border-gray-100"
                    : "bg-gradient-to-b from-stone-950/70 to-stone-900/50"
                }`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${accentTheme === "bw" ? "text-black" : "text-white"
                                }`}
                        >
                            {t.aboutTitle}
                        </h2>
                        <p className="text-lg text-[color:var(--accent-text)] leading-relaxed">
                            {t.aboutDescription}
                        </p>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className={`inline-flex items-center gap-2 ${accentTheme === "bw"
                                    ? "text-black hover:text-gray-700"
                                    : "text-[color:var(--accent-1)] hover:text-white"
                                } transition-colors font-semibold`}
                        >
                            {t.learnMore}
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative h-96 rounded-2xl overflow-hidden ${accentTheme === "bw"
                                ? "bg-white shadow-sm"
                                : "bg-gradient-to-br from-stone-900 to-stone-800"
                            } border border-[color:var(--accent-border)] flex items-center justify-center`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
                        <div className="relative z-10 text-center">
                            <Flame className="w-24 h-24 text-[color:var(--accent-border)] mx-auto mb-4" />
                            <p className="text-[color:var(--accent-2)] font-semibold">
                                {t.cardLessonText}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
