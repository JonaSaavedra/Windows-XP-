// ABRIR MENU DE INICIO

var startMenu = document.getElementById("start__menu");
var startButton = document.getElementById("taskbar__start__button");

function openStartMenu() {
  //getComputedStyle para obtener el valor real del display
  var currentDisplay = window.getComputedStyle(startMenu).display;

  if (currentDisplay === "none") {
    startMenu.style.display = "block";
  } else {
    startMenu.style.display = "none";
  }
}

//ESTABLECER HORA LOCAL

function showHour() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const localHour = `${hours}:${minutes}`;
  document.getElementById("hour").textContent = localHour;
}

setInterval(showHour, 1000);

//Objeto iconos de escritorio

function displayDesktopIcons() {
  const desktopIconsDisplay = [
    { src: "Assets/icons/MyComputer.png", alt: "Mi PC", p: "Mi PC" },
    {
      src: "Assets/icons/WindowsMediaPlayer.png",
      alt: "Windows Media Player",
      p: "Windows Media Player",
    },
    {
      src: "Assets/icons/InternetExplorer.png",
      alt: "Internet Explorer",
      p: "Internet Explorer",
    },
    {
      src: "Assets/icons/RecycleBin.png",
      alt: "Papelera de Reciclaje",
      p: "Papelera de Reciclaje",
    },
  ];

  const desktop = document.getElementById("desktop");
  let selectedP = null;

  desktopIconsDisplay.forEach((icon) => {
    const desktopIcon = document.createElement("button");
    const iconImg = document.createElement("img");
    const iconP = document.createElement("p");

    iconImg.src = icon.src;
    iconImg.alt = icon.alt;
    iconP.textContent = icon.p;

    desktopIcon.classList.add("desktop__icons");
    iconImg.classList.add("desktop__icon");

    desktopIcon.appendChild(iconImg);
    desktopIcon.appendChild(iconP);
    desktop.appendChild(desktopIcon);

    desktopIcon.addEventListener("click", (event) => {
      event.stopPropagation(); // evita el click global
      if (selectedP && selectedP !== iconP) {
        selectedP.style.backgroundColor = "";
      }
      iconP.style.backgroundColor = "rgba(42, 90, 236, 0.835)";
      selectedP = iconP;
    });
  });

  document.addEventListener("click", () => {
    if (selectedP) {
      selectedP.style.backgroundColor = "";
      selectedP = null;
    }
  });
}

displayDesktopIcons();
