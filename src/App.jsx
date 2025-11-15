import React from "react";

// Q-Uiren landing page using Tailwind CSS
function QUirenLandingPage() {
  const navigation = [
    { name: "О продукте", href: "#about" },
    { name: "Почему Q-Uiren", href: "#why" },
    { name: "Технологии", href: "#tech" },
    { name: "Для кого", href: "#audience" },
    { name: "FAQ", href: "#faq" },
  ];

  const benefits = [
    {
      title: "Живое обучение домбре",
      desc: "LED-подсветка показывает, куда ставить пальцы, а приложение в реальном времени слушает игру и даёт обратную связь.",
    },
    {
      title: "Сохранение культуры",
      desc: "Мы помогаем молодым казахам по всему миру соединиться с национальной культурой через удобный цифровой формат.",
    },
    {
      title: "Учитель + устройство",
      desc: "Q-Uiren усиливает работу преподавателя: домашние задания становятся прозрачными, прогресс – измеримым.",
    },
  ];

  const tech = [
    {
      title: "Умный гриф с LED",
      desc: "Лента LED под ладами показывает правильные позиции пальцев в зависимости от выбранного кюя или упражнения.",
    },
    {
      title: "Аудио-распознавание",
      desc: "Микрофон телефона и алгоритмы обработки сигнала анализируют высоту и ритм исполнения.",
    },
    {
      title: "Мобильное приложение",
      desc: "Интерактивные уроки, трекинг прогресса, достижения и рекомендации по следующему шагу.",
    },
    {
      title: "Облачная аналитика",
      desc: "Анонимная статистика помогает преподавателям и школам понимать, где ученики чаще всего ошибаются.",
    },
  ];

  const audience = [
    {
      title: "Ученики и родители",
      desc: "Дети и подростки, которые хотят учиться на домбре дома, без потери мотивации.",
    },
    {
      title: "Музыкальные школы",
      desc: "Государственные и частные школы, колледжи и кружки национальной музыки.",
    },
    {
      title: "Казахская диаспора",
      desc: "Казахи за рубежом, которые хотят сохранить связь с культурой в удобном цифровом формате.",
    },
  ];

  const faqs = [
    {
      q: "Что такое Q-Uiren?",
      a: "Q-Uiren – это умное устройство для обучения игре на домбре: LED-гриф + мобильное приложение с интерактивными уроками и обратной связью в реальном времени.",
    },
    {
      q: "Мне нужен преподаватель или можно учиться самому?",
      a: "Устройство работает и как дополнение к занятиям с преподавателем, и как самостоятельный инструмент для обучения дома.",
    },
    {
      q: "На каких языках будет доступно приложение?",
      a: "Мы планируем поддерживать казахский, русский и английский языки, чтобы быть понятными и в Казахстане, и за его пределами.",
    },
    {
      q: "Когда устройство будет доступно для покупки?",
      a: "Сейчас мы на стадии прототипа и пилотных запусков с партнёрскими школами. Открытый пред-заказ планируем после завершения тестирования.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
              <span className="text-lg font-bold text-emerald-400">Q</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                Q-Uiren
              </span>
              <span className="hidden text-xs text-slate-400 sm:block">
                умная домбра для нового поколения
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-emerald-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="hidden rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-sm hover:bg-emerald-400 md:inline-flex"
          >
            Оставить контакты
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Пилотируем с музыкальными школами
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Первая умная домбра
              <span className="block text-emerald-400">
                с LED-подсветкой и живой обратной связью
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Q-Uiren объединяет традиционную домбру и современные технологии.
              Устройство показывает, куда ставить пальцы, слушает вашу игру через
              телефон и помогает шаг за шагом освоить кюи – от первых нот до
              сложных произведений.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Стать пилотным пользователем
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500"
              >
                Узнать подробнее
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-emerald-500/10" />
                <span>Для школ и индивидуальных учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-emerald-500/10" />
                <span>Поддержка KZ / RU / EN</span>
              </div>
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative mt-4 h-[320px] w-full max-w-sm rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 shadow-2xl">
              <div className="flex items-center justify-between px-1 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20" />
                  <span className="text-xs font-medium text-slate-200">
                    Урок · Начальные кюи
                  </span>
                </div>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                  Реальное время
                </span>
              </div>

              <div className="flex h-full gap-4">
                {/* Dombyra neck mock */}
                <div className="relative flex h-full flex-1 items-center justify-center rounded-2xl bg-slate-900/60">
                  <div className="relative h-[220px] w-10 rounded-full border border-slate-700 bg-slate-950/80">
                    <div className="absolute inset-x-1 top-6 h-1 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-1 top-12 h-1 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-1 top-20 h-1 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-1 top-28 h-1 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-1 top-36 h-1 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-1 top-44 h-1 rounded-full bg-slate-700" />

                    {/* LED hints */}
                    <div className="absolute left-1/2 top-12 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    <div className="absolute left-1/2 top-28 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                    <div className="absolute left-1/2 top-36 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-300/80" />
                  </div>
                </div>

                {/* Analytics mock */}
                <div className="flex w-40 flex-col justify-between rounded-2xl bg-slate-900/80 p-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Точность нот
                    </p>
                    <p className="text-2xl font-semibold text-emerald-400">92%</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      +8% за последнюю неделю
                    </p>
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Ритм</span>
                      <span className="text-slate-400">87%</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-800">
                      <div className="h-1 w-4/5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Чистота звука</span>
                      <span className="text-slate-400">95%</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-800">
                      <div className="h-1 w-[90%] rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Домашнее задание</span>
                      <span className="text-emerald-400">выполнено</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-56 w-56 rounded-full bg-emerald-500/20" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Что делает Q-Uiren особенным?
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Традиционные уроки по домбре часто требуют много времени, дороги до школы
            и зависят от расписания преподавателя. Q-Uiren предлагает другой формат:
            вы сохраняете живого учителя, если он у вас есть, но переносите часть
            обучения на дом – с точной визуальной подсказкой и честной аналитикой.
            Устройство помогает ученику не теряться между уроками и постепенно
            формировать правильную технику.
          </p>
        </section>

        {/* Why Q-Uiren */}
        <section
          id="why"
          className="mt-20 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start"
        >
          <div className="space-y-5">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Почему Q-Uiren?
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Наша задача – не заменить домбру гаджетом, а наоборот: сделать
              традиционный инструмент ближе к молодому поколению. Мы объединяем
              педагогику, технологии и уважение к казахской культуре, чтобы обучение
              стало системным и измеримым, но при этом живым и эмоциональным.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech */}
        <section id="tech" className="mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Основные технологии
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-300 sm:text-base">
                Мы строим продукт на стыке железа, софта и педагогики. Каждый элемент
                – от LEDs до алгоритмов анализа – создан для того, чтобы обучение
                было понятным даже без технических знаний.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tech.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience */}
        <section id="audience" className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Для кого мы создаём Q-Uiren?
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-300 sm:text-base">
            Мы думаем о Q-Uiren как о мосте между поколениями: бабушки и дедушки,
            которые играют традиционные кюи, дети, которые привыкли к смартфону, и
            преподаватели, которые хотят видеть реальный прогресс учеников.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-20 grid gap-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Присоединиться к пилотной программе
            </h2>
            <p className="max-w-xl text-sm text-emerald-50/90 sm:text-base">
              Мы собираем список музыкальных школ, преподавателей и семей, которые
              хотят протестировать Q-Uiren раньше других. Оставьте контакты – мы
              свяжемся с вами, как только будем готовы к следующей волне пилотов.
            </p>

            <ul className="space-y-2 text-xs text-emerald-50/80 sm:text-sm">
              <li>• Ранняя скидка на устройство</li>
              <li>• Совместная разработка образовательной программы</li>
              <li>• Прямой контакт с командой и возможность влиять на продукт</li>
            </ul>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-xs font-medium text-emerald-50/90">
                Имя и фамилия
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-emerald-500/40 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                placeholder="Например, Алия Нурлыбек"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-50/90">
                E-mail
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-emerald-500/40 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-50/90">
                Кто вы?
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-emerald-500/40 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
                defaultValue="teacher"
              >
                <option value="teacher">Преподаватель / музыкальная школа</option>
                <option value="parent">Родитель</option>
                <option value="student">Студент / ученик</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-50/90">
                Сообщение (необязательно)
              </label>
              <textarea
                className="mt-1 w-full rounded-xl border border-emerald-500/40 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                rows={3}
                placeholder="Расскажите пару слов о себе или вашей школе"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
            >
              Отправить заявку
            </button>

            <p className="text-[10px] text-emerald-50/70">
              Отправляя форму, вы соглашаетесь получать от нас e-mail с обновлениями
              о проекте. Никакого спама.
            </p>
          </form>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Частые вопросы
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.q}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Q-Uiren. Сохранение казахской культуры через
            технологии.
          </p>
          <p className="text-[11px] text-slate-500">
            Страница в разработке · внешний вид и функционал могут меняться.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QUirenLandingPage;