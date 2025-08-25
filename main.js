const body = document.body;
// FOR THE HEADER
const headerText = {
  home: { en: "Home", fa: "خانه", de: "Startseite", href: "#home" },
  about: { en: "About", fa: "درباره", de: "Uber uns", href: "#about" },
  projects: { en: "Projects", fa: "پروژه‌ها", de: "Projekte", href: "#projects" },
  contact: { en: "Contact", fa: "تماس با ما", de: "Kontakt", href: "#contact" }
};
function createHeader(selectedLang, selectedWidth) {

  const oldHeader = document.querySelector("header");
  if (oldHeader) oldHeader.remove();
  const header = document.createElement("header");

  const isMobile = selectedWidth <= 725;
  if (isMobile) {
    header.classList.add("mobile-header");

    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.classList.add("hamburger-btn", "style", "btn-type-1");
    hamburgerBtn.innerHTML = `<i class="ri-menu-line ri-2x"></i>`;


    const mobileNav = document.createElement("div");
    mobileNav.classList.add("mobile-nav", 'style');
     Object.keys(headerText).forEach(key => {
      const a = document.createElement("a");
      a.classList.add("nav-btn");
      a.href = headerText[key].href;
      a.textContent = headerText[key][selectedLang];
      mobileNav.appendChild(a);
    });

    hamburgerBtn.addEventListener('click', () => {

      if (mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
        toggles.classList.remove('hide');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.innerHTML = `<i class="ri-menu-line ri-2x"></i>`;

      } else {
        mobileNav.classList.add('show');
        toggles.classList.add('hide');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.innerHTML = `<i class="ri-close-large-line ri-2x"></i>`;
      }
    })

    header.appendChild(hamburgerBtn);
    header.appendChild(mobileNav);

  } else {
    header.classList.add("desktop-header");

    const nav = document.createElement("div");
    nav.classList.add("nav-bar", "style");

    Object.keys(headerText).forEach(key => {
      const a = document.createElement("a");
      a.classList.add("nav-btn");
      a.href = headerText[key].href;
      a.textContent = headerText[key][selectedLang];
      nav.appendChild(a);
    });

    header.appendChild(nav);
  }

  const toggles = document.createElement("div");
  toggles.classList.add("toggles");
  const themeBtn = document.createElement("button");
  themeBtn.classList.add("style", "btn-type-1");
  themeBtn.innerHTML = `<i class="ri-contrast-2-line ri-2x"></i>`;


  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.querySelector('.shape').classList.toggle('cancel')
  });


  const langBtn = document.createElement("button");
  langBtn.classList.add("style", "btn-type-1");
  langBtn.innerHTML = `<i class="ri-global-line ri-2x"></i><span>${selectedLang.toUpperCase()}</span>`;


  const languages = ["en", "de", "fa"];
  let currentLangIndex = languages.indexOf(selectedLang);

  langBtn.addEventListener("click", () => {
      currentLangIndex = (currentLangIndex + 1) % languages.length;
      selectedLang = languages[currentLangIndex];
      main(selectedLang)
  });

  toggles.appendChild(themeBtn);
  toggles.appendChild(langBtn);
  header.appendChild(toggles);

  return header;
}
// FOR THE FOOTER 
const footerText = {
  en: "© 2025 Amir Shygun | All rights reserved.",
  fa: "© ۲۰۲۵ امیر شایگان | کلیه حقوق محفوظ است.",
  de: "© 2025 Amir Shygun | Alle Rechte vorbehalten."
};
function createFooter(selectedLang) {
    const footer = document.createElement("footer");
    // Left text
    const divText = document.createElement("p");
    divText.textContent = footerText[selectedLang];
    footer.appendChild(divText);

    // Right go-top button
    const divBtn = document.createElement("div");
    const goTopBtn = document.createElement("a");
    goTopBtn.classList.add("style", "btn-type-1", "go-top");
    // goTopBtn.href = "#"; // or could use id of top section
    goTopBtn.innerHTML = `<i class="ri-arrow-up-line ri-2x"></i>`;

    goTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    divBtn.appendChild(goTopBtn);
    footer.appendChild(divBtn);

    return footer;
}
// FOR THE LINES IN BETEWEN 
const sectionTexts = {
  activities: { en: "Activities", fa: "فعالیت‌ها", de: "Aktivitäten" },
  education:  { en: "Education",  fa: "تحصیلات",  de: "Bildung" },
  projects:   { en: "Projects",   fa: "پروژه‌ها",  de: "Projekte" },
  contact:    { en: "Contact",    fa: "تماس با ما", de: "Kontakt" },
  tech:       { en: "Tech Stack", fa: "فناوری‌ها", de: "Technologie-Stack" }
};
function createSectionTitle({ textKey = null, lang = "en", className = "line left" } = {}) {
  const h2 = document.createElement("h2");
  if (lang === 'fa') {
    if ( className === 'line left') {
      h2.className = 'line right';
    } else {
      h2.className = 'line left';
    }
  } else {
    h2.className = className

  }

  if (textKey && sectionTexts[textKey] && className !== "line center") {
    h2.textContent = sectionTexts[textKey][lang];
  }
  return h2;
}
// FOR THE INTRODUCTION DIV 
const introTexts = {
  en: {
    openToWork: "Open to work",
    hiName: "Hi, I'm",
    name: "Amir Shygun",
    description: "Frontend Developer by day & Data Engineer by night. I enjoy tweaking numbers, be it margins and paddings or machine learning hyper-parameters.",
    location: "Based in Iran, Rasht",
    resumeText: "Resume",
    linkedin: "LinkedIn",
    github: "Github",
    email: "Email",
    telegram: "Telegram"
  },
  fa: {
    openToWork: "آماده به کار",
    hiName: "سلام، من",
    name: "امیر شایگان",
    description: "توسعه‌دهنده فرانت‌اند در  روز و مهندس داده در  شب. من از تنظیم اعداد لذت می‌برم، چه حاشیه‌ها و فاصله‌ها باشد چه ابرپارامترهای یادگیری ماشین.",
    location: "ساکن ایران، رشت",
    resumeText: "رزومه",
    linkedin: "لینکدین",
    github: "گیت‌هاب",
    email: "ایمیل",
    telegram: "تلگرام"
  },
  de: {
    openToWork: "Offen für Arbeit",
    hiName: "Hallo, ich bin",
    name: "Amir Shygun",
    description: "Frontend-Entwickler tagsüber & Dateningenieur nachts. Ich genieße es, Zahlen zu optimieren, sei es Margins und Padding oder Machine-Learning-Hyperparameter.",
    location: "Ansässig in Iran, Rasht",
    resumeText: "Lebenslauf",
    linkedin: "LinkedIn",
    github: "Github",
    email: "Email",
    telegram: "Telegram"
  }
};
function createIntro(selectedLang) {
  const texts = introTexts[selectedLang];
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const info = document.createElement("div");
  info.classList.add("info");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text");

  const pOpen = document.createElement("p");
  pOpen.innerHTML = `${texts.openToWork} <span class="dot"></span>`;

  const h1Name = document.createElement("h1");
  h1Name.classList.add("name");
  h1Name.innerHTML = selectedLang === 'fa'
    ? `${texts.hiName} <br><span>${texts.name}</span> هستم`
    : `${texts.hiName} <br><span>${texts.name}</span>`;

  const pDesc = document.createElement("p");
  pDesc.textContent = texts.description;

  const aLocation = document.createElement("a");
  aLocation.href = "https://www.google.com/search?q=rasht+gilan";
  aLocation.target = "_blank";
  aLocation.innerHTML = `${texts.location} <i class="ri-global-line"></i>`;

  textDiv.append(pOpen, h1Name, pDesc, aLocation);

  const socialsDiv = document.createElement("div");
  socialsDiv.classList.add("socials");

  const socialButtons = [
    {
      type: "resume",
      href: `./resume/resume_${selectedLang}.jpg`,
      text: texts.resumeText,
      download: `Amir_Shygun_Resume_${selectedLang}.pdf`,
      icon: "ri-file-download-fill"
    },
    {
      type: "linkedin",
      href: 'https://www.linkedin.com/in/amirshygun',
      text: texts.linkedin,
      icon: "ri-linkedin-box-fill"
    },
    {
      type: "github",
      href: 'https://github.com/a-shygun',
      text: texts.github,
      icon: "ri-github-fill"
    },
    {
      type: "email",
      href: `mailto:ryan.shygun@gmail.com`,
      text: texts.email,
      icon: "ri-mail-fill"
    },
    {
      type: "telegram",
      href: `https://t.me/Ryxnole`,
      text: texts.telegram,
      icon: "ri-telegram-2-line"
    }
  ];

  socialButtons.forEach(btn => {
    const a = document.createElement("a");
    a.innerHTML = `<i class="${btn.icon} ri-xl"></i> <span>${btn.text}</span>`;

    if (btn.type === "resume") {
      a.href = btn.href;
      a.classList.add('resume', 'style','btn-type-2');
      a.setAttribute("download", btn.download);
      a.target = "_blank";
    } else {
      a.classList.add('social');

      a.href = btn.href;
      a.target = "_blank";
    }

    socialsDiv.appendChild(a);
  });

  info.append(textDiv, socialsDiv);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  const img = document.createElement("img");
  img.src = "./images/profile.jpg";
  img.alt = "Profile Picture";
  imageDiv.appendChild(img);

  intro.append(imageDiv, info);

  intro.dir = selectedLang === "fa" ? "rtl" : "ltr";

  return intro;
}
// FOR THE TECH STACKS DIV 
const webTechs = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", url: "https://jquery.com/" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com/" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.kernel.org/" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
];
const dataTechs = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org/" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org/" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", url: "https://matplotlib.org/" },
    { name: "Seaborn", icon: "https://img.icons8.com/?size=512&id=90519&format=png", url: "https://seaborn.pydata.org/" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org/" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org/" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", url: "https://keras.io/" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org/" },
];
const techTexts = {
  web: {
    title: {
      en: "Web Development",
      fa: "توسعه وب",
      de: "Webentwicklung"
    },
    description: {
      en: "2 Years of experience building responsive web applications. Interested in:",
      fa: "۲ سال تجربه در ساخت برانمه های وب واکنش گرا. علاقه مند به :",
      de: "2 Jahre Erfahrung im Erstellen responsiver Webanwendungen. Interessiert an:"
    },
    interestedIn: {
      en: "Interested in",
      fa: "علاقه‌مند به",
      de: "Interessiert an"
    },
    topics: {
      en: ["Glassmorphism", "Neobrutalism", "Skewmorphism"],
      fa: ["گلس‌مورفیسم", "نئوبرتالیزم", "اسکیومورفیسم"],
      de: ["Glassmorphismus", "Neobrutalismus", "Skewmorphismus"]
    }
  },
  data: {
    title: {
      en: "Data Sciences",
      fa: "علوم داده",
      de: "Datenwissenschaften"
    },
    description: {
      en: "EDA, Modeling, and Deployment for real world usecases. Interested in:",
      fa: "تحلی اکتشافی، مدلسازی، و استقرار برای کاربردهای واقعی. علاقه مند به: ",
      de: "EDA, Modellierung und Bereitstellung für reale Anwendungsfälle. Interessiert an:"
    },

    topics: {
      en: ["Data Visualization", "Recommender Systems", "Model Training"],
      fa: ["تصویری‌سازی داده", "سیستم‌های پیشنهاددهنده", "آموزش مدل"],
      de: ["Datenvisualisierung", "Empfehlungssysteme", "Modelltraining"]
    }
  }
};
function createTech(selectedLang) {
  const oldTech = document.querySelector(".tech");
  if (oldTech) oldTech.remove();

  const tech = document.createElement("div");
  tech.classList.add("tech");

  function createInfoSection(type) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add(`${type}-info`, "info", 'style');

    const title = document.createElement("h1");
    title.textContent = techTexts[type].title[selectedLang];

    const description = document.createElement("p");
    description.textContent = techTexts[type].description[selectedLang];

    const topicsDiv = document.createElement("div");
    topicsDiv.classList.add("topics");
    techTexts[type].topics[selectedLang].forEach(topic => {
      const a = document.createElement("a");
      a.href = `https://www.google.com/search?q=${encodeURIComponent(topic)}`;
      a.target = "_blank";
      a.textContent = topic;
      topicsDiv.appendChild(a);
    });

    infoDiv.append(title, description, topicsDiv);
    return infoDiv;
  }

  function createCarouselSection(type, techArray) {
    const carouselWrapper = document.createElement("div");
    carouselWrapper.classList.add(`${type}-carousel`, "carousel-wrapper");

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    techArray.forEach(item => {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";

      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = item.name;
      img.title = item.name;
      a.appendChild(img);

      const p = document.createElement('p');
      p.textContent = item.name;
      a.appendChild(p);

      carousel.appendChild(a);
    });

    techArray.forEach(item => {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = item.name;
      img.title = item.name;
      a.appendChild(img);
      const p = document.createElement('p');
      p.textContent = item.name;
      a.appendChild(p);
      carousel.appendChild(a);
    });

    carouselWrapper.appendChild(carousel);

    let scrollInterval;
    function startScroll() {
      scrollInterval = setInterval(() => {
        const direction = type === "web" ? 1 : -1;
        carouselWrapper.scrollLeft += direction;
        if (direction === 1 && carouselWrapper.scrollLeft >= carousel.scrollWidth / 2) {
          carouselWrapper.scrollLeft = 0;
        } else if (direction === -1 && carouselWrapper.scrollLeft <= 0) {
          carouselWrapper.scrollLeft = carousel.scrollWidth / 2;
        }
      }, 20);
    }
    function stopScroll() {
      clearInterval(scrollInterval);
    }
    carouselWrapper.addEventListener("mouseenter", stopScroll);
    carouselWrapper.addEventListener("mouseleave", startScroll);
    startScroll();

    return carouselWrapper;
  }

  const webContainer = document.createElement("div");
  webContainer.classList.add("web-section");
  webContainer.appendChild(createInfoSection("web"));
  webContainer.appendChild(createCarouselSection("web", webTechs));

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("data-section");
  dataContainer.appendChild(createInfoSection("data"));
  dataContainer.appendChild(createCarouselSection("data", dataTechs));

  tech.appendChild(webContainer);
  tech.appendChild(dataContainer);

  tech.dir = selectedLang === "fa" ? "rtl" : "ltr";
  return tech;
}
// FOR THE VIBEZ 
function createBackDrop() {
  const grainImg = document.createElement('img');
  grainImg.classList.add('noise');
  grainImg.src = "./images/noise.svg";

  const shapeImg = document.createElement('img');
  shapeImg.classList.add('shape');
  shapeImg.src = "./images/shape.svg";

  return [grainImg, shapeImg];
}
function createUniverse(){
  const universe = document.createElement('div')
  universe.id = 'universe'
  return universe
}
function createStars({ starCount = 250, maxTime = 30, containerId = "universe" } = {}) {
  
  const universe = document.getElementById(containerId);
  if (!universe) return;

  const e = document.documentElement;
  const g = document.getElementsByTagName("body")[0];
  const width = window.innerWidth || e.clientWidth || g.clientWidth;
  const height = window.innerHeight || e.clientHeight || g.clientHeight;

  for (let i = 0; i < starCount; ++i) {
    const xpos = Math.round(Math.random() * width);
    const star = document.createElement("div");
    const speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 20)));

    universe.appendChild(star);

    star.animate(
      [
        { transform: `translate3d(${xpos}px, -${Math.random() * 256}px, 0)` },
        { transform: `translate3d(${xpos}px, ${height}px, 0)` }
      ],
      {
        delay: Math.random() * -speed,
        duration: speed,
        iterations: Infinity
      }
    );
  }
}
// FOR THE EDUCATION DIV 
const certs = {
  en: [
    {
      name: "Advanced Python Programming",
      place: "MFT",
      date: "February - April 2025",
      techs: ["Socket Programming", "Design Patterns", "Multi Threading", "NoSQL Databases"],
      image: "./certs/eng/mft_python2.jpeg"
    },
    {
      name: "Programming with Python",
      place: "MFT",
      date: "December 2023 – April 2024",
      techs: ["Python", "Functional Programming", "OOP Concepts"],
      image: "./certs/eng/mft_python1.jpeg"
    },
    {
      name: "Web Design Pack",
      place: "MFT",
      date: "May – December 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/eng/mft_webpack.jpeg"
    },
    {
      name: "Wordpress & WooCommerce",
      place: "MFT",
      date: "May – July 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/eng/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Policies & Procedures"],
      image: "./certs/eng/mft_security.jpeg"
    },
    {
      name: "Data Analysis with Python",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/eng/mft_data.jpeg"
    },
    {
      name: "Machine Learning with Python",
      place: "MFT",
      date: "July - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/eng/mft_machine.jpeg"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - October 2024",
      techs: ["OSI Model", "TCP/IP", "Subnetting"],
      image: "./certs/eng/mft_network.jpeg"
    },
  ],
  de: [
    {
      name: "Fortgeschrittene Python-Programmierung",
      place: "MFT",
      date: "Februar - April 2025",
      techs: ["Socket-Programmierung", "Entwurfsmuster", "Multithreading", "NoSQL-Datenbanken"],
      image: "./certs/de/mft_python2.jpeg"
    },
    {
      name: "Programmieren mit Python",
      place: "MFT",
      date: "Dezember 2023 – April 2024",
      techs: ["Python", "Funktionale Programmierung", "OOP-Konzepte"],
      image: "./certs/de/mft_python1.jpeg"
    },
    {
      name: "Webdesign-Paket",
      place: "MFT",
      date: "Mai – Dezember 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/de/mft_webpack.jpeg"
    },
    {
      name: "WordPress & WooCommerce",
      place: "MFT",
      date: "Mai – Juli 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/de/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Richtlinien & Verfahren"],
      image: "./certs/de/mft_security.jpeg"
    },
    {
      name: "Datenanalyse mit Python",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/de/mft_data.jpeg"
    },
    {
      name: "Maschinelles Lernen mit Python",
      place: "MFT",
      date: "Juli - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/de/mft_machine.jpeg"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - Oktober 2024",
      techs: ["OSI-Modell", "TCP/IP", "Subnetting"],
      image: "./certs/de/mft_network.jpeg"
    },
  ],
  fa: [
    {
      name: "برنامه‌نویسی پیشرفته پایتون",
      place: "MFT",
      date: "فوریه - آوریل ۲۰۲۵",
      techs: ["برنامه‌نویسی سوکت", "الگوهای طراحی", "چندریسمانی", "پایگاه‌های داده NoSQL"],
      image: "./certs/fa/mft_python2.jpeg"
    },
    {
      name: "برنامه‌نویسی با پایتون",
      place: "MFT",
      date: "دسامبر ۲۰۲۳ – آوریل ۲۰۲۴",
      techs: ["پایتون", "برنامه‌نویسی تابعی", "مفاهیم شیءگرایی"],
      image: "./certs/fa/mft_python1.jpeg"
    },
    {
      name: "پکیج طراحی وب",
      place: "MFT",
      date: "می - دسامبر ۲۰۲۴",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/fa/mft_webpack.jpeg"
    },
    {
      name: "وردپرس و ووکامرس",
      place: "MFT",
      date: "می – جولای ۲۰۲۴",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/fa/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "می - جولای ۲۰۲۵",
      techs: ["فایروال‌ها", "VPN", "IDS/IPS", "سیاست‌ها و رویه‌ها"],
      image: "./certs/fa/mft_security.jpeg"
    },
    {
      name: "تحلیل داده با پایتون",
      place: "MFT",
      date: "می - جولای ۲۰۲۵",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/fa/mft_data.jpeg"
    },
    {
      name: "یادگیری ماشین با پایتون",
      place: "MFT",
      date: "جولای - سپتامبر ۲۰۲۵",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/fa/mft_machine.jpeg"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "اوت - اکتبر ۲۰۲۴",
      techs: ["مدل OSI", "TCP/IP", "Subnetting"],
      image: "./certs/fa/mft_network.jpeg"
    },
  ]
};
const eduTexts = {
  ceMajor: { en: "CE Major", fa: "رشته مهندسی کامپیوتر", de: "CE Fachbereich" },
  degree: { en: "Degree", fa: "مدرک", de: "Abschluss" },
  institute: { en: "Institute", fa: "دانشگاه", de: "Institut" },
  duration: { en: "Duration", fa: "مدت زمان", de: "Dauer" },

  languages: { en: "Languages", fa: "زبان‌ها", de: "Sprachen" },
  english: { en: "English", fa: "انگلیسی", de: "Englisch" },
  german: { en: "German", fa: "آلمانی", de: "Deutsch" },
  persian: { en: "Persian", fa: "فارسی", de: "Persisch" },

  englishLevel: { en: "Professional Proficiency", fa: "تسلط حرفه‌ای", de: "Berufliche Kenntnisse" },
  germanLevel: { en: "Intermediate", fa: "متوسط", de: "Mittelstufe" },
  persianLevel: { en: "Native", fa: "زبان مادری", de: "Muttersprache" },

  ceValue: { en: "Bachelor's Degree", fa: "لیسانس", de: "Bachelorabschluss" },
  instituteValue: { en: "Azad University of Gilan", fa: "دانشگاه آزاد رشت", de: "Azad Universität Gilan" },
  durationValue: { en: "2020-2025", fa: "۲۰۲۰-۲۰۲۵", de: "2020-2025" }
};
function createEdu(selectedLang = "en") {
  const educationsDiv = document.createElement('div');
  educationsDiv.classList.add('educations');

  const eduDiv = document.createElement('div');
  eduDiv.classList.add('edu');

  const uniSection = document.createElement('section');
  uniSection.classList.add('uni');
  [
    { title: "ceMajor", icon: "ri-school-fill ri-2x" },
    { title: "degree", value: "ceValue" },
    { title: "institute", value: "instituteValue" },
    { title: "duration", value: "durationValue" }
  ].forEach(item => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = eduTexts[item.title][selectedLang];
    div.appendChild(h2);

    if (item.icon) {
      const i = document.createElement('i');
      i.className = item.icon;
      div.appendChild(i);
    } else if (item.value) {
      const p = document.createElement('p');
      p.textContent = eduTexts[item.value][selectedLang];
      div.appendChild(p);
    }

    uniSection.appendChild(div);
  });

  const langSection = document.createElement('section');
  langSection.classList.add('lng');
  [
    { title: "languages", icon: "ri-translate-2 ri-2x" },
    { title: "english", value: "englishLevel" },
    { title: "german", value: "germanLevel" },
    { title: "persian", value: "persianLevel" }
  ].forEach(item => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = eduTexts[item.title][selectedLang];
    div.appendChild(h2);

    if (item.icon) {
      const i = document.createElement('i');
      i.className = item.icon;
      div.appendChild(i);
    } else if (item.value) {
      const p = document.createElement('p');
      p.textContent = eduTexts[item.value][selectedLang];
      div.appendChild(p);
    }

    langSection.appendChild(div);
  });

  eduDiv.appendChild(uniSection);
  eduDiv.appendChild(langSection);

  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("certs-toggle", "style");

  const sliderBtn = document.createElement("button");
  sliderBtn.classList.add("slider-btn", "style");
  sliderBtn.textContent = "Slider";

  const listBtn = document.createElement("button");
  listBtn.classList.add("list-btn", "style", "btn-effect");
  listBtn.textContent = "List";

  toggleDiv.appendChild(sliderBtn);
  toggleDiv.appendChild(listBtn);

  const certsSlider = document.createElement("div");
  certsSlider.classList.add("certs-slider");
  const certsList = document.createElement("div");
  certsList.classList.add("certs-list");

  certsSlider.style.display = "flex";
  certsList.style.display = "none";
  sliderBtn.classList.add("active", 'btn-type-2');
  listBtn.classList.remove("active");

  sliderBtn.addEventListener("click", () => {
    certsSlider.style.display = "flex";
    certsList.style.display = "none";
    sliderBtn.classList.add("active",'btn-type-2');
    listBtn.classList.remove("active", 'btn-type-2');
  });

  listBtn.addEventListener("click", () => {
    certsSlider.style.display = "none";
    certsList.style.display = "flex";
    listBtn.classList.add("active", 'btn-type-2');
    sliderBtn.classList.remove("active",'btn-type-2');
  });

  educationsDiv.appendChild(eduDiv);
  educationsDiv.appendChild(toggleDiv);
  educationsDiv.appendChild(certsSlider);
  educationsDiv.appendChild(certsList);

  return educationsDiv;
}
function populateCerts(containerSelector, certs, selectedLang = "en") {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    const certsArray = certs[selectedLang] || [];

    containers.forEach(container => {
        container.innerHTML = "";

        if (certsArray.length === 0) {
            const msg = document.createElement("p");
            msg.textContent = "No certificates available.";
            container.appendChild(msg);
            return;
        }

        certsArray.forEach(cert => {
            const div = document.createElement("div");
            div.classList.add("style", "cert");

            // --- Top Section ---
            const topDiv = document.createElement("div");
            topDiv.classList.add("top");

            const h2 = document.createElement("h2");
            h2.textContent = cert.name;

            const btn = document.createElement("button");
            btn.classList.add("style", "btn-type-2");
            btn.innerHTML = `<i class="ri-image-circle-fill ri-2x"></i>`;

            // Modal on button click
            btn.addEventListener("click", () => {
                const overlay = document.createElement("div");
                overlay.classList.add("modal-overlay");

                const img = document.createElement("img");
                img.src = cert.image;
                img.alt = cert.name;

                overlay.appendChild(img);
                document.body.appendChild(overlay);

                // Close modal on click
                overlay.addEventListener("click", () => {
                    overlay.remove();
                });

                // Close modal on ESC
                const escHandler = (e) => {
                    if (e.key === "Escape") {
                        overlay.remove();
                        document.removeEventListener("keydown", escHandler);
                    }
                };
                document.addEventListener("keydown", escHandler);
            });

            topDiv.append(h2, btn);

            // --- Detail Section ---
            const detailDiv = document.createElement("div");
            detailDiv.classList.add("detail-div");

            const h4 = document.createElement("h4");
            h4.textContent = cert.place;

            const p = document.createElement("p");
            p.textContent = cert.date;

            detailDiv.append(h4, p);

            // --- Tech Tags ---
            const techsDiv = document.createElement("div");
            techsDiv.classList.add("techs");
            cert.techs.forEach(t => {
                const tP = document.createElement("p");
                tP.classList.add("style", "btn");
                tP.textContent = t;
                techsDiv.appendChild(tP);
            });

            // Append all parts
            div.append(topDiv, detailDiv, techsDiv);
            container.appendChild(div);
        });
    });
}
function makeCarouselScrollable(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    containers.forEach(container => {
        let startY, startX, scrollLeft, scrollTop;
        let isDown = false;
        let isHovering = false;

        container.addEventListener('mousedown', e => {
            isDown = true;
            startY = e.pageY - container.offsetTop;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        });

        container.addEventListener('mouseup', () => isDown = false);
        container.addEventListener('mouseleave', () => { isDown = false; isHovering = false; });
        container.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - container.offsetTop;
            const x = e.pageX - container.offsetLeft;
            container.scrollTop = scrollTop - (y - startY);
            container.scrollLeft = scrollLeft - (x - startX);
        });

        // Hover detection
        container.addEventListener('mouseenter', () => isHovering = true);
        container.addEventListener('mouseleave', () => isHovering = false);

        // Auto-scroll
        const scrollSpeed = 0.25;
        function autoScroll() {
            if (!isHovering && !isDown) {
                container.scrollLeft += scrollSpeed;
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        }
        requestAnimationFrame(autoScroll);
    });
}
// INITATING THE FUNTIONS 
let selectedLang = 'en';
function main(selectedLang) {

  body.innerHTML= ''
  let selectedWidth = window.innerWidth;

  body.appendChild(createHeader(selectedLang, selectedWidth));
  const [grain, shape] = createBackDrop();
  body.appendChild(grain);
  body.appendChild(shape);
  body.appendChild(createUniverse())
  createStars({ starCount: 100, maxTime: 100 });
  body.appendChild(createIntro(selectedLang));
  body.appendChild(createSectionTitle({textKey: "tech", lang: selectedLang, className: "line left" }));
  body.appendChild(createTech(selectedLang))
  body.appendChild(createSectionTitle({textKey: "education", lang: selectedLang, className: "line right" }));
  body.appendChild(createEdu(selectedLang))
  populateCerts(".certs-slider", certs, selectedLang);
  populateCerts(".certs-list", certs, selectedLang);
  makeCarouselScrollable('.certs-slider');
  body.appendChild(createSectionTitle({lang: selectedLang, className: "line center" }));
  body.appendChild(createFooter(selectedLang));

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if ((selectedWidth < 725 && newWidth >= 725) ||
        (selectedWidth >= 725 && newWidth < 725)) {
        main(selectedLang);
    }
    selectedWidth = newWidth;
  });
  selectedWidth = window.innerWidth
}
document.addEventListener("DOMContentLoaded", main(selectedLang));