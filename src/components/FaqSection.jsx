import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function FaqSection({ t, accentTheme, expandedFaq, setExpandedFaq }) {
    return (
        <section
            id="faq"
            className={`relative py-20 px-4 ${accentTheme === "bw"
                ? "bg-gray-50 border-b border-gray-100"
                : "bg-gradient-to-b from-stone-950/70 to-stone-900/50"
                }`}
        >
            <div className="max-w-3xl mx-auto">
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
                        {t.faqTitle}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {t.faqs.map((faq, idx) => (
                        <motion.div
                            key={faq.q}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="border border-[color:var(--accent-border)] rounded-lg overflow-hidden hover:border-white transition-all"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setExpandedFaq(expandedFaq === idx ? -1 : idx)
                                }
                                className={`w-full p-6 ${accentTheme === "bw"
                                    ? "bg-white hover:bg-gray-50"
                                    : "bg-stone-800/50 hover:bg-stone-800"
                                    } transition-all flex items-center justify-between group`}
                            >
                                <span
                                    className={`text-lg font-semibold text-left ${accentTheme === "bw" ? "text-black" : "text-white"
                                        }`}
                                >
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: expandedFaq === idx ? "auto" : 0,
                                    opacity: expandedFaq === idx ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div
                                    className={`p-6 ${accentTheme === "bw" ? "bg-gray-50" : "bg-stone-900/50"
                                        } border-t border-[color:var(--accent-border)] text-[color:var(--accent-text)]`}
                                >
                                    {faq.a}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default FaqSection;
