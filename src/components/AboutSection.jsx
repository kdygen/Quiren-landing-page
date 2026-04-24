function AboutSection({ t }) {
    return (
        <section id="about" className="relative bg-[#0D0B08] py-20 lg:py-28 px-4 lg:px-16">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="max-w-[720px] reveal">
                    <div className="flex items-center gap-4 mb-7">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">
                            {t.aboutSectionLabel}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] text-[#FDFAF5] font-light mb-8">
                        {t.aboutHeadingMain}<br />
                        {t.aboutHeadingLine2} <em className="text-[#C8974A] italic font-light">{t.aboutHeadingAccent}</em>
                    </h2>

                    <div className="flex items-center gap-7 mb-9">
                        <div className="h-px w-16 bg-[#C8974A]/45" />
                        <div className="w-2 h-2 rotate-45 bg-[#C8974A]" />
                        <div className="h-px w-16 bg-[#C8974A]/45" />
                    </div>

                    <p className="text-lg lg:text-[1.02rem] leading-[1.9] text-[#F5E4C3]/70 font-body font-bold mb-8">
                        {t.aboutParagraph1}
                    </p>

                    <p className="text-lg lg:text-[1.02rem] leading-[1.9] text-[#F5E4C3]/70 font-body font-light mb-8">
                        {t.aboutParagraph2}
                    </p>

                    <p className="text-lg lg:text-[1.02rem] leading-[1.9] text-[#F5E4C3]/70 font-body font-light">
                        {t.aboutParagraph3}
                    </p>
                </div>

                <div className="relative reveal reveal-delay-2">
                    <div className="relative overflow-hidden border border-[#C8974A]/20 aspect-[4/5] w-full max-w-[544px] ml-auto">
                        <img
                            src={`${import.meta.env.BASE_URL}Gemini_Generated_Image_70l4pj70l4pj70l4.png`}
                            alt={t.aboutImageAlt}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="pointer-events-none absolute -top-7 -left-7 w-[48%] h-[48%] border border-[#C8974A]/15" />
                    <div className="pointer-events-none absolute -bottom-7 -right-7 w-[60%] h-[60%] border border-[#C8974A]/25" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
