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

  // Русская локализация (можно добавить позже)
  ru: {
    // TODO: Добавить русские переводы
  }
};

// Текущая локаль (по умолчанию английская)
export const currentLocale = 'en';

// Функция для получения текста по ключу
export const getText = (key: string): string => {
  const keys = key.split('.');
  let value: any = locales[currentLocale];
  
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
