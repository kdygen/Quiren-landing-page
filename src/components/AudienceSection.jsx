function AudienceSection({ t }) {
    const cards = t.audienceCards || [];

    return (
        <section id="audience" className="bg-[#0D0B08] py-24 lg:py-32 px-4 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-14 lg:mb-16 reveal">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">
                            {t.audienceSectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.06] text-[#FDFAF5] font-light">
                        {t.audienceHeadingMain} <em className="text-[#C8974A] italic font-light">{t.audienceHeadingAccent}</em>?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 border border-[#C8974A]/16 reveal reveal-delay-1">
                    {cards.map((card, index) => (
                        <article
                            key={card.title}
                            className={`px-8 py-10 lg:px-10 lg:py-12 ${index < 2 ? "border-b lg:border-b-0 lg:border-r" : ""} border-[#C8974A]/16 ${index === 0 ? "bg-[linear-gradient(135deg,rgba(200,151,74,0.06),rgba(0,0,0,0))] hover:bg-[linear-gradient(135deg,rgba(200,151,74,0.12),rgba(0,0,0,0))]" : "hover:bg-[linear-gradient(135deg,rgba(200,151,74,0.08),rgba(0,0,0,0))]"} transition-colors duration-300`}
                        >
                            <div className="text-[2.3rem] leading-none mb-5">{card.icon}</div>
                            <h3 className="font-serif text-[2.05rem] leading-[1.2] text-[#E8BE7A] font-light mb-5">
                                {card.title}
                            </h3>
                            <p className="font-body text-[1.02rem] leading-[1.85] text-[#F5E4C3]/68 font-light">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AudienceSection;
