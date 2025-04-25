// ABRIR MENU DE INICIO

var startMenu = document.getElementById("start__menu");
var startButton = document.getElementById("taskbar__start__button")

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
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const localHour = `${hours}:${minutes}`;
    document.getElementById('hour').textContent = localHour;
}

setInterval(showHour, 1000);