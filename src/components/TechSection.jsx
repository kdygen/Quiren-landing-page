function TechSection({ t }) {
    const steps = t.techSteps || [];

    return (
        <section id="tech" className="bg-[#0D0B08] py-24 lg:py-32 px-4 lg:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.08fr_1fr] gap-14 lg:gap-20 items-center">
                <div className="max-w-[760px] reveal reveal-delay-1">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">
                            {t.techSectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] text-[#FDFAF5] font-light mb-10">
                        {t.techHeadingMain} <em className="text-[#C8974A] italic font-light">{t.techHeadingAccent}</em>
                    </h2>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <article
                                key={step.number}
                                className={`${index !== steps.length - 1 ? "pb-8 border-b border-[#C8974A]/14" : ""}`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="min-w-[3.2rem] font-display text-[0.78rem] tracking-[0.24em] text-[#C8974A] pt-1">
                                        {step.number}
                                    </div>

                                    <div className="max-w-[620px]">
                                        <h3 className="font-serif text-[1.75rem] sm:text-[1.95rem] leading-[1.15] text-[#FDFAF5] font-light mb-4">
                                            {step.title}
                                        </h3>

                                        <p className="font-body text-[1.01rem] sm:text-[1.05rem] leading-[1.9] text-[#F5E4C3]/72 font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="relative reveal">
                    <div className="relative overflow-hidden aspect-[4/5] w-full max-w-[544px] mx-auto lg:ml-auto border border-[#C8974A]/18 bg-[#1A1510]">
                        <img
                            src={`${import.meta.env.BASE_URL}image-optimized.jpg`}
                            alt={t.techImageAlt}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0B08]/20" />
                    </div>

                    <div className="pointer-events-none absolute -top-7 -left-7 w-[60%] h-[60%] border border-[#C8974A]/12" />
                    <div className="pointer-events-none absolute -bottom-7 -right-7 w-[660%] h-[60%] border border-[#C8974A]/2" />
                </div>
            </div>
        </section>
    );
}

export default TechSection;
