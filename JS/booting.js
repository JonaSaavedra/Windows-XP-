
let bootingWindows = document.querySelector('.booting__windows')
let loginWindows = document.querySelector('.login__windows')

setTimeout(function(){
    bootingWindows.style.display = 'none';
    loginWindows.style.display = 'block';
}, 6000)