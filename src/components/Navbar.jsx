import { motion } from "framer-motion";

function Navbar({
    t,
    activeAccent,
    currentLanguage,
    setCurrentLanguage,
    mobileMenuOpen,
    setMobileMenuOpen,
    languages,
}) {
    const navigationItems = t?.navigation ?? [];
    const languageItems = languages ?? [];

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-4 backdrop-blur-md ${activeAccent.ui.navbar.background} border-b border-[color:var(--accent-border)]`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}quimenlogo.png`}
                            alt="Quimen"
                            className="h-8 w-auto"
                        />
                    </motion.div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navigationItems.map((item, i) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`${activeAccent.ui.navbar.navLink} transition-colors text-sm font-medium`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <label htmlFor="language-select" className="sr-only">
                            Language
                        </label>
                        <select
                            id="language-select"
                            value={currentLanguage}
                            onChange={(event) => setCurrentLanguage(event.target.value)}
                            className={`text-xs px-3 py-2 rounded-lg border transition-colors ${activeAccent.ui.navbar.languageSelect}`}
                            aria-label="Language"
                        >
                            {languageItems.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.flag} {lang.name}
                                </option>
                            ))}
                        </select>

                        <button
                            type="button"
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="text-sm font-semibold">
                                {mobileMenuOpen ? "Close" : "Menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-[color:var(--accent-border)] py-4 space-y-3"
                    >
                        {navigationItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block transition-colors text-sm ${activeAccent.ui.navbar.navLink}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
