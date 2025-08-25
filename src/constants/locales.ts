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
      skill1: "JS, HTML, CSS, Sass, Chrome DevTools, Git, Express.js, NGINX, SQL, Jest, Cypress",
      skill2: "Scripting language: JavaScript, TypeScript, Python.",
      skill3: "Framework/Library: React/Redux, MUI, Django etc."
    },

    // Personal Qualities
    personalQualities: {
      title: "Personal qualities",
      quality1: "Pedantry",
      quality2: "Perseverance",
      quality3: "Mindfulness",
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

    // About Section
    about: {
      title: "About",
      description: "Passionate and dedicated web developer with three years of hands-on experience in designing and implementing cutting-edge web applications and websites. With a strong foundation in front-end development technologies, I thrive in dynamic and collaborative environments where creativity and innovation are valued. My commitment to staying updated with the latest industry trends and technologies allows me to deliver high-quality solutions that meet both client needs and business objectives. Known for my problem-solving skills, attention to detail, I am eager to leverage my expertise to contribute to the success of innovative projects and drive business growth."
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
        description: "Recently stepped into the Lead Frontend Developer role, managing a team of 5. My responsibilities include guiding the team, overseeing architecture using React and MobX, ensuring performance optimization, and delivering responsive designs. I collaborate closely with designers and backend teams to meet business goals."
      }
    },

    // Refresher Courses
    refresherCourses: {
      title: "Refresher courses",
      projectManagement: {
        date: "2018",
        title: "Certificate",
        subtitle: "Software project management",
        description: "In the Project Management courses, we studied the methods and tools necessary for successful management of the software development lifecycle. We explored various project management methodologies such as Agile, Waterfall, Scrum, and Kanban, and learned how to choose the approach most suitable for a specific project. Additionally, we delved into project planning, tracking, and control processes, as well as risk and resource management. Throughout the courses, we engaged in practical exercises including creating project plans, estimating time and resources, and managing teams and communication with stakeholders."
      },
      computerNetwork: {
        date: "2019",
        title: "Certificate",
        subtitle: "Computer network",
        description: "In the computer networking courses, we studied the fundamentals of network technologies, including data transmission protocols, network architecture, configuration, and management of network equipment. We also learned about routing principles, data routing and switching, as well as network security. During the courses, we conducted practical sessions, configuring and troubleshooting network equipment, as well as solving tasks related to network diagnostics and fault correction"
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
      skill1: "JS, HTML, CSS, Sass, Chrome DevTools, Git, Express.js, NGINX, SQL, Jest, Cypress",
      skill2: "Языки программирования: JavaScript, TypeScript, Python.",
      skill3: "Фреймворки/Библиотеки: React/Redux, MUI, Django и др."
    },

    // Personal Qualities
    personalQualities: {
      title: "Личные качества",
      quality1: "Педантичность",
      quality2: "Настойчивость",
      quality3: "Внимательность",
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

    // About Section
    about: {
      title: "О себе",
      description: "Увлеченный и преданный веб-разработчик с трехлетним практическим опытом проектирования и реализации современных веб-приложений и веб-сайтов. Имея прочную основу в технологиях фронтенд-разработки, я преуспеваю в динамичной и совместной среде, где ценятся творчество и инновации. Моя приверженность постоянному обновлению последних отраслевых тенденций и технологий позволяет мне предоставлять высококачественные решения, которые соответствуют как потребностям клиентов, так и бизнес-целям. Известный своими навыками решения проблем и вниманием к деталям, я стремлюсь использовать свой опыт для содействия успеху инновационных проектов и стимулирования роста бизнеса."
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
        description: "Недавно занял должность ведущего Frontend разработчика, управляя командой из 5 человек. Мои обязанности включают руководство командой, контроль архитектуры с использованием React и MobX, обеспечение оптимизации производительности и доставку адаптивных дизайнов. Я тесно сотрудничаю с дизайнерами и backend командами для достижения бизнес-целей."
      }
    },

    // Refresher Courses
    refresherCourses: {
      title: "Курсы повышения квалификации",
      projectManagement: {
        date: "2018",
        title: "Сертификат",
        subtitle: "Управление программными проектами",
        description: "На курсах по управлению проектами мы изучали методы и инструменты, необходимые для успешного управления жизненным циклом разработки программного обеспечения. Мы изучили различные методологии управления проектами, такие как Agile, Waterfall, Scrum и Kanban, и научились выбирать подход, наиболее подходящий для конкретного проекта. Кроме того, мы углубились в процессы планирования, отслеживания и контроля проектов, а также управления рисками и ресурсами. На протяжении курсов мы участвовали в практических упражнениях, включая создание планов проектов, оценку времени и ресурсов, а также управление командами и коммуникацию с заинтересованными сторонами."
      },
      computerNetwork: {
        date: "2019",
        title: "Сертификат",
        subtitle: "Компьютерные сети",
        description: "На курсах по компьютерным сетям мы изучали основы сетевых технологий, включая протоколы передачи данных, архитектуру сети, конфигурацию и управление сетевым оборудованием. Мы также изучали принципы маршрутизации, маршрутизацию и коммутацию данных, а также безопасность сети. Во время курсов мы проводили практические занятия, конфигурируя и устраняя неполадки сетевого оборудования, а также решая задачи, связанные с диагностикой сети и исправлением неисправностей."
      }
    }
  }
};

// Хук для автоматического перерендеринга при смене языка
export const useText = (key: string): string => {
  const { currentLocale } = useLocaleStore();
  const keys = key.split('.');
  let value: any = locales[currentLocale as keyof typeof locales];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Text key not found: ${key}`);
      return key;
    }
  }
  
  return value;
};

// Функция для получения текста по ключу (для использования вне компонентов)
export const getText = (key: string): string => {
  const { currentLocale } = useLocaleStore.getState();
  const keys = key.split('.');
  let value: any = locales[currentLocale as keyof typeof locales];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Text key not found: ${key}`);
      return key;
    }
  }
  
  return value;
};
