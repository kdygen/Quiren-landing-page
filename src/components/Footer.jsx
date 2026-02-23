import { motion } from "framer-motion";
import { Music } from "lucide-react";

function Footer({ t, activeAccent }) {
    const headingText = activeAccent.ui.footer.heading;
    const bodyText = activeAccent.ui.footer.body;
    const linkHover = activeAccent.ui.footer.linkHover;

    return (
        <footer
            className={`border-t border-[color:var(--accent-border)] py-12 px-4 ${activeAccent.ui.footer.section}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-8 mb-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2))] flex items-center justify-center">
                                <Music className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold ${headingText}`}>Quimen</span>
                        </div>
                        <p className={`text-sm ${bodyText}`}>{t.tagline}</p>
                    </div>

                    <div className="space-y-3">
                        <h4 className={`font-semibold ${headingText}`}>Product</h4>
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
                        <h4 className={`font-semibold ${headingText}`}>Community</h4>
                        <a
                            href="#"
                            className={`block text-sm ${bodyText} ${linkHover} transition-colors`}
                        >
                            Contact
                        </a>
                    </div>

                    <div className="space-y-3">
                        <h4 className={`font-semibold ${headingText}`}>Legal</h4>
                        <a
                            href="#"
                            className={`block text-sm ${bodyText} ${linkHover} transition-colors`}
                        >
                            Privacy Policy
                        </a>
                    </div>
                </motion.div>

                <div
                    className={`border-t border-[color:var(--accent-border)] pt-8 text-center text-sm ${bodyText}`}
                >
                    <p>© 2026 Quimen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
