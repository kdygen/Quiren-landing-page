export const languages = [
    { code: "RU", name: "Русский", flag: "🇷🇺" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "KZ", name: "Қазақша", flag: "🇰🇿" },
];

export const accentThemes = [
    {
        id: "sunset",
        name: "Sunset",
        mode: "dark",
        pageBackground:
            "bg-gradient-to-br from-stone-900 via-stone-950 to-stone-800 text-white",
        sectionBackground: "",
        textPrimary: "text-white",
        borderStyle: "border-[color:var(--accent-border)]",
        primary: "#f97316",
        secondary: "#fef3c7",
        soft: "rgba(254, 243, 199, 0.12)",
        border: "rgba(254, 243, 199, 0.35)",
        shadow: "rgba(254, 243, 199, 0.5)",
        text: "rgba(254, 243, 199, 0.85)",
        ui: {
            navbar: {
                background: "bg-stone-900/90",
                brandText: "text-white",
                navLink: "text-white hover:text-white",
                languageSelect:
                    "bg-stone-800 text-white border-[color:var(--accent-border)] hover:border-white",
            },
            hero: {
                badge: "bg-white/10 border-white/20",
            },
            about: {
                section: "bg-gradient-to-b from-stone-950/70 to-stone-900/50",
                heading: "text-white",
                learnMore: "text-white hover:text-white",
                mediaCard: "bg-gradient-to-br from-stone-900 to-stone-800",
            },
            why: {
                section: "",
                heading: "text-white",
                card: "bg-gradient-to-br from-stone-800/60 to-stone-900/60",
                cardHeading: "text-white",
            },
            tech: {
                section: "bg-gradient-to-b from-stone-900/60 to-stone-950/50",
                heading: "text-white",
                card: "bg-gradient-to-br from-stone-900 to-stone-950",
                cardHeading: "text-white",
            },
            audience: {
                section: "",
                heading: "text-white",
                card: "",
                cardHeading: "text-white",
            },
            faq: {
                section: "bg-gradient-to-b from-stone-950/70 to-stone-900/50",
                heading: "text-white",
                questionButton: "bg-stone-800/50 hover:bg-stone-800",
                questionText: "text-white",
                answer: "bg-stone-900/50",
            },
            cta: {
                section: "",
                container:
                    "bg-[linear-gradient(135deg,var(--accent-soft),rgba(0,0,0,0))]",
                heading: "text-white",
                benefit: "text-[color:var(--accent-text)]",
                form: "bg-black/20",
                label: "text-white",
                input: "bg-black/40 text-white",
            },
            footer: {
                section: "bg-stone-950/95",
                heading: "text-white",
                body: "text-[color:var(--accent-text)]",
                linkHover: "hover:text-white",
            },
        },
    },
];
