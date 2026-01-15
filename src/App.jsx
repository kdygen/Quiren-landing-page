import React, { useState } from "react";

// Q-Uiren landing page using Tailwind CSS
function QUirenLandingPage() {
  const translations = {
    RU: {
      navigation: [
        { name: "О продукте", href: "#about" },
        { name: "Почему Q-Uiren", href: "#why" },
        { name: "Технологии", href: "#tech" },
        { name: "Для кого", href: "#audience" },
        { name: "FAQ", href: "#faq" },
      ],
      tagline: "умная домбра для нового поколения",
      pilotBadge: "Пилотируем с музыкальными школами",
      heroTitle: "Первая умная домбра",
      heroSubtitle: "с LED-подсветкой и живой обратной связью",
      heroDescription: "Q-Uiren объединяет традиционную домбру и современные технологии. Устройство показывает, куда ставить пальцы, слушает вашу игру через телефон и помогает шаг за шагом освоить кюи – от первых нот до сложных произведений.",
      ctaButton: "Стать пилотным пользователем",
      learnMore: "Узнать подробнее",
      contactButton: "Оставить контакты",
      aboutTitle: "Что делает Q-Uiren особенным?",
      aboutDescription: "Традиционные уроки по домбре часто требуют много времени, дороги до школы и зависят от расписания преподавателя. Q-Uiren предлагает другой формат: вы сохраняете живого учителя, если он у вас есть, но переносите часть обучения на дом – с точной визуальной подсказкой и честной аналитикой. Устройство помогает ученику не теряться между уроками и постепенно формировать правильную технику.",
      whyTitle: "Почему Q-Uiren?",
      whyDescription: "Наша задача – не заменить домбру гаджетом, а наоборот: сделать традиционный инструмент ближе к молодому поколению. Мы объединяем педагогику, технологии и уважение к казахской культуре, чтобы обучение стало системным и измеримым, но при этом живым и эмоциональным.",
      techTitle: "Основные технологии",
      techDescription: "Мы строим продукт на стыке железа, софта и педагогики. Каждый элемент – от LEDs до алгоритмов анализа – создан для того, чтобы обучение было понятным даже без технических знаний.",
      audienceTitle: "Для кого мы создаём Q-Uiren?",
      audienceDescription: "Мы думаем о Q-Uiren как о мосте между поколениями: бабушки и дедушки, которые играют традиционные кюи, дети, которые привыкли к смартфону, и преподаватели, которые хотят видеть реальный прогресс учеников.",
      ctaTitle: "Присоединиться к пилотной программе",
      ctaDescription: "Мы собираем список музыкальных школ, преподавателей и семей, которые хотят протестировать Q-Uiren раньше других. Оставьте контакты – мы свяжемся с вами, как только будем готовы к следующей волне пилотов.",
      faqTitle: "Частые вопросы",
      formNameLabel: "Имя и фамилия",
      formNamePlaceholder: "Например, Алия Нурлыбек",
      formEmailLabel: "E-mail",
      formEmailPlaceholder: "name@example.com",
      formRoleLabel: "Кто вы?",
      formRoleTeacher: "Преподаватель / музыкальная школа",
      formRoleParent: "Родитель",
      formRoleStudent: "Студент / ученик",
      formRoleOther: "Другое",
      formMessageLabel: "Сообщение (необязательно)",
      formMessagePlaceholder: "Расскажите пару слов о себе или вашей школе",
      formSubmitButton: "Отправить заявку",
      formDisclaimer: "Отправляя форму, вы соглашаетесь получать от нас e-mail с обновлениями о проекте. Никакого спама.",
      ctaBenefits: [
        "• Ранняя скидка на устройство",
        "• Совместная разработка образовательной программы",
        "• Прямой контакт с командой и возможность влиять на продукт"
      ],
      cardLessonText: "Урок · Начальные кюи",
      cardRealtimeText: "Реальное время",
      featureSchools: "Для школ и индивидуальных учеников",
      featureLanguages: "Поддержка KZ / RU / EN",
      prevImageLabel: "Предыдущее фото",
      nextImageLabel: "Следующее фото",
      goToImageLabel: "Перейти к фото",
      benefits: [
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
      ],
      tech: [
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
      ],
      audience: [
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
      ],
      faqs: [
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
      ],
    },
    EN: {
      navigation: [
        { name: "About", href: "#about" },
        { name: "Why Q-Uiren", href: "#why" },
        { name: "Technology", href: "#tech" },
        { name: "For Whom", href: "#audience" },
        { name: "FAQ", href: "#faq" },
      ],
      tagline: "smart dombra for the new generation",
      pilotBadge: "Piloting with music schools",
      heroTitle: "The first smart dombra",
      heroSubtitle: "with LED lighting and live feedback",
      heroDescription: "Q-Uiren brings together traditional dombra and cutting-edge technology. The device shows you exactly where to place your fingers, listens to your playing through your phone, and guides you step-by-step through kuis – from your first notes to complex masterpieces.",
      ctaButton: "Join the pilot program",
      learnMore: "Learn more",
      contactButton: "Get in touch",
      aboutTitle: "What makes Q-Uiren special?",
      aboutDescription: "Traditional dombra lessons often require significant time investment, travel to schools, and depend on teacher availability. Q-Uiren offers a different approach: keep your live teacher if you have one, but bring part of your learning home – with precise visual guidance and honest feedback. The device helps students stay engaged between lessons and gradually develop proper technique.",
      whyTitle: "Why Q-Uiren?",
      whyDescription: "Our mission isn't to replace the dombra with a gadget, but rather to bring this traditional instrument closer to the younger generation. We combine pedagogy, technology, and deep respect for Kazakh culture to make learning systematic and measurable, while keeping it alive and emotionally engaging.",
      techTitle: "Core Technologies",
      techDescription: "We're building at the intersection of hardware, software, and pedagogy. Every component – from LEDs to analysis algorithms – is designed to make learning intuitive, even without technical knowledge.",
      audienceTitle: "Who is Q-Uiren for?",
      audienceDescription: "We see Q-Uiren as a bridge between generations: grandparents who play traditional kuis, children who grew up with smartphones, and teachers who want to see real student progress.",
      ctaTitle: "Join our pilot program",
      ctaDescription: "We're building a community of music schools, teachers, and families who want to experience Q-Uiren before anyone else. Share your contact details – we'll reach out when we're ready for the next wave of pilots.",
      faqTitle: "Frequently Asked Questions",
      formNameLabel: "Full Name",
      formNamePlaceholder: "For example, John Smith",
      formEmailLabel: "E-mail",
      formEmailPlaceholder: "name@example.com",
      formRoleLabel: "Who are you?",
      formRoleTeacher: "Teacher / Music School",
      formRoleParent: "Parent",
      formRoleStudent: "Student",
      formRoleOther: "Other",
      formMessageLabel: "Message (optional)",
      formMessagePlaceholder: "Tell us a few words about yourself or your school",
      formSubmitButton: "Submit Application",
      formDisclaimer: "By submitting the form, you agree to receive emails from us with project updates. No spam.",
      ctaBenefits: [
        "• Early discount on the device",
        "• Joint development of educational program",
        "• Direct contact with the team and ability to influence the product"
      ],
      cardLessonText: "Lesson · Basic Kuis",
      cardRealtimeText: "Live Session",
      featureSchools: "For schools and individual students",
      featureLanguages: "Available in KZ / RU / EN",
      prevImageLabel: "Previous photo",
      nextImageLabel: "Next photo",
      goToImageLabel: "Go to photo",
      benefits: [
        {
          title: "Live dombra learning",
          desc: "LED lighting shows where to place fingers, while the app listens to your playing in real-time and provides feedback.",
        },
        {
          title: "Cultural preservation",
          desc: "We help young Kazakhs worldwide connect with their national culture through a convenient digital format.",
        },
        {
          title: "Teacher + device",
          desc: "Q-Uiren enhances the teacher's work: homework becomes transparent, progress becomes measurable.",
        },
      ],
      tech: [
        {
          title: "Smart LED Neck",
          desc: "LED strip under frets shows correct finger positions based on selected kui or exercise.",
        },
        {
          title: "Audio Recognition",
          desc: "Phone microphone and signal processing algorithms analyze pitch and rhythm of performance.",
        },
        {
          title: "Mobile Application",
          desc: "Interactive lessons, progress tracking, achievements and recommendations for next steps.",
        },
        {
          title: "Cloud Analytics",
          desc: "Anonymous statistics help teachers and schools understand where students make mistakes most often.",
        },
      ],
      audience: [
        {
          title: "Students and Parents",
          desc: "Children and teenagers who want to learn dombra at home without losing motivation.",
        },
        {
          title: "Music Schools",
          desc: "Public and private schools, colleges and national music clubs.",
        },
        {
          title: "Kazakh Diaspora",
          desc: "Kazakhs abroad who want to maintain connection with culture in a convenient digital format.",
        },
      ],
      faqs: [
        {
          q: "What is Q-Uiren?",
          a: "Q-Uiren is a smart device for learning dombra: LED neck + mobile app with interactive lessons and real-time feedback.",
        },
        {
          q: "Do I need a teacher or can I learn by myself?",
          a: "The device works both as a supplement to teacher lessons and as an independent tool for home learning.",
        },
        {
          q: "What languages will the app support?",
          a: "We plan to support Kazakh, Russian and English to be understandable both in Kazakhstan and abroad.",
        },
        {
          q: "When will the device be available for purchase?",
          a: "We are currently at the prototype and pilot launch stage with partner schools. Open pre-order is planned after testing completion.",
        },
      ],
    },
    KZ: {
      navigation: [
        { name: "Жоба туралы", href: "#about" },
        { name: "Артықшылықтары", href: "#why" },
        { name: "Технология", href: "#tech" },
        { name: "Кімге керек", href: "#audience" },
        { name: "Сұрақ-жауап", href: "#faq" },
      ],
      tagline: "заманауи домбыра жас ұрпаққа",
      pilotBadge: "Музыка мектептерінде сынап жатырмыз",
      heroTitle: "Алғашқы ақылды домбыра",
      heroSubtitle: "LED жарықтандыру және тікелей кері байланыспен",
      heroDescription: "Q-Uiren арқылы ата-бабалардың домбырасы заманауи технологиямен кездеседі. Саусақты қайда басу керектігін жарық арқылы көрсетеді, телефон арқылы ойнағаныңызды тыңдайды, күйлерді үйренуде қадам сайын жетелейді.",
      ctaButton: "Алғашқылардан болу",
      learnMore: "Көбірек білу",
      contactButton: "Хабарласу",
      aboutTitle: "Q-Uiren неге ерекше?",
      aboutDescription: "Дәстүрлі домбыра сабақтары көбінесе көп уақытты, мектепке жол жүруді талап етеді және мұғалімнің кестесіне тәуелді болады. Q-Uiren басқа форматты ұсынады: егер сізде тірі мұғалім болса, оны сақтайсыз, бірақ оқытудың бір бөлігін үйге көшіресіз – дәл визуалды нұсқаулар мен адал аналитикамен. Құрылғы оқушыға сабақтар арасында адаспауға және біртіндеп дұрыс техниканы қалыптастыруға көмектеседі.",
      whyTitle: "Неге Q-Uiren таңдау керек?",
      whyDescription: "Біздің мақсат - домбыраны гаджетке айналдыру емес. Керісінше, ата-бабалардың аспабын жас балаларға жақындату. Дәстүр мен технологияны, мұғалімдік пен жаңалықты бірге қолданып, үйренуді қызықты әрі нәтижелі етеміз.",
      techTitle: "Қалай жұмыс істейді",
      techDescription: "Техника, бағдарлама және педагогиканы бірге қолданамыз. LED жарығынан бастап дыбыс талдауға дейін барлығы техникалық білімсіз де түсінікті болуы үшін жасалған.",
      audienceTitle: "Кімге арналған",
      audienceDescription: "Q-Uiren ұрпақтарды жалғастырады: күй ойнайтын ата-әжелер, телефонмен өскен балалар, оқушылардың дамуын көргісі келетін мұғалімдер - барлығына бірдей пайдалы.",
      ctaTitle: "Алғашқы қолданушылар тобына қосылу",
      ctaDescription: "Q-Uiren-ді басқалардан бұрын сынап көргісі келетін музыка мектептері, мұғалімдер, отбасылар іздеп жатырмыз. Байланыс жолдарыңызды қалдырыңыз - дайын болғанда хабарласамыз.",
      faqTitle: "Көп сұралатын сұрақтар",
      formNameLabel: "Есіміңіз",
      formNamePlaceholder: "Мысалы: Айгүл Нұрланқызы",
      formEmailLabel: "Электрондық пошта",
      formEmailPlaceholder: "name@example.com",
      formRoleLabel: "Сіз кімсіз?",
      formRoleTeacher: "Мұғалім / Музыка мектебі",
      formRoleParent: "Ата-ана",
      formRoleStudent: "Оқушы",
      formRoleOther: "Басқа",
      formMessageLabel: "Қосымша ақпарат",
      formMessagePlaceholder: "Өзіңіз немесе мектебіңіз туралы айтыңыз",
      formSubmitButton: "Жіберу",
      formDisclaimer: "Форманы толтыру арқылы жоба жаңалықтарын алуға келісесіз. Спам жоқ.",
      ctaBenefits: [
        "• Құрылғыны арзанырақ алу мүмкіндігі",
        "• Оқу бағдарламасын бірге жасау",
        "• Команда мүшелерімен тікелей сөйлесу"
      ],
      cardLessonText: "Сабақ · Алғашқы күйлер",
      cardRealtimeText: "Тікелей сабақ",
      featureSchools: "Мектептер мен жеке оқушыларға",
      featureLanguages: "Қазақша, орысша, ағылшынша",
      prevImageLabel: "Алдыңғы сурет",
      nextImageLabel: "Келесі сурет",
      goToImageLabel: "Суретке өту",
      benefits: [
        {
          title: "Домбыра үйренуді жеңілдетеді",
          desc: "Жарықты көрсеткіш саусақты қайда басу керектігін көрсетеді, бағдарлама ойнағаныңызды тыңдап, кеңес береді.",
        },
        {
          title: "Мәдениетімізді сақтайды",
          desc: "Әлемнің түкпір-түкпірінде жүрген қазақ жастарына ұлттық мәдениетпен байланысты үзбеуге көмектеседі.",
        },
        {
          title: "Мұғалімге көмекші",
          desc: "Q-Uiren мұғалімнің жұмысын жеңілдетеді: үй тапсырмасы айқын болады, дамуы көрінеді.",
        },
      ],
      tech: [
        {
          title: "Жарықты көрсеткішті мойын",
          desc: "Күй немесе жаттығуға сай саусақ орнын LED жарығымен көрсетеді.",
        },
        {
          title: "Дыбысты тану",
          desc: "Телефон микрофоны арқылы ойнағаныңызды тыңдап, дұрыс-бұрысын айтады.",
        },
        {
          title: "Телефон бағдарламасы",
          desc: "Интерактивті сабақтар, дамуды бақылау, жетістіктер мен кеңестер.",
        },
        {
          title: "Бұлттағы талдау",
          desc: "Жинақталған мәліметтер мұғалімдер мен мектептерге оқушылардың қай жерде қиналатынын көрсетеді.",
        },
      ],
      audience: [
        {
          title: "Оқушылар мен ата-аналар",
          desc: "Үйде домбыра үйренгісі келетін, қызығушылығын жоғалтқысы келмейтін балалар мен жасөспірімдер.",
        },
        {
          title: "Музыка мектептері",
          desc: "Мемлекеттік және жеке мектептер, колледждер, ұлттық музыка үйірмелері.",
        },
        {
          title: "Шетелдегі қазақтар",
          desc: "Мәдениетпен байланысты сақтағысы келетін, заманауи тәсілмен үйренгісі келетін қандастар.",
        },
      ],
      faqs: [
        {
          q: "Q-Uiren дегеніміз не?",
          a: "Q-Uiren - домбыра үйренуге арналған ақылды құрылғы: жарықты мойын + интерактивті сабақтары бар телефон бағдарламасы.",
        },
        {
          q: "Мұғалім керек пе, әлде өзім үйрене аламын ба?",
          a: "Екеуі де болады. Мұғаліммен сабаққа да көмектеседі, үйде жалғыз үйренуге де жарайды.",
        },
        {
          q: "Қандай тілдерде болады?",
          a: "Қазақша, орысша және ағылшынша тілдерінде жасау жоспарда - Қазақстанда да, шетелде де пайдалану үшін.",
        },
        {
          q: "Қашан сатып алуға болады?",
          a: "Қазір серіктес мектептермен сынап жатырмыз. Сынақ аяқталғаннан кейін алдын ала тапсырыс қабылдаймыз.",
        },
      ],
    },
  };

  // Photos for hero card (stored in /public)
  const galleryImages = [
    `${import.meta.env.BASE_URL}IMG_4705.jpeg`,
    `${import.meta.env.BASE_URL}IMG_4700.jpeg`,
    `${import.meta.env.BASE_URL}IMG_4701.jpeg`,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState("RU");

  const languages = [
    { code: "RU", name: "Русский", flag: "🇷🇺" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "KZ", name: "Қазақша", flag: "🇰🇿" },
  ];

  const handlePrevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Get current language translations
  const t = translations[currentLanguage] || translations.RU;

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
                {t.tagline}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {t.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-slate-300 rounded-lg pl-3 pr-8 py-1.5 text-xs font-medium text-slate-700 cursor-pointer hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.code}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-slate-500">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <a
              href="#cta"
              className="hidden rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide !text-white shadow-sm hover:bg-orange-600 md:inline-flex"
            >
              {t.contactButton}
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              {t.pilotBadge}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              {t.heroTitle}
              <span className="block text-blue-600">
                {t.heroSubtitle}
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.heroDescription}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-orange-500/90 px-6 py-2.5 text-sm font-semibold !text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
              >
                {t.ctaButton}
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600"
              >
                {t.learnMore}
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-500/20" />
                <span>{t.featureSchools}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-500/20" />
                <span>{t.featureLanguages}</span>
              </div>
            </div>
          </div>

          {/* Right: photo card (7:5 ratio) */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-orange-50 p-4 shadow-2xl">
              <div className="flex items-center justify-between px-1 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20" />
                  <span className="text-xs font-medium text-slate-700">
                    {t.cardLessonText}
                  </span>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-transparent border-2 border-orange-500 text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors"
                  aria-label={t.prevImageLabel}
                >
                  ‹
                </button>

                <div className="relative aspect-[7/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={galleryImages[currentImage]}
                    alt={`Q-Uiren пилотное обучение ${currentImage + 1}`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-transparent border-2 border-orange-500 text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors"
                  aria-label={t.nextImageLabel}
                >
                  ›
                </button>
              </div>

              <div className="mt-4 flex justify-center gap-3">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${index === currentImage
                      ? "bg-orange-500 border-orange-500"
                      : "bg-transparent border-orange-500"
                      }`}
                    aria-label={`${t.goToImageLabel} ${index + 1}`}
                  />
                ))}
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
            {t.aboutTitle}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.aboutDescription}
          </p>
        </section>

        {/* Why Q-Uiren */}
        <section
          id="why"
          className="mt-20 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start"
        >
          <div className="space-y-5">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
              {t.whyTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.whyDescription}
            </p>
          </div>

          <div className="grid gap-4">
            {t.benefits.map((item) => (
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
                {t.techTitle}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-600 sm:text-base">
                {t.techDescription}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.tech.map((item) => (
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
            {t.audienceTitle}
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-600 sm:text-base">
            {t.audienceDescription}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.audience.map((item) => (
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
              {t.ctaTitle}
            </h2>
            <p className="max-w-xl text-sm text-slate-700 sm:text-base">
              {t.ctaDescription}
            </p>

            <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
              {t.ctaBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-700">
                {t.formNameLabel}
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder={t.formNamePlaceholder}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                {t.formEmailLabel}
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder={t.formEmailPlaceholder}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                {t.formRoleLabel}
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                defaultValue="teacher"
              >
                <option value="teacher">{t.formRoleTeacher}</option>
                <option value="parent">{t.formRoleParent}</option>
                <option value="student">{t.formRoleStudent}</option>
                <option value="other">{t.formRoleOther}</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                {t.formMessageLabel}
              </label>
              <textarea
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows={3}
                placeholder={t.formMessagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
            >
              {t.formSubmitButton}
            </button>

            <p className="text-[10px] text-slate-500">
              {t.formDisclaimer}
            </p>
          </form>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">
            {t.faqTitle}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.faqs.map((item) => (
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