import { motion } from "framer-motion";
import { Users } from "lucide-react";

function AudienceSection({ t, activeAccent }) {
    return (
        <section
            id="audience"
            className={`relative py-20 px-4 ${activeAccent.ui.audience.section}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 ${activeAccent.ui.audience.heading}`}
                    >
                        {t.audienceTitle}
                    </h2>
                    <p className="text-lg text-[color:var(--accent-text)] max-w-2xl mx-auto">
                        {t.audienceDescription}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {t.audience.map((aud) => (
                        <motion.div
                            key={aud.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl overflow-hidden group ${activeAccent.ui.audience.card}`}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--accent-soft),rgba(0,0,0,0))] group-hover:bg-[linear-gradient(135deg,var(--accent-soft),var(--accent-soft))] transition-all" />
                            <div className="absolute inset-0 border border-[color:var(--accent-border)] group-hover:border-white transition-all rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2))] p-2.5 mb-4">
                                    <Users className="w-full h-full text-white" />
                                </div>
                                <h3
                                    className={`text-xl font-bold mb-3 ${activeAccent.ui.audience.cardHeading}`}
                                >
                                    {aud.title}
                                </h3>
                                <p className="text-[color:var(--accent-text)]">{aud.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default AudienceSection;
