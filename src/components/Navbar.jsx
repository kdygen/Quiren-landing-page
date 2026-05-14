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
    const getLanguageLabel = (code) => {
        const normalizedCode = code.toUpperCase();
        if (normalizedCode === "EN") return "ENG";
        return normalizedCode;
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-4 sm:px-6 backdrop-blur-md ${activeAccent.ui.navbar.background} border-b border-[color:var(--accent-border)]`}
        >
            <div className="max-w-7xl mx-auto px-1 sm:px-2">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="-ml-1 sm:-ml-2 flex h-14 sm:h-16 items-center overflow-hidden"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}quimenlogo.png`}
                            alt="Quimen"
                            className="h-24 sm:h-32 w-auto max-w-none"
                        />
                    </motion.div>

                    <div className="hidden lg:flex flex-1 items-center justify-center gap-12 xl:gap-16 2xl:gap-20">
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

                    <div className="flex items-center gap-2 sm:gap-4">
                        <label htmlFor="language-select" className="sr-only">
                            Language
                        </label>
                        <div className="relative">
                            <select
                                id="language-select"
                                value={currentLanguage}
                                onChange={(event) =>
                                    setCurrentLanguage(event.target.value)
                                }
                                className={`appearance-none text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 pr-8 sm:pr-9 rounded-lg border transition-colors ${activeAccent.ui.navbar.languageSelect}`}
                                aria-label="Language"
                            >
                                {languageItems.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {getLanguageLabel(lang.code)}
                                    </option>
                                ))}
                            </select>
                            <span
                                className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"
                                aria-hidden="true"
                            >
                                <svg
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-current"
                                >
                                    <path
                                        d="M3.5 5.5L7 9L10.5 5.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>

                        <button
                            type="button"
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="text-xs sm:text-sm font-semibold">
                                {mobileMenuOpen ? t.navClose : t.navMenu}
                            </span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-[color:var(--accent-border)] py-3 sm:py-4 space-y-2 sm:space-y-3"
                    >
                        {navigationItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block py-1 transition-colors text-sm ${activeAccent.ui.navbar.navLink}`}
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
