const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const body = document.body;

const languages = ['en', 'fa', 'de'];
let currentLangIndex = 0;

const savedLang = localStorage.getItem('siteLang');
if (savedLang && languages.includes(savedLang)) {
  currentLangIndex = languages.indexOf(savedLang);
  switchLanguage(savedLang);
} else {
  switchLanguage(languages[currentLangIndex]);
}

langToggle.addEventListener('click', () => {
  currentLangIndex = (currentLangIndex + 1) % languages.length;
  const newLang = languages[currentLangIndex];
  switchLanguage(newLang);
  localStorage.setItem('siteLang', newLang);
});

function switchLanguage(lang) {
  document.querySelectorAll('.lang-section').forEach(div => div.style.display = 'none');
  document.querySelectorAll(`.lang-section[data-lang="${lang}"]`).forEach(div => div.style.display = 'flex');

  langLabel.textContent = lang.toUpperCase();

  body.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
}




function populateTechStack(containerSelector, techArray) {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    containers.forEach(container => {
        techArray.forEach(tech => {
            const div = document.createElement("div");
            div.classList.add('style');

            const img = document.createElement("img");
            img.src = tech.icon;
            img.alt = tech.name;

            const span = document.createElement("span");
            span.textContent = tech.name;

            div.appendChild(img);
            div.appendChild(span);

            div.style.cursor = "pointer";
            div.onclick = () => window.open(tech.url, "_blank");

            container.appendChild(div);
        });
    });
}

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

populateTechStack(".web .frame", webTechs);
populateTechStack(".data .frame", dataTechs);

const toggle = document.getElementById('themeToggle');
const shape = document.querySelector('.shape');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  shape.classList.toggle('cancel');
});

document.querySelectorAll('.go-top').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function populateCerts(containerSelector, certsByLang) {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    containers.forEach(container => {
        const lang = container.closest(".lang-section")?.dataset.lang || "en";
        const certsArray = certsByLang[lang] || [];

        container.innerHTML = "";

        certsArray.forEach(cert => {
            const div = document.createElement("div");
            div.classList.add("style", "cert");

            const topDiv = document.createElement("div");
            topDiv.classList.add("top");

            const h2 = document.createElement("h2");
            h2.textContent = cert.name;

            const btn = document.createElement("button");
            btn.classList.add("style", "btn-effect");
            btn.textContent = cert.buttonText;

            btn.addEventListener("click", () => {
                const overlay = document.createElement("div");
                overlay.classList.add("modal-overlay");

                const img = document.createElement("img");
                img.src = cert.image;
                img.alt = cert.name;

                overlay.appendChild(img);
                document.body.appendChild(overlay);

                overlay.addEventListener("click", () => {
                    document.body.removeChild(overlay);
                });
            });

            topDiv.appendChild(h2);
            topDiv.appendChild(btn);
            div.appendChild(topDiv);

            const h4 = document.createElement("h4");
            h4.textContent = cert.place;
            div.appendChild(h4);

            const p = document.createElement("p");
            p.textContent = cert.date;
            div.appendChild(p);

            const techsDiv = document.createElement("div");
            techsDiv.classList.add("techs");

            cert.techs.forEach(t => {
                const tP = document.createElement("p");
                tP.classList.add("style", "btn");
                tP.textContent = t;
                techsDiv.appendChild(tP);
            });

            div.appendChild(techsDiv);
            container.appendChild(div);
        });
    });
}

