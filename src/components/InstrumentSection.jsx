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
        <section id="why" className="bg-[#1A1510] py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="reveal">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="font-display text-[10px] font-light tracking-[0.45em] uppercase text-[#C8974A]">
                            {t.whySectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] font-light text-[#FDFAF5] mb-10 lg:mb-12">
                        {t.whyHeadingMain} <em className="text-[#C8974A] italic font-light">{t.whyHeadingAccent}</em>?
                    </h2>
                </div>

                <div className="relative reveal reveal-delay-2 mb-10 lg:mb-12">
                    <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-[760px] rounded-full bg-[radial-gradient(circle,rgba(200,151,74,0.28)_0%,rgba(200,151,74,0.08)_45%,rgba(0,0,0,0)_75%)] blur-xl" />
                    <div
                        ref={viewerHostRef}
                        className="relative overflow-hidden h-[180px] sm:h-[210px] lg:h-[230px] w-full max-w-[760px] mx-auto border border-[#C8974A]/22 bg-[linear-gradient(90deg,rgba(200,151,74,0.06)_0%,rgba(200,151,74,0.18)_25%,rgba(200,151,74,0.08)_55%,rgba(0,0,0,0.05)_100%)]"
                    >
                        {shouldLoadViewer ? (
                            <Suspense
                                fallback={
                                    <div className="flex h-full w-full items-center justify-center bg-[#0D0B08]/60 text-xs uppercase tracking-[0.35em] text-[#C8974A]/65">
                                        Loading model
                                    </div>
                                }
                            >
                                <DombraModelViewer />
                            </Suspense>
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-[#0D0B08]/40 text-xs uppercase tracking-[0.35em] text-[#C8974A]/45">
                                Model deferred until visible
                            </div>
                        )}
                    </div>
                </div>

                <div className="mx-auto max-w-[820px] reveal reveal-delay-2">
                    <div className="space-y-7 lg:space-y-8">
                        <p className="font-serif text-lg sm:text-[20px] leading-[1.9] text-[#F5E4C3]/78 font-light">
                            {t.whyParagraph1}
                        </p>

                        <p className="font-serif text-lg sm:text-[20px] leading-[1.9] text-[#F5E4C3]/78 font-light">
                            {t.whyParagraph2}
                        </p>

                        <p className="font-serif text-lg sm:text-[20px] leading-[1.9] text-[#F5E4C3]/78 font-light">
                            {t.whyParagraph3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhySection;
