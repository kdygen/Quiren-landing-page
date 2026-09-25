import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import TechIllustration from "./TechIllustrations";

const base = import.meta.env.BASE_URL;
const TECH_CARD_IMAGES = [
    `${base}tech-card-learning.webp`,
    `${base}tech-card-app-device.webp`,
    `${base}tech-card-gamification.webp`,
];

function TechSection({ t }) {
    const steps = t.techSteps || [];
    const [openIndex, setOpenIndex] = useState(null);
    const [slide, setSlide] = useState(0);
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => setIsWide(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    const goPrev = useCallback(() => {
        setSlide((i) => (i - 1 + steps.length) % steps.length);
    }, [steps.length]);

    const goNext = useCallback(() => {
        setSlide((i) => (i + 1) % steps.length);
    }, [steps.length]);

    const activeStep = openIndex !== null ? steps[openIndex] ?? null : null;

    return (
        <section id="tech" className="relative overflow-hidden bg-background py-24 lg:py-32 px-4 sm:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-gold" />
                        <span className="font-display text-[10px] font-light uppercase tracking-[0.45em] text-gold">
                            {t.techSectionLabel}
                        </span>
                        <div className="h-px w-8 bg-gold" />
                    </div>
                    <h2 className="font-serif text-5xl font-light leading-[1.05] text-foreground lg:text-6xl">
                        {t.techHeadingMain}{" "}
                        <em className="font-serif font-light italic text-gold">{t.techHeadingAccent}</em>
                    </h2>
                </div>

                <div className="relative flex items-center gap-3 sm:gap-5">
                    {!isWide && (
                        <Button
                            type="button"
                            variant="outline"
                            size="icon-lg"
                            onClick={goPrev}
                            aria-label="Previous"
                            className="z-10 shrink-0 rounded-md"
                        >
                            <ChevronLeft />
                        </Button>
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
                            <div className="overflow-hidden">
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
                        <Button
                            type="button"
                            variant="outline"
                            size="icon-lg"
                            onClick={goNext}
                            aria-label="Next"
                            className="z-10 shrink-0 rounded-md"
                        >
                            <ChevronRight />
                        </Button>
                    )}
                </div>
            </div>

            <Dialog open={activeStep !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
                <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto border-border bg-card p-0 sm:max-w-[960px]">
                    {activeStep && (
                        <div className="grid gap-10 p-8 pt-14 sm:p-10 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:p-12">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-[min(100%,220px)] shrink-0">
                                    <div className="aspect-[9/19] w-full rounded-[2rem] border-[10px] border-background bg-background shadow-xl shadow-black/40">
                                        <div className="flex h-full w-full flex-col rounded-[1.35rem] bg-card/90">
                                            <div className="mx-auto mt-3 h-5 w-16 rounded-full bg-black/50" />
                                            <div className="m-3 mt-4 flex flex-1 flex-col overflow-hidden rounded-xl bg-background/55">
                                                <TechIllustration index={openIndex} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="font-body text-foreground flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
                                <span className="mb-4 font-display text-[10px] font-light uppercase tracking-[0.45em] text-primary">
                                    {activeStep.number}
                                </span>
                                <DialogTitle className="mb-6 font-serif text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl">
                                    {activeStep.title}
                                </DialogTitle>
                                <DialogDescription className="text-lg font-light leading-relaxed text-copy/80 sm:text-xl">
                                    {activeStep.description}
                                </DialogDescription>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}

function TechCard({ step, onOpen, imageSrc }) {
    return (
        <article className="relative aspect-[3/3.57] w-[95%] max-w-full mx-auto overflow-hidden rounded-lg border border-border bg-card">
            <div className="absolute inset-0 bg-card" aria-hidden />
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
            <h3 className="absolute left-5 top-5 z-[2] max-w-[85%] font-serif text-2xl font-light leading-tight tracking-tight text-white sm:left-6 sm:top-6 sm:text-[1.75rem]">
                {step.title}
            </h3>
            <Button
                type="button"
                variant="secondary"
                size="icon-lg"
                onClick={onOpen}
                className="absolute bottom-4 right-4 z-[3] rounded-md shadow-md"
                aria-label={`${step.title} — details`}
            >
                <Plus />
            </Button>
        </article>
    );
}

export default TechSection;
