import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Navbar({
    t,
    currentLanguage,
    setCurrentLanguage,
    mobileMenuOpen,
    setMobileMenuOpen,
    languages,
    theme,
    onToggleTheme,
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
            className={`fixed top-0 w-full z-50 px-4 sm:px-6 bg-background/85 backdrop-blur-md border-b border-border`}
        >
            <div className="max-w-7xl mx-auto px-1 sm:px-2">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="-ml-1 sm:-ml-2 flex h-14 sm:h-16 items-center overflow-hidden"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}quimenlogo.webp`}
                            alt="Quimen"
                            className="h-24 sm:h-32 w-auto max-w-none invert dark:invert-0"
                            loading="eager"
                            fetchPriority="high"
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
                                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
                            <SelectTrigger
                                size="sm"
                                aria-label="Language"
                                className="h-8 min-w-[4.5rem] border-border bg-transparent px-2.5 font-display text-[10px] tracking-[0.15em] text-foreground dark:bg-transparent dark:hover:bg-accent"
                            >
                                <SelectValue>{getLanguageLabel(currentLanguage)}</SelectValue>
                            </SelectTrigger>
                            <SelectContent position="popper" align="end" className="min-w-[7rem]">
                                {languageItems.map((lang) => (
                                    <SelectItem key={lang.code} value={lang.code} className="text-xs">
                                        <span className="font-display text-[10px] tracking-[0.15em]">
                                            {getLanguageLabel(lang.code)}
                                        </span>
                                        <span className="text-muted-foreground">{lang.name}</span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            onClick={onToggleTheme}
                            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                            className="text-foreground/80 hover:text-foreground"
                        >
                            {theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? t.navClose : t.navMenu}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </Button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-border py-2 sm:py-3 space-y-1"
                    >
                        {navigationItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block rounded-md px-2 py-2 text-sm text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
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
