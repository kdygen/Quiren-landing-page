import { motion } from "framer-motion";

function AboutSection({ t, activeAccent }) {
    return (
        <section
            id="about"
            className={`relative py-20 px-4 ${activeAccent.ui.about.section}`}
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
                            className={`text-4xl md:text-5xl font-bold ${activeAccent.ui.about.heading}`}
                        >
                            {t.aboutTitle}
                        </h2>
                        <p className="text-lg text-[color:var(--accent-text)] leading-relaxed">
                            {t.aboutDescription}
                        </p>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className={`inline-flex items-center gap-2 group ${activeAccent.ui.about.learnMore} transition-colors font-semibold`}
                        >
                            <span>{t.learnMore}</span>
                            <span className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                                ›
                            </span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative h-96 rounded-2xl overflow-hidden ${activeAccent.ui.about.mediaCard} border border-[color:var(--accent-border)] flex items-center justify-center`}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}image.png`}
                            alt={t.cardLessonText}
                            className="h-full w-full object-cover scale-[1.2] -translate-y-8 translate-x-4"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
