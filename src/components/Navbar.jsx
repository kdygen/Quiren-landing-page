import { motion } from "framer-motion";
import { Menu, X, Music } from "lucide-react";

function Navbar({
    t,
    accentTheme,
    accentThemes,
    setAccentTheme,
    currentLanguage,
    setCurrentLanguage,
    mobileMenuOpen,
    setMobileMenuOpen,
    languages,
}) {
    return (
        <nav
            className={`fixed top-0 w-full z-50 backdrop-blur-md ${accentTheme === "bw" ? "bg-white/90" : "bg-stone-900/90"
                } border-b border-[color:var(--accent-border)]`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2))] flex items-center justify-center">
                            <Music className="w-5 h-5 text-white" />
                        </div>
                        <span
                            className={`text-xl font-bold ${accentTheme === "bw" ? "text-black" : "text-white"
                                }`}
                        >
                            Quimen
                        </span>
                    </motion.div>

                    <div className="hidden lg:flex items-center gap-8">
                        {t.navigation.map((item, i) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`${accentTheme === "bw"
                                    ? "text-black hover:text-gray-700"
                                    : "text-white hover:text-white"
                                    } transition-colors text-sm font-medium`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2">
                            {accentThemes.map((theme) => (
                                <button
                                    key={theme.id}
                                    type="button"
                                    onClick={() => setAccentTheme(theme.id)}
                                    className={`h-7 w-7 rounded-full border transition-all ${accentTheme === theme.id
                                        ? "border-white/70"
                                        : "border-white/20"
                                        }`}
                                    style={{
                                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                                    }}
                                    aria-label={`${theme.name} theme`}
                                />
                            ))}
                        </div>
                        <select
                            value={currentLanguage}
                            onChange={(event) => setCurrentLanguage(event.target.value)}
                            className={`text-xs px-3 py-2 rounded-lg border transition-colors ${accentTheme === "bw"
                                ? "bg-white text-black border-black/20 hover:border-black/40"
                                : "bg-stone-800 text-white border-[color:var(--accent-border)] hover:border-white"
                                }`}
                        >
                            {languages.map((lang) => (
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
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
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
                        {t.navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block transition-colors text-sm ${accentTheme === "bw"
                                    ? "text-black hover:text-gray-700"
                                    : "text-white hover:text-white"
                                    }`}
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
