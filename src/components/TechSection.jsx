import { useCallback, useEffect, useRef, useState } from "react";

const base = import.meta.env.BASE_URL;
const TECH_CARD_IMAGES = [
    `${base}tech-card-learning.png`,
    `${base}tech-card-app-device.png`,
    `${base}tech-card-gamification.png`,
];

function TechSection({ t }) {
    const steps = t.techSteps || [];
    const [openIndex, setOpenIndex] = useState(null);
    const [slide, setSlide] = useState(0);
    const [isWide, setIsWide] = useState(false);
    const closeRef = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => setIsWide(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        if (openIndex === null) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        const onKey = (e) => {
            if (e.key === "Escape") setOpenIndex(null);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [openIndex]);

    const goPrev = useCallback(() => {
        setSlide((i) => (i - 1 + steps.length) % steps.length);
    }, [steps.length]);

    const goNext = useCallback(() => {
        setSlide((i) => (i + 1) % steps.length);
    }, [steps.length]);

    const activeStep = openIndex !== null ? steps[openIndex] : null;

    return (
        <section id="tech" className="relative overflow-hidden bg-[#0D0B08] py-24 lg:py-32 px-4 sm:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] font-light uppercase tracking-[0.45em] text-[#C8974A]">
                            {t.techSectionLabel}
                        </span>
                        <div className="h-px w-8 bg-[#C8974A]" />
                    </div>
                    <h2 className="font-serif text-5xl font-light leading-[1.05] text-[#FDFAF5] lg:text-6xl">
                        {t.techHeadingMain}{" "}
                        <em className="font-serif font-light italic text-[#C8974A]">{t.techHeadingAccent}</em>
                    </h2>
                </div>

                <div className="relative flex items-center gap-3 sm:gap-5">
                    {!isWide && (
                        <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Previous"
                            className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8974A]/25 bg-[#1A1510] text-[#FDFAF5] shadow-sm transition hover:border-[#C8974A]/45 hover:bg-[#231C14]"
                        >
                            <span className="text-lg font-light leading-none" aria-hidden>
                                ‹
                            </span>
                        </button>
                    )}

                    <div className="min-w-0 flex-1">
                        {isWide ? (
                            <div className="grid grid-cols-3 gap-5 lg:gap-7">
                                {steps.map((step, index) => (
                                    <TechCard
                                        key={step.number}
                                        step={step}
                                        imageSrc={TECH_CARD_IMAGES[index] ?? null}
                                        onOpen={() => setOpenIndex(index)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="overflow-hidden rounded-none">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${slide * 100}%)` }}
                                >
                                    {steps.map((step, index) => (
                                        <div
                                            key={step.number}
                                            className="w-full shrink-0 px-1"
                                            aria-hidden={index !== slide}
                                        >
                                            <TechCard
                                                step={step}
                                                imageSrc={TECH_CARD_IMAGES[index] ?? null}
                                                onOpen={() => setOpenIndex(index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {!isWide && (
                        <button
                            type="button"
                            onClick={goNext}
                            aria-label="Next"
                            className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8974A]/35 bg-[#1A1510] text-[#FDFAF5] shadow-sm transition hover:border-[#C8974A]/55 hover:bg-[#231C14]"
                        >
                            <span className="text-lg font-light leading-none" aria-hidden>
                                ›
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {activeStep && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="tech-modal-title"
                >
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
                        aria-label="Close"
                        onClick={() => setOpenIndex(null)}
                    />
                    <div className="relative z-[101] max-h-[90vh] w-full max-w-[960px] overflow-y-auto rounded-2xl border border-[#C8974A]/18 bg-[#1A1510] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
                        <button
                            ref={closeRef}
                            type="button"
                            onClick={() => setOpenIndex(null)}
                            className="absolute right-4 top-4 z-[102] flex h-10 w-10 items-center justify-center rounded-full border border-[#C8974A]/35 bg-[#0D0B08] text-[#FDFAF5] transition hover:border-[#C8974A]/55 hover:bg-[#231C14]"
                            aria-label="Close"
                        >
                            <span className="text-lg leading-none" aria-hidden>
                                ×
                            </span>
                        </button>

                        <div className="grid gap-10 p-8 pt-16 sm:p-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:p-12 lg:pt-12">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-[min(100%,220px)] shrink-0">
                                    <div className="aspect-[9/19] w-full rounded-[2rem] border-[10px] border-[#0D0B08] bg-[#0D0B08] shadow-xl shadow-black/40">
                                        <div className="flex h-full w-full flex-col rounded-[1.35rem] bg-[#1A1510]/90">
                                            <div className="mx-auto mt-3 h-5 w-16 rounded-full bg-black/50" />
                                            <div className="m-3 mt-4 flex flex-1 flex-col rounded-xl bg-[#0D0B08]/55" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="font-body text-[#FDFAF5]">
                                <p className="mb-3 font-display text-[10px] font-light uppercase tracking-[0.28em] text-[#C8974A]/90">
                                    {t.techSectionLabel}
                                </p>
                                <h3
                                    id="tech-modal-title"
                                    className="mb-5 font-serif text-3xl font-light leading-tight tracking-tight text-[#FDFAF5] sm:text-4xl"
                                >
                                    {activeStep.title}
                                </h3>
                                <p className="mb-8 text-[15px] font-light leading-relaxed text-[#F5E4C3]/78 sm:text-base">
                                    {activeStep.description}
                                </p>
                                <div className="rounded-xl border border-[#C8974A]/14 bg-[#0D0B08]/55 px-5 py-5 sm:px-6 sm:py-6">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#C8974A]/85">
                                        {t.techTitle}
                                    </p>
                                    <p className="text-sm font-light leading-relaxed text-[#F5E4C3]/72 sm:text-[15px]">
                                        {t.techDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

function TechCard({ step, onOpen, imageSrc }) {
    return (
        <article className="relative aspect-[3/3.57] w-[95%] max-w-full mx-auto overflow-hidden rounded-[1.35rem] border border-[#C8974A]/18 bg-[#1A1510] shadow-sm sm:rounded-[1.5rem]">
            <div className="absolute inset-0 bg-[#1A1510]" aria-hidden />
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 z-[0] h-full w-full object-cover"
                />
            ) : null}
            <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(13,11,8,0.97)_0%,rgba(13,11,8,0.72)_16%,rgba(13,11,8,0.38)_30%,rgba(13,11,8,0.08)_44%,transparent_58%)]"
                aria-hidden
            />
            <h3 className="absolute left-5 top-5 z-[2] max-w-[85%] font-serif text-2xl font-light leading-tight tracking-tight text-[#FDFAF5] sm:left-6 sm:top-6 sm:text-[1.75rem]">
                {step.title}
            </h3>
            <button
                type="button"
                onClick={onOpen}
                className="absolute bottom-4 right-4 z-[3] flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-light leading-none text-[#0D0B08] shadow-md transition hover:scale-105 active:scale-95"
                aria-label={`${step.title} — details`}
            >
                +
            </button>
        </article>
    );
}

export default TechSection;
