import { GraduationCap, Music, School } from "lucide-react";

// Icons follow card order in `t.audienceCards`: children, teens/students, schools
const AUDIENCE_ICONS = [Music, GraduationCap, School];

function AudienceSection({ t }) {
    const cards = t.audienceCards || [];

    return (
        <section id="audience" className="bg-background py-24 lg:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 lg:mb-16 reveal">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-gold" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-gold font-light">
                            {t.audienceSectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.06] text-foreground font-light">
                        {t.audienceHeadingMain} <em className="text-gold italic font-light">{t.audienceHeadingAccent}</em>?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 overflow-hidden rounded-lg border border-border bg-card/40 reveal reveal-delay-1">
                    {cards.map((card, index) => {
                        const Icon = AUDIENCE_ICONS[index] ?? Music;
                        return (
                            <article
                                key={card.title}
                                className={`px-8 py-10 lg:px-10 lg:py-12 ${index < 2 ? "border-b lg:border-b-0 lg:border-r" : ""} border-border transition-colors duration-200 hover:bg-accent/40`}
                            >
                                <div className="mb-6 flex size-11 items-center justify-center rounded-md border border-border bg-background text-primary">
                                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                                </div>
                                <h3 className="font-serif text-[2.05rem] leading-[1.2] text-gold-soft font-light mb-5">
                                    {card.title}
                                </h3>
                                <p className="font-body text-[1.02rem] leading-[1.85] text-copy/68 font-light">
                                    {card.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AudienceSection;
