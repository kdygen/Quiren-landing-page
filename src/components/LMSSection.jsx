import { useState } from "react";

export default function AppSection({ t }) {
    const features = t?.appFeatures ?? [];
    const [active, setActive] = useState(0);
    const activeFeature = features[active] ?? features[0] ?? { title: "", headline: "", description: "" };

    return (
        <section id="app" className="bg-[#1A1510] py-24 lg:py-32 px-4 sm:px-6">
            <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: placeholder image area, same ratio as screenshot */}
                <div className="flex justify-center">
                    <div className="w-full max-w-[720px]">
                        <div className="aspect-[1/1] w-full rounded-3xl overflow-hidden border border-[#C8974A]/12 bg-gradient-to-br from-[#0D0B08] to-[#1A1510] flex items-center justify-center">
                            <div className="h-full w-full flex items-center justify-center">
                                <div className="h-[92%] w-[92%] rounded-2xl bg-[linear-gradient(180deg,#111 0%,#2a2219 100%)] flex items-center justify-center text-[#F5E4C3]/20">
                                    <span className="text-2xl">Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: content */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">{t?.appSectionLabel ?? 'Application'}</span>
                    </div>

                    <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                        {features.map((feat, i) => (
                            <button
                                key={feat.title}
                                onClick={() => setActive(i)}
                                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${i === active
                                    ? "bg-[#F5E4C3] text-[#0D0B08] border border-[#F5E4C3]"
                                    : "bg-transparent text-[#F5E4C3]/70 border border-[#C8974A]/30"
                                    }`}
                            >
                                {feat.title}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[13.5rem] md:min-h-[15rem] lg:min-h-[16rem]">
                        <h2 className="max-w-xl font-serif text-3xl md:text-4xl lg:text-[3.15rem] leading-[1.08] text-[#FDFAF5] font-light mb-6">
                            {activeFeature.headline}
                        </h2>

                        <p className="max-w-2xl text-lg leading-[1.9] text-[#F5E4C3]/70 mb-8">
                            {activeFeature.description}
                        </p>
                    </div>

                    {/* removed repetitive list; section now driven by translations via `t.appFeatures` */}
                </div>
            </div>
        </section>
    );
}
