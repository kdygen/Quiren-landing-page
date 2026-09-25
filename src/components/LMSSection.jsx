import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LMSIllustration from "./LMSIllustrations";

export default function AppSection({ t }) {
    const features = t?.appFeatures ?? [];
    const [active, setActive] = useState(0);
    const activeFeature = features[active] ?? features[0] ?? { title: "", headline: "", description: "" };

    return (
        <section id="app" className="bg-card py-24 lg:py-12 px-4 sm:px-6">
            <div className="mx-auto max-w-7xl grid  gap-2 items-center">
                <div className="flex items-center gap-4 mb-6 mx-auto">
                    <div className="h-px w-8 bg-gold" />
                    <span className="font-display text-[10px] tracking-[0.45em] uppercase text-gold font-light">{t?.appSectionLabel ?? 'Application'}</span>
                </div>

                <Tabs
                    value={String(active)}
                    onValueChange={(value) => setActive(Number(value))}
                    className="mb-10 w-full min-w-0 items-center"
                >
                    <div className="max-w-full overflow-x-auto pb-2">
                        <TabsList className="h-auto gap-1 rounded-lg border border-border bg-background/50 p-1">
                            {features.map((feat, i) => (
                                <TabsTrigger
                                    key={feat.title}
                                    value={String(i)}
                                    className="h-9 shrink-0 flex-none rounded-md px-4 text-sm font-medium text-copy/65 hover:text-foreground data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground dark:text-copy/65 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-secondary dark:data-[state=active]:text-secondary-foreground"
                                >
                                    {feat.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </Tabs>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: placeholder image area, same ratio as screenshot */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl">
                            <div className="aspect-4/3 w-full overflow-hidden rounded-lg border border-border bg-background p-3 sm:p-4">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-border/60 bg-card p-4">
                                    <LMSIllustration index={active} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: content */}
                    <div>
                        <div className="min-h-[13.5rem] md:min-h-[15rem] lg:min-h-[16rem]">
                            <h2 className="max-w-xl font-serif text-3xl md:text-4xl lg:text-[3.15rem] leading-[1.08] text-foreground font-light mb-6">
                                {activeFeature.headline}
                            </h2>

                            <p className="max-w-2xl text-lg leading-[1.9] text-copy/70 mb-8">
                                {activeFeature.description}
                            </p>
                        </div>

                        {/* removed repetitive list; section now driven by translations via `t.appFeatures` */}
                    </div>
                </div>
            </div>
        </section>
    );
}
