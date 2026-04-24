function AppSection() {
    const features = [
        {
            icon: "♪",
            title: "Интерактивные ноты",
            description:
                "Система подсчевает текущую ноту в реальном времени. Следите за ключем шаг за шагом с визуальной подсказкой.",
        },
        {
            icon: "●",
            title: "Контроль темпа",
            description:
                "Регулируйте скорость воспроизведения от 0.5• до 2•. Учитесь в своём ритме, не теряя мелодической линии.",
        },
        {
            icon: "⚡",
            title: "Световая поддержка",
            description:
                "Подключите смарт-светильник и система визуально дублирует ноты через свет — уникальный опыт погружения в музыку.",
        },
        {
            icon: "↻",
            title: "Повтор и прогресс",
            description:
                "Отслеживайте каждый шаг обучения. Повторяйте сложные фрагменты до полного освоения.",
        },
    ];

    return (
        <section id="app" className="bg-[#1A1510] py-24 lg:py-32 px-4 lg:px-16">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div className="relative reveal order-2 lg:order-1">
                    <div className="mx-auto lg:ml-0 w-full max-w-[323px]">
                        <div className="relative aspect-[9/18] border border-[#C8974A]/25 bg-[#0D0B08] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-7 bg-[#0D0B08] rounded-b-3xl z-20" />

                            <div className="w-full h-full overflow-hidden bg-gradient-to-b from-[#1A1510] to-[#0D0B08] p-4 flex flex-col items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className="text-6xl">🎵</div>
                                    <div className="space-y-2">
                                        <p className="text-[0.7rem] tracking-widest text-[#C8974A]">SONGS</p>
                                        <p className="text-sm font-serif text-[#F5E4C3]">
                                            Кюй Балбарауын — Традиционный
                                        </p>
                                    </div>
                                    <div className="bg-[#1A1510] rounded-lg p-4 min-h-[100px] flex items-center justify-center">
                                        <div className="text-4xl">♪ ♪</div>
                                    </div>
                                    <div className="text-[0.65rem] text-[#C8974A]">2 ports active</div>
                                    <div className="w-full h-1 bg-[#C8974A]/20 rounded-full overflow-hidden">
                                        <div className="w-1/3 h-full bg-[#C8974A]/60" />
                                    </div>
                                    <p className="text-[0.65rem] text-[#C8974A]">Шаг 3 / 5</p>
                                    <div className="flex justify-center gap-3 pt-2">
                                        <button className="w-8 h-8 border border-[#C8974A]/30 rounded-full flex items-center justify-center text-[#C8974A] text-xs">
                                            ⏮
                                        </button>
                                        <button className="w-8 h-8 border border-[#C8974A]/30 rounded-full flex items-center justify-center text-[#C8974A] text-xs">
                                            ⏯
                                        </button>
                                        <button className="w-8 h-8 bg-[#7CB342] rounded-full flex items-center justify-center text-[#0D0B08] font-bold text-xs">
                                            ⏸
                                        </button>
                                        <button className="w-8 h-8 border border-[#C8974A]/30 rounded-full flex items-center justify-center text-[#C8974A] text-xs">
                                            ⏭
                                        </button>
                                        <button className="w-8 h-8 border border-[#C8974A]/30 rounded-full flex items-center justify-center text-[#C8974A] text-xs">
                                            🔊
                                        </button>
                                    </div>
                                    <div className="flex justify-center gap-2 text-[0.65rem]">
                                        <span className="text-[#C8974A]">0.8x</span>
                                        <span className="text-[#7CB342]">1x</span>
                                        <span className="text-[#C8974A]">1.6x</span>
                                        <span className="text-[#C8974A]">2x</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[#C8974A] text-lg">
                                <span>⌂</span>
                                <span>🔧</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal order-1 lg:order-2">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">
                            Приложение
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.08] text-[#FDFAF5] font-light mb-6">
                        Домбыра<br />
                        в твоём <em className="text-[#C8974A] italic font-light">кармане</em>
                    </h2>

                    <div className="flex items-center gap-7 mb-10">
                        <div className="h-px w-16 bg-[#C8974A]/45" />
                        <div className="w-2 h-2 rotate-45 bg-[#C8974A]" />
                        <div className="h-px w-16 bg-[#C8974A]/45" />
                    </div>

                    <div className="space-y-6">
                        {features.map((feature) => (
                            <article key={feature.title} className="flex gap-5">
                                <div className="min-w-[3rem] h-12 border border-[#C8974A]/30 flex items-center justify-center text-[1.5rem] flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-[1.3rem] leading-[1.2] text-[#E8BE7A] font-light mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-[0.98rem] leading-[1.7] text-[#F5E4C3]/65 font-light">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppSection;
