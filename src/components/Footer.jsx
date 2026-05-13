import { motion } from "framer-motion";

function Footer({ t, activeAccent }) {
    const headingText = activeAccent.ui.footer.heading;
    const bodyText = activeAccent.ui.footer.body;
    const linkHover = activeAccent.ui.footer.linkHover;

    return (
        <footer
            className={`border-t border-[color:var(--accent-border)] py-10 sm:py-12 px-4 sm:px-6 ${activeAccent.ui.footer.section}`}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className={`font-bold ${headingText}`}>Quimen</span>
                        </div>
                        <p className={`text-sm ${bodyText}`}>{t.tagline}</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className={`font-semibold ${headingText}`}>{t.footerProduct}</h3>
                        {t.navigation.slice(0, 3).map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block text-sm ${bodyText} ${linkHover} transition-colors`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-3">
                        <h3 className={`font-semibold ${headingText}`}>{t.footerCommunity}</h3>
                        <a
                            href="#"
                            className={`block text-sm ${bodyText} ${linkHover} transition-colors`}
                        >
                            {t.footerContact}
                        </a>
                    </div>

                    <div className="space-y-3">
                        <h3 className={`font-semibold ${headingText}`}>{t.footerLegal}</h3>
                        <a
                            href="#"
                            className={`block text-sm ${bodyText} ${linkHover} transition-colors`}
                        >
                            {t.footerPrivacy}
                        </a>
                    </div>
                </motion.div>

                <div
                    className={`border-t border-[color:var(--accent-border)] pt-6 sm:pt-8 text-center text-sm ${bodyText}`}
                >
                    <p>{t.footerCopyright}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
