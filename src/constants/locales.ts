import { create } from 'zustand';

// Типы для локализации
type Locale = 'en' | 'ru';

interface LocaleStore {
  currentLocale: Locale;
  setLocale: (locale: Locale) => void;
  initLocale: () => void;
}

// Функция для определения языка из user agent
const detectUserLanguage = (): Locale => {
  const userLang = navigator.language || navigator.languages?.[0] || 'en';
  const shortLang = userLang.split('-')[0].toLowerCase();

  if (shortLang === 'ru') {
    return 'ru';
  }
  return 'en';
};

// Store для управления локалью
export const useLocaleStore = create<LocaleStore>((set, get) => ({
  currentLocale: 'en',
  setLocale: (locale: Locale) => {
    set({ currentLocale: locale });
    localStorage.setItem('locale', locale);
  },
  initLocale: () => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ru')) {
      set({ currentLocale: savedLocale });
    } else {
      const detectedLang = detectUserLanguage();
      set({ currentLocale: detectedLang });
      localStorage.setItem('locale', detectedLang);
    }
  }
}));

export const locales = {
  en: {
    // Personal Information
    personal: {
      name: "Chalysh Dmitrii",
      title: "Frontend Developer",
      birthDate: "Bishkek, August 20, 1996",
      phone1: "+996 225 55 35 11",
      phone2: "+996 705 55 35 11",
      email: "faimos69@gmail.com",
      location: "Kyrgyzstan, Bishkek"
    },

    // Skills Section
    skills: {
      title: "Skills",
      core: "JavaScript, TypeScript, React, Redux, MobX, HTML5, CSS3, Sass",
      architecture: "Micro-frontends, Module Federation, Component Architecture",
      tools: "Git, Webpack, Vite, Chrome DevTools, Jest, Cypress, Docker, CI/CD, NGINX, Linux Administration",
      backend: "Express.js, SQL, Python, Django",
      uiLibraries: "MUI, Ant Design, Custom Component Libraries"
    },

    // Personal Qualities
    personalQualities: {
      title: "Personal qualities",
      quality1: "Attention to detail",
      quality2: "Perseverance",
      quality3: "Quality-oriented",
      quality4: "Sociability"
    },

    // Honor & Awards
    honorAwards: {
      title: "Honor & award",
      bestTalk: {
        title: "The best talk",
        year: "2020",
        description: "The 62nd International Network Scientific and Technical Conference 'Наука, техника и инженерное образование в цифровую эпоху: идеи и решения'"
      },
      letterOfThanks: {
        title: "Letter of thanks",
        year: "2021",
        description: "For professional implementation of partner integrations at Balance.kg, as well as responsible involvement in company processes beyond regular duties."
      }
    },

    // Hobbies & Interests
    hobbies: {
      title: "Hobbies & Interest",
      hobby1: "Tech Meetups and Conferences",
      hobby2: "Design and Creativity",
      hobby3: "Fitness and Outdoor Activities",
      hobby4: "Music and Creative Arts"
    },

    // Links & Credentials
    links: {
      title: "Links & Credentials"
    },

    // Download
    download: {
      tooltip: "Download PDF",
      button: "Download"
    },

    // About Section
    about: {
      title: "About",
      description: "Lead Frontend Developer with 5+ years of experience in Fintech and Telecom. Specialized in building scalable web applications, leading development teams, and architecting modern frontend solutions. Proven track record in transformation projects, implementing testing culture, and optimizing CI/CD processes. Experienced in full-stack development with DevOps expertise."
    },

    // Education Section
    education: {
      title: "Education",
      bachelor: {
        date: "2015-2018",
        title: "KSTU named after I.Razzakova",
        subtitle: "Bachelor's degree in Computer Science and Computer Science",
        description: "During my computer science studies, I gained a solid understanding of programming languages, algorithms, and data structures. I worked on projects applying software development methodologies, object-oriented programming, and database management. My education also emphasized critical thinking and problem-solving, and I explored electives in web development, mobile apps, and AI to broaden my skills."
      },
      master: {
        date: "2018-2020",
        title: "KSTU named after I.Razzakova",
        subtitle: "Master's degree in Computer Science and Computer Science",
        description: "During my master's in computer science, I explored advanced algorithms, data structures, and software engineering. I participated in research and seminars, contributing to innovative solutions and emerging technologies. Collaborating on projects enhanced my understanding of complex programming concepts and sharpened my problem-solving skills, preparing me for challenges in the field."
      }
    },

    // Experience Section
    experience: {
      title: "Experience",
      kstu: {
        date: "Sep 2018 - Sep 2020",
        title: "KSTU named after I.Razzakova",
        subtitle: "Engineer",
        description: "For the past two years, I have managed a computer lab, overseeing daily operations and leading a team of technicians. My responsibilities included maintaining equipment, managing the lab's budget, and ensuring all systems function smoothly. I've demonstrated leadership, effective communication, and a commitment to excellence throughout my tenure."
      },
      beeline: {
        date: "Dec 2020 - May 2024",
        title: "Beeline kg",
        subtitle: "Frontend developer",
        description: "For the past three years, I have focused on web development, designing and maintaining web applications and collaborating with cross-functional teams. I have implemented responsive designs for optimal user experience across devices while staying updated with the latest technologies and best practices in the field."
      },
      mbank: {
        date: "Jun 2024 - Present",
        title: "MBANK",
        subtitle: "Lead Frontend developer",
        description: "Lead frontend development for MBusiness, a key B2B banking product, managing a team of 5 developers. Led the migration/refactoring of legacy modules to a modern stack (React + MobX), achieving zero critical stoppers during active product scaling. Implemented a testing culture using Jest/Cypress, covering core business logic with tests to ensure 99.9% stability. Optimized CI/CD processes and performance, significantly reducing time-to-market for new features. Developed custom component libraries to standardize UI elements and speed up development across teams. Oversee frontend architecture, performance optimization, and collaborate closely with designers and backend teams to meet business goals."
      }
    },

    // Refresher Courses
    refresherCourses: {
      title: "Refresher courses",
      projectManagement: {
        date: "2018",
        title: "Certificate",
        subtitle: "Software project management",
        description: "Project management methodologies: Agile, Waterfall, Scrum, Kanban."
      },
      computerNetwork: {
        date: "2019",
        title: "Certificate",
        subtitle: "Computer network",
        description: "Network technologies, protocols, configuration, and security."
      }
    }
  },

  // Русская локализация
  ru: {
    // Personal Information
    personal: {
      name: "Чалыш Дмитрий",
      title: "Frontend Разработчик",
      birthDate: "Бишкек, 20 августа 1996",
      phone1: "+996 225 55 35 11",
      phone2: "+996 705 55 35 11",
      email: "faimos69@gmail.com",
      location: "Кыргызстан, Бишкек"
    },

    // Skills Section
    skills: {
      title: "Навыки",
      core: "JavaScript, TypeScript, React, Redux, MobX, HTML5, CSS3, Sass",
      architecture: "Микрофронтенды, Module Federation, Компонентная архитектура",
      tools: "Git, Webpack, Vite, Chrome DevTools, Jest, Cypress, Docker, CI/CD, NGINX, Linux Administration",
      backend: "Express.js, SQL, Python, Django",
      uiLibraries: "MUI, Ant Design, Пользовательские компонентные библиотеки"
    },

    // Personal Qualities
    personalQualities: {
      title: "Личные качества",
      quality1: "Внимание к деталям",
      quality2: "Настойчивость",
      quality3: "Ориентация на качество",
      quality4: "Общительность"
    },

    // Honor & Awards
    honorAwards: {
      title: "Почетные награды",
      bestTalk: {
        title: "Лучший доклад",
        year: "2020",
        description: "62-я Международная сетевая научно-техническая конференция 'Наука, техника и инженерное образование в цифровую эпоху: идеи и решения'"
      },
      letterOfThanks: {
        title: "Благодарственное письмо",
        year: "2021",
        description: "За профессиональную реализацию партнерских интеграций в Balance.kg, а также ответственное участие в процессах компании помимо обычных обязанностей."
      }
    },

    // Hobbies & Interests
    hobbies: {
      title: "Хобби и интересы",
      hobby1: "Технические встречи и конференции",
      hobby2: "Дизайн и творчество",
      hobby3: "Фитнес и активный отдых",
      hobby4: "Музыка и творческие искусства"
    },

    // Links & Credentials
    links: {
      title: "Ссылки и учетные данные"
    },

    // Download
    download: {
      tooltip: "Скачать PDF",
      button: "Скачать"
    },

    // About Section
    about: {
      title: "О себе",
      description: "Ведущий Frontend разработчик с опытом работы 5+ лет в Финтехе и Телекоме. Специализируюсь на разработке масштабируемых веб-приложений, руководстве командами разработки и проектировании современных frontend решений. Доказанный опыт в проектах трансформации, внедрении культуры тестирования и оптимизации CI/CD процессов. Имею опыт full-stack разработки с экспертизой в DevOps."
    },

    // Education Section
    education: {
      title: "Образование",
      bachelor: {
        date: "2015-2018",
        title: "КГТУ им. И.Раззаковой",
        subtitle: "Бакалавр компьютерных наук и информатики",
        description: "Во время изучения компьютерных наук я получил твердое понимание языков программирования, алгоритмов и структур данных. Я работал над проектами, применяя методологии разработки программного обеспечения, объектно-ориентированное программирование и управление базами данных. Мое образование также подчеркивало критическое мышление и решение проблем, и я изучал элективные курсы по веб-разработке, мобильным приложениям и ИИ для расширения навыков."
      },
      master: {
        date: "2018-2020",
        title: "КГТУ им. И.Раззаковой",
        subtitle: "Магистр компьютерных наук и информатики",
        description: "Во время магистратуры по компьютерным наукам я изучал продвинутые алгоритмы, структуры данных и разработку программного обеспечения. Я участвовал в исследованиях и семинарах, внося вклад в инновационные решения и новые технологии. Сотрудничество над проектами улучшило мое понимание сложных концепций программирования и отточило навыки решения проблем, подготовив меня к вызовам в этой области."
      }
    },

    // Experience Section
    experience: {
      title: "Опыт работы",
      kstu: {
        date: "Сен 2018 - Сен 2020",
        title: "КГТУ им. И.Раззаковой",
        subtitle: "Инженер",
        description: "В течение последних двух лет я управлял компьютерной лабораторией, контролируя ежедневные операции и руководя командой техников. Мои обязанности включали обслуживание оборудования, управление бюджетом лаборатории и обеспечение бесперебойной работы всех систем. Я продемонстрировал лидерство, эффективную коммуникацию и приверженность совершенству на протяжении всего срока работы."
      },
      beeline: {
        date: "Дек 2020 - Май 2024",
        title: "Beeline kg",
        subtitle: "Frontend разработчик",
        description: "В течение последних трех лет я сосредоточился на веб-разработке, проектировании и поддержке веб-приложений и сотрудничестве с межфункциональными командами. Я реализовал адаптивные дизайны для оптимального пользовательского опыта на всех устройствах, постоянно обновляясь с последними технологиями и лучшими практиками в этой области."
      },
      mbank: {
        date: "Июн 2024 - Настоящее время",
        title: "МБАНК",
        subtitle: "Ведущий Frontend разработчик",
        description: "Руковожу frontend разработкой MBusiness, ключевого B2B банковского продукта, управляя командой из 5 разработчиков. Провел миграцию/рефакторинг legacy модулей на современный стек (React + MobX), достигнув нулевого количества критических стопперов в процессе активного масштабирования продукта. Внедрил культуру тестирования с использованием Jest/Cypress, покрыв тестами основную бизнес-логику для обеспечения стабильности 99.9%. Оптимизировал CI/CD процессы и производительность, значительно сократив время вывода новых функций на рынок. Разработал пользовательские компонентные библиотеки для стандартизации UI элементов и ускорения разработки в командах. Контролирую frontend архитектуру, оптимизацию производительности и тесно сотрудничаю с дизайнерами и backend командами для достижения бизнес-целей."
      }
    },

    // Refresher Courses
    refresherCourses: {
      title: "Курсы повышения квалификации",
      projectManagement: {
        date: "2018",
        title: "Сертификат",
        subtitle: "Управление программными проектами",
        description: "Методологии управления проектами: Agile, Waterfall, Scrum, Kanban."
      },
      computerNetwork: {
        date: "2019",
        title: "Сертификат",
        subtitle: "Компьютерные сети",
        description: "Сетевые технологии, протоколы, конфигурация и безопасность."
      }
    }
  }
};

const resolveKey = (key: string, locale: keyof typeof locales): string => {
  const keys = key.split('.');
  let value: any = locales[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Text key not found: ${key}`);
      return key;
    }
  }

  return value as string;
};

// Хук для автоматического перерендеринга при смене языка
export const useText = (key: string): string => {
  const { currentLocale } = useLocaleStore();
  return resolveKey(key, currentLocale as keyof typeof locales);
};

// Функция для получения текста по ключу (для использования вне компонентов)
export const getText = (key: string): string => {
  const { currentLocale } = useLocaleStore.getState();
  return resolveKey(key, currentLocale as keyof typeof locales);
};