const certs = {
  en: [
    {
      name: "Advanced Python Programming",
      place: "MFT",
      date: "February - April 2025",
      techs: ["Socket Programming", "Design Patterns", "Multi Threading", "NoSQL Databases"],
      image: "./images/certs/eng/mft_python2.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Programming with Python",
      place: "MFT",
      date: "December 2023 – April 2024",
      techs: ["Python", "Functional Programming", "OOP Concepts"],
      image: "./images/certs/eng/mft_python1.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Web Design Pack",
      place: "MFT",
      date: "May – December 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./images/certs/eng/mft_webpack.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Wordpress & WooCommerce",
      place: "MFT",
      date: "May – July 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./images/certs/eng/mft_wordpress.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Policies & Procedures"],
      image: "./images/certs/eng/mft_security.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Data Analysis with Python",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./images/certs/eng/mft_data.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Machine Learning with Python",
      place: "MFT",
      date: "July - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./images/certs/eng/mft_machine.jpeg",
      buttonText: "View Cert"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - October 2024",
      techs: ["OSI Model", "TCP/IP", "Subnetting"],
      image: "./images/certs/eng/mft_network.jpeg",
      buttonText: "View Cert"
    },
  ],
  de: [
    {
      name: "Fortgeschrittene Python-Programmierung",
      place: "MFT",
      date: "Februar - April 2025",
      techs: ["Socket-Programmierung", "Entwurfsmuster", "Multithreading", "NoSQL-Datenbanken"],
      image: "./images/certs/de/mft_python2.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Programmieren mit Python",
      place: "MFT",
      date: "Dezember 2023 – April 2024",
      techs: ["Python", "Funktionale Programmierung", "OOP-Konzepte"],
      image: "./images/certs/de/mft_python1.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Webdesign-Paket",
      place: "MFT",
      date: "Mai – Dezember 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./images/certs/de/mft_webpack.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "WordPress & WooCommerce",
      place: "MFT",
      date: "Mai – Juli 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./images/certs/de/mft_wordpress.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Richtlinien & Verfahren"],
      image: "./images/certs/de/mft_security.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Datenanalyse mit Python",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./images/certs/de/mft_data.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Maschinelles Lernen mit Python",
      place: "MFT",
      date: "Juli - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./images/certs/de/mft_machine.jpeg",
      buttonText: "Zertifikat ansehen"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - Oktober 2024",
      techs: ["OSI-Modell", "TCP/IP", "Subnetting"],
      image: "./images/certs/de/mft_network.jpeg",
      buttonText: "Zertifikat ansehen"
    },
  ],
  fa: [
    {
      name: "برنامه‌نویسی پیشرفته پایتون",
      place: "MFT",
      date: "فوریه - آوریل ۲۰۲۵",
      techs: ["برنامه‌نویسی سوکت", "الگوهای طراحی", "چندریسمانی", "پایگاه‌های داده NoSQL"],
      image: "./images/certs/fa/mft_python2.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "برنامه‌نویسی با پایتون",
      place: "MFT",
      date: "دسامبر ۲۰۲۳ – آوریل ۲۰۲۴",
      techs: ["پایتون", "برنامه‌نویسی تابعی", "مفاهیم شیءگرایی"],
      image: "./images/certs/fa/mft_python1.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "پکیج طراحی وب",
      place: "MFT",
      date: "می - دسامبر ۲۰۲۴",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./images/certs/fa/mft_webpack.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "وردپرس و ووکامرس",
      place: "MFT",
      date: "می – جولای ۲۰۲۴",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./images/certs/fa/mft_wordpress.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "می - جولای ۲۰۲۵",
      techs: ["فایروال‌ها", "VPN", "IDS/IPS", "سیاست‌ها و رویه‌ها"],
      image: "./images/certs/fa/mft_security.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "تحلیل داده با پایتون",
      place: "MFT",
      date: "می - جولای ۲۰۲۵",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./images/certs/fa/mft_data.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "یادگیری ماشین با پایتون",
      place: "MFT",
      date: "جولای - سپتامبر ۲۰۲۵",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./images/certs/fa/mft_machine.jpeg",
      buttonText: "مشاهده گواهی"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "اوت - اکتبر ۲۰۲۴",
      techs: ["مدل OSI", "TCP/IP", "Subnetting"],
      image: "./images/certs/fa/mft_network.jpeg",
      buttonText: "مشاهده گواهی"
    },
  ]
};
populateCerts(".certs-slider", certs);
populateCerts(".certs-list", certs);


document.querySelectorAll('.certs-slider').forEach(container => {
    let startY, startX, scrollLeft, scrollTop, isDown = false, isHovering = false;

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

function initCertsToggle() {
    const sections = document.querySelectorAll(".educations.lang-section");

    sections.forEach(section => {
        const sliderBtn = section.querySelector(".slider-btn");
        const listBtn = section.querySelector(".list-btn");
        const slider = section.querySelector(".certs-slider");
        const list = section.querySelector(".certs-list");

        slider.style.display = "flex";
        list.style.display = "none";
        sliderBtn.classList.add("active");
        listBtn.classList.remove("active");

        sliderBtn.addEventListener("click", () => {
            slider.style.display = "flex";
            list.style.display = "none";
            sliderBtn.classList.add("active");
            listBtn.classList.remove("active");
        });

        listBtn.addEventListener("click", () => {
            slider.style.display = "none";
            list.style.display = "flex";
            listBtn.classList.add("active");
            sliderBtn.classList.remove("active");
        });
    });
}

initCertsToggle();


var layerCount = 5;
var starCount = 250;
var maxTime = 30;
var universe = document.getElementById("universe");
var e = document.documentElement;
var g = document.getElementsByTagName("body")[0];
var width = window.innerWidth || e.clientWidth || g.clientWidth;
var height = window.innerHeight || e.clientHeight || g.clientHeight;
for (var i = 0; i < starCount; ++i) {
  var xpos = Math.round(Math.random() * width);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (2 - Math.floor(speed / 1000 / 20)));

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + xpos + "px, -" + Math.random() * 256 + "px, 0)"
      },
      {
        transform: "translate3d(" + xpos + "px, " + height + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: Infinity
    }
  );
}
