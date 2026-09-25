import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "quimen-theme";

// Light is the default; a saved choice wins over it.
export function getInitialTheme() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // storage can be unavailable (private mode, blocked site data)
    }
    return "light";
}

export function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // ignore: the toggle still works for this visit
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }, []);

    return { theme, toggleTheme };
}
