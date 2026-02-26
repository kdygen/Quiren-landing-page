import { motion } from "framer-motion";

function TechSection({ t, activeAccent }) {
    return (
        <section
            id="tech"
            className={`relative py-14 sm:py-20 px-4 ${activeAccent.ui.tech.section}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${activeAccent.ui.tech.heading}`}
                    >
                        {t.techTitle}
                    </h2>
                    <p className="text-base sm:text-lg text-[color:var(--accent-text)] max-w-2xl mx-auto">
                        {t.techDescription}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-4 sm:gap-6"
                >
                    {t.tech.map((tech) => (
                        <motion.div
                            key={tech.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`p-5 sm:p-8 rounded-2xl ${activeAccent.ui.tech.card} border border-[color:var(--accent-border)] hover:border-white transition-all duration-300`}
                        >
                            <h3
                                className={`text-lg sm:text-xl font-bold mb-3 ${activeAccent.ui.tech.cardHeading}`}
                            >
                                {tech.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[color:var(--accent-text)]">{tech.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default TechSection;
