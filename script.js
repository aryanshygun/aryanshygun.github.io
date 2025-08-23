//techstack add
function populateTechStack(containerSelector, techArray) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    techArray.forEach(tech => {
        const div = document.createElement("div");
        div.classList.add("btn");

        const img = document.createElement("img");
        img.src = tech.icon;
        img.alt = tech.name;

        const span = document.createElement("span");
        span.textContent = tech.name;

        div.appendChild(img);
        div.appendChild(span);

        if (tech.url) {
            div.style.cursor = "pointer";
            div.onclick = () => window.open(tech.url, "_blank");
        }

        container.appendChild(div);
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

//theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

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
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
//   star.style.backgroundColor = "white";

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
var elem = document.querySelector(".pulse");
var animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"]
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity
  }
);

