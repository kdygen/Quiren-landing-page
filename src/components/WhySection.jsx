function WhySection({ t }) {
    return (
        <section id="why" className="bg-[#1A1510] py-20 lg:py-28 px-4 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                    <div className="relative reveal">
                        <div className="relative overflow-hidden aspect-[4/5] w-full max-w-[544px] mx-auto lg:mx-0 border border-[#C8974A]/20">
                            <img
                                src={`${import.meta.env.BASE_URL}987c341f500edab44f9c8497cf840952.jpg`}
                                alt={t.whyImageAlt}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="pointer-events-none absolute -top-7 -left-7 w-[48%] h-[48%] border border-[#C8974A]/15" />
                        <div className="pointer-events-none absolute -bottom-7 -right-7 w-[60%] h-[60%] border border-[#C8974A]/25" />
                    </div>

                    <div className="max-w-[760px] mx-auto lg:mx-0 text-center reveal reveal-delay-2">
                        <div className="mx-auto max-w-[900px]">
                            <div className="mx-auto max-w-[760px]">
                                <div className="flex justify-center items-center gap-3 mb-4">
                                    <span className="font-display text-[10px] font-light tracking-[0.45em] uppercase text-[#C8974A]">
                                        {t.whySectionLabel}
                                    </span>
                                </div>

                                <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] font-light text-[#FDFAF5] mb-12">
                                    {t.whyHeadingMain} <em className="text-[#C8974A] italic font-light">{t.whyHeadingAccent}</em>?
                                </h2>

                                <div className="space-y-8">
                                    <p className="font-serif text-[20px] leading-[1.9] text-[#F5E4C3]/75 font-light">
                                        {t.whyParagraph1}
                                    </p>

                                    <p className="font-serif text-[20px] leading-[1.9] text-[#F5E4C3]/75 font-light">
                                        {t.whyParagraph2}
                                    </p>

                                    <p className="font-serif text-[20px] leading-[1.9] text-[#F5E4C3]/75 font-light">
                                        {t.whyParagraph3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhySection;
