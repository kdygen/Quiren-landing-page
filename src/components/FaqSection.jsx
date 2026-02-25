import { motion } from "framer-motion";

function FaqSection({ t, activeAccent, expandedFaq, setExpandedFaq }) {
    return (
        <section
            id="faq"
            className={`relative py-20 px-4 ${activeAccent.ui.faq.section}`}
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
                        className={`text-4xl md:text-5xl font-bold mb-6 ${activeAccent.ui.faq.heading}`}
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
                                className={`w-full p-6 ${activeAccent.ui.faq.questionButton} transition-all flex items-center justify-between group`}
                            >
                                <span
                                    className={`text-lg font-semibold text-left ${activeAccent.ui.faq.questionText}`}
                                >
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: expandedFaq === idx ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white text-3xl leading-none"
                                >
                                    ›
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
                                    className={`p-6 ${activeAccent.ui.faq.answer} border-t border-[color:var(--accent-border)] text-[color:var(--accent-text)]`}
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
