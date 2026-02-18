import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CtaSection({ t, accentTheme }) {
    return (
        <section
            className={`relative py-24 px-4 ${accentTheme === "bw" ? "bg-white border-b border-gray-100" : ""
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`relative rounded-3xl overflow-hidden p-12 md:p-16 ${accentTheme === "bw"
                            ? "bg-white shadow-sm"
                            : "bg-[linear-gradient(135deg,var(--accent-soft),rgba(0,0,0,0))]"
                        } border border-[color:var(--accent-border)]`}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--accent-soft)] rounded-full blur-3xl -z-0" />

                    <div className="relative z-10 text-center space-y-8">
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${accentTheme === "bw" ? "text-black" : "text-white"
                                }`}
                        >
                            {t.ctaTitle}
                        </h2>
                        <p className="text-lg text-[color:var(--accent-text)] max-w-2xl mx-auto">
                            {t.ctaDescription}
                        </p>

                        <div className="space-y-4 flex flex-col items-center">
                            {t.ctaBenefits.map((benefit, idx) => (
                                <motion.p
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`text-base font-medium ${accentTheme === "bw"
                                            ? "text-black"
                                            : "text-[color:var(--accent-1)]"
                                        }`}
                                >
                                    {benefit}
                                </motion.p>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-4 bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2))] ${accentTheme === "bw" ? "text-black" : "text-white"
                                } font-bold rounded-lg hover:shadow-2xl hover:shadow-[0_12px_30px_var(--accent-shadow)] transition-all duration-300 inline-flex items-center gap-2`}
                        >
                            {t.contactButton}
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CtaSection;
