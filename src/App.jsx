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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10">
              <span className="text-lg font-bold text-orange-500">Q</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight sm:text-base text-slate-900">
                Q-Uiren
              </span>
              <span className="hidden text-xs text-slate-600 sm:block">
                умная домбра для нового поколения
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide !text-white shadow-sm hover:bg-orange-600 md:inline-flex"
          >
            Оставить контакты
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Пилотируем с музыкальными школами
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              Первая умная домбра
              <span className="block text-blue-600">
                с LED-подсветкой и живой обратной связью
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Q-Uiren объединяет традиционную домбру и современные технологии.
              Устройство показывает, куда ставить пальцы, слушает вашу игру через
              телефон и помогает шаг за шагом освоить кюи – от первых нот до
              сложных произведений.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-orange-500/90 px-6 py-2.5 text-sm font-semibold !text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
              >
                Стать пилотным пользователем
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600"
              >
                Узнать подробнее
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-500/20" />
                <span>Для школ и индивидуальных учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-500/20" />
                <span>Поддержка KZ / RU / EN</span>
              </div>
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative mt-4 h-[320px] w-full max-w-sm rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-orange-50 p-4 shadow-2xl">
              <div className="flex items-center justify-between px-1 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20" />
                  <span className="text-xs font-medium text-slate-700">
                    Урок · Начальные кюи
                  </span>
                </div>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700">
                  Реальное время
                </span>
              </div>

              <div className="flex h-full gap-4">
                {/* Dombyra neck mock */}
                <div className="relative flex h-full flex-1 items-center justify-center rounded-2xl bg-slate-100">
                  <div className="relative h-[220px] w-10 rounded-full border border-slate-300 bg-white">
                    <div className="absolute inset-x-1 top-6 h-1 rounded-full bg-slate-300" />
                    <div className="absolute inset-x-1 top-12 h-1 rounded-full bg-slate-300" />
                    <div className="absolute inset-x-1 top-20 h-1 rounded-full bg-slate-300" />
                    <div className="absolute inset-x-1 top-28 h-1 rounded-full bg-slate-300" />
                    <div className="absolute inset-x-1 top-36 h-1 rounded-full bg-slate-300" />
                    <div className="absolute inset-x-1 top-44 h-1 rounded-full bg-slate-300" />

                    {/* LED hints */}
                    <div className="absolute left-1/2 top-12 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
                    <div className="absolute left-1/2 top-28 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                    <div className="absolute left-1/2 top-36 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500/80" />
                  </div>
                </div>

                {/* Analytics mock */}
                <div className="flex w-40 flex-col justify-between rounded-2xl bg-white border border-slate-200 p-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      Точность нот
                    </p>
                    <p className="text-2xl font-semibold text-blue-600">92%</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      +8% за последнюю неделю
                    </p>
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-700">Ритм</span>
                      <span className="text-slate-600">87%</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-200">
                      <div className="h-1 w-4/5 rounded-full bg-orange-500" />
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-700">Чистота звука</span>
                      <span className="text-slate-600">95%</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-200">
                      <div className="h-1 w-[90%] rounded-full bg-blue-500" />
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-700">Домашнее задание</span>
                      <span className="text-orange-600 font-medium">выполнено</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-56 w-56 rounded-full bg-blue-500/10" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
            Что делает Q-Uiren особенным?
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
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
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
              Почему Q-Uiren?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
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
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
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
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
                Основные технологии
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-600 sm:text-base">
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
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience */}
        <section id="audience" className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
            Для кого мы создаём Q-Uiren?
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-600 sm:text-base">
            Мы думаем о Q-Uiren как о мосте между поколениями: бабушки и дедушки,
            которые играют традиционные кюи, дети, которые привыкли к смартфону, и
            преподаватели, которые хотят видеть реальный прогресс учеников.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-20 grid gap-8 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-orange-50/30 to-blue-50 p-6 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
              Присоединиться к пилотной программе
            </h2>
            <p className="max-w-xl text-sm text-slate-700 sm:text-base">
              Мы собираем список музыкальных школ, преподавателей и семей, которые
              хотят протестировать Q-Uiren раньше других. Оставьте контакты – мы
              свяжемся с вами, как только будем готовы к следующей волне пилотов.
            </p>

            <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
              <li>• Ранняя скидка на устройство</li>
              <li>• Совместная разработка образовательной программы</li>
              <li>• Прямой контакт с командой и возможность влиять на продукт</li>
            </ul>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-700">
                Имя и фамилия
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Например, Алия Нурлыбек"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                E-mail
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                Кто вы?
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                defaultValue="teacher"
              >
                <option value="teacher">Преподаватель / музыкальная школа</option>
                <option value="parent">Родитель</option>
                <option value="student">Студент / ученик</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                Сообщение (необязательно)
              </label>
              <textarea
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows={3}
                placeholder="Расскажите пару слов о себе или вашей школе"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
            >
              Отправить заявку
            </button>

            <p className="text-[10px] text-slate-500">
              Отправляя форму, вы соглашаетесь получать от нас e-mail с обновлениями
              о проекте. Никакого спама.
            </p>
          </form>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
            Частые вопросы
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.q}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
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