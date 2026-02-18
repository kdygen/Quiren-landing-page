import { motion } from "framer-motion";
import { Zap } from "lucide-react";

function WhySection({ t, accentTheme }) {
    return (
        <section
            id="why"
            className={`relative py-20 px-4 ${accentTheme === "bw" ? "bg-white border-b border-gray-100" : ""
                }`}
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
                        className={`text-4xl md:text-5xl font-bold mb-6 ${accentTheme === "bw" ? "text-black" : "text-white"
                            }`}
                    >
                        {t.whyTitle}
                    </h2>
                    <p className="text-lg text-[color:var(--accent-text)] max-w-2xl mx-auto">
                        {t.whyDescription}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {t.benefits.map((benefit) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl ${accentTheme === "bw"
                                    ? "bg-white shadow-sm"
                                    : "bg-gradient-to-br from-stone-800/60 to-stone-900/60"
                                } border border-[color:var(--accent-border)] hover:border-[color:var(--accent-1)] transition-all duration-300 group cursor-pointer`}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2))] p-3 mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="w-full h-full text-white" />
                            </div>
                            <h3
                                className={`text-xl font-bold mb-3 ${accentTheme === "bw" ? "text-black" : "text-white"
                                    }`}
                            >
                                {benefit.title}
                            </h3>
                            <p className="text-[color:var(--accent-text)]">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default WhySection;
