import { lazy, Suspense, useEffect, useRef, useState } from "react";

const DombraModelViewer = lazy(() => import("./DombraModelViewer"));

function WhySection({ t }) {
    const viewerHostRef = useRef(null);
    const [shouldLoadViewer, setShouldLoadViewer] = useState(false);

    useEffect(() => {
        if (shouldLoadViewer) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadViewer(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px 0px" }
        );

        if (viewerHostRef.current) {
            observer.observe(viewerHostRef.current);
        }

        return () => observer.disconnect();
    }, [shouldLoadViewer]);

    return (
        <section id="why" className="bg-card py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
                {/* Left: upright dombyra model */}
                <div className="reveal">
                    <div
                        ref={viewerHostRef}
                        className="relative mx-auto h-[420px] w-full max-w-[380px] overflow-hidden rounded-lg border border-border bg-background/60 sm:h-[520px] lg:h-[600px] lg:max-w-none"
                    >
                        {shouldLoadViewer ? (
                            <Suspense
                                fallback={
                                    <div className="h-full w-full animate-pulse bg-muted/60" />
                                }
                            >
                                <DombraModelViewer
                                    vertical
                                    labels={{
                                        rotate: t.whyHintRotate,
                                        zoom: t.whyHintZoom,
                                        pause: t.whyViewerPause,
                                        play: t.whyViewerPlay,
                                    }}
                                />
                            </Suspense>
                        ) : (
                            <div className="h-full w-full bg-muted/40" />
                        )}
                    </div>
                </div>

                {/* Right: heading and copy */}
                <div className="reveal reveal-delay-2 max-w-[640px]">
                    <div className="flex items-center gap-4 mb-7">
                        <div className="h-px w-8 bg-gold" />
                        <span className="font-display text-[10px] font-light tracking-[0.45em] uppercase text-gold">
                            {t.whySectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] font-light text-foreground mb-9">
                        {t.whyHeadingMain} <em className="text-gold italic font-light">{t.whyHeadingAccent}</em>?
                    </h2>

                    <div className="space-y-6">
                        <p className="font-body text-base sm:text-lg leading-[1.85] text-copy/78 font-light">
                            {t.whyParagraph1}
                        </p>

                        <p className="font-body text-base sm:text-lg leading-[1.85] text-copy/78 font-light">
                            {t.whyParagraph2}
                        </p>

                        <p className="font-body text-base sm:text-lg leading-[1.85] text-copy/78 font-light">
                            {t.whyParagraph3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhySection;
