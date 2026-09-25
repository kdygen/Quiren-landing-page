import { ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

// Native names, so each visitor recognises their own language before choosing.
const LANGUAGE_OPTIONS = [
    { code: "EN", label: "English" },
    { code: "KZ", label: "Қазақша" },
    { code: "RU", label: "Русский" },
];

// First-visit language picker: blurs the page behind a square card until a language is chosen.
function LanguageGate({ open, onSelect }) {
    return (
        <Dialog open={open}>
            <DialogContent
                showCloseButton={false}
                onEscapeKeyDown={(event) => event.preventDefault()}
                onInteractOutside={(event) => event.preventDefault()}
                overlayClassName="bg-background/25 backdrop-blur-md"
                className="flex aspect-square w-[min(24rem,calc(100%-2rem))] flex-col justify-center gap-0 border-border bg-card p-8 shadow-2xl shadow-black/25 sm:max-w-none sm:p-10"
            >
                <img
                    src={`${import.meta.env.BASE_URL}quimenlogo.webp`}
                    alt="Quimen"
                    className="mx-auto -my-6 h-24 w-auto invert dark:invert-0"
                />

                <DialogTitle className="mt-2 text-center font-serif text-3xl font-light leading-tight text-foreground">
                    Choose your language
                </DialogTitle>
                <DialogDescription className="mt-2 mb-7 text-center text-sm text-copy/60">
                    Тілді таңдаңыз · Выберите язык
                </DialogDescription>

                <div className="flex flex-col gap-2.5">
                    {LANGUAGE_OPTIONS.map((option) => (
                        <button
                            key={option.code}
                            type="button"
                            onClick={() => onSelect(option.code)}
                            className="group flex h-12 items-center justify-between rounded-md border border-border bg-background px-4 text-left text-base text-foreground transition-colors outline-none hover:border-gold/60 hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40"
                        >
                            <span>{option.label}</span>
                            <span className="flex items-center gap-2 font-display text-[10px] tracking-[0.2em] text-gold">
                                {option.code}
                                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </span>
                        </button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default LanguageGate;
