import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight, Sparkles, Zap, Music, Users, Play, Code2, Flame, Headphones } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(-1);

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
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-950 to-stone-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-stone-900/90 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Q-Uiren</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {t.navigation.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-amber-200 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center gap-4">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="bg-stone-800 text-white text-xs px-3 py-2 rounded-lg border border-amber-700/50 hover:border-orange-500/50 transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>

              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-amber-900/30 py-4 space-y-3"
            >
              {t.navigation.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="block text-amber-200 hover:text-orange-400 transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-end pt-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}Quiren — Умный домбра-учитель (2).pptx (1).png`}
            alt="Quiren"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/40 to-transparent" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl w-full md:mr-12 lg:mr-20 text-left space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full w-fit"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">{t.pilotBadge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {t.heroTitle}
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {t.heroSubtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-amber-100 leading-relaxed max-w-xl"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 flex items-center justify-center gap-2">
              {t.ctaButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-orange-600/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-600/10 transition-colors">
              {t.learnMore}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-stone-950/70 to-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t.aboutTitle}</h2>
              <p className="text-lg text-amber-100 leading-relaxed">{t.aboutDescription}</p>
              <motion.button
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold"
              >
                {t.learnMore}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 border border-amber-700/50 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
              <div className="relative z-10 text-center">
                <Flame className="w-24 h-24 text-orange-500/30 mx-auto mb-4" />
                <p className="text-amber-300 font-semibold">{t.cardLessonText}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.whyTitle}</h2>
            <p className="text-lg text-amber-200 max-w-2xl mx-auto">{t.whyDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {t.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-amber-700/50 hover:border-orange-600/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 p-3 mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-amber-100">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="relative py-20 px-4 bg-gradient-to-b from-stone-900/60 to-stone-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.techTitle}</h2>
            <p className="text-lg text-amber-200 max-w-2xl mx-auto">{t.techDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {t.tech.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 border border-amber-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 p-3 mb-4">
                  <Code2 className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-amber-100">{tech.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.audienceTitle}</h2>
            <p className="text-lg text-amber-200 max-w-2xl mx-auto">{t.audienceDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {t.audience.map((aud, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-500/10 group-hover:from-orange-600/20 group-hover:to-amber-500/20 transition-all" />
                <div className="absolute inset-0 border border-orange-600/30 group-hover:border-orange-600/50 transition-all rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 p-2.5 mb-4">
                    <Users className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{aud.title}</h3>
                  <p className="text-amber-100">{aud.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-4 bg-gradient-to-b from-stone-950/70 to-stone-900/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.faqTitle}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.05 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="border border-amber-700/50 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full p-6 bg-stone-800/50 hover:bg-stone-800 transition-all flex items-center justify-between group"
                >
                  <span className="text-lg font-semibold text-white text-left">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFaq === idx ? "auto" : 0,
                    opacity: expandedFaq === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-stone-900/50 border-t border-amber-700/50 text-amber-100">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 bg-gradient-to-br from-orange-900/30 to-amber-900/20 border border-orange-600/30"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t.ctaTitle}</h2>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto">{t.ctaDescription}</p>

              <div className="space-y-4 flex flex-col items-center">
                {t.ctaBenefits.map((benefit, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-orange-400 text-base font-medium"
                  >
                    {benefit}
                  </motion.p>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                {t.contactButton}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 py-12 px-4 bg-stone-950/95">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mb-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Q-Uiren</span>
              </div>
              <p className="text-sm text-amber-300">{t.tagline}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Product</h4>
              {t.navigation.slice(0, 3).map((item, i) => (
                <a key={i} href={item.href} className="block text-sm text-amber-300 hover:text-orange-400 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Community</h4>
              <a href="#" className="block text-sm text-amber-300 hover:text-orange-400 transition-colors">
                Contact
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Legal</h4>
              <a href="#" className="block text-sm text-amber-300 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </motion.div>

          <div className="border-t border-amber-900/30 pt-8 text-center text-sm text-amber-400/70">
            <p>© 2026 Q-Uiren. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default QUirenLandingPage;