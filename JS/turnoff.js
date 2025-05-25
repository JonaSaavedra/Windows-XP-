const turnOffWindow = document.querySelector(".turnoff__window");
const cancelShutDown = document.getElementById("cancel").addEventListener("click", () => {
    
    turnOffWindow.style.display = "none";
    document.body.style.backdropFilter = "grayscale(0)";

  });

const shutDownButton = document.querySelector(".shutdown").addEventListener("click", () => {

    turnOffWindow.style.display = "block";

    document.body.style.backdropFilter = "grayscale(0.8)";
    const taskBar = document.querySelector(".taskbar");
    taskBar.style.filter = "grayscale(0)";

        // startMenu.style.display = "none";
  });
// 

