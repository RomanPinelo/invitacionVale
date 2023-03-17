// Cuenta regresiva para la fecha 01/04/23 a las 16:30 hrs.
function calcularTiempoRestante1() {
  // Set the date we're counting down to
  var countDownDate = new Date("Apr 01, 2023 16:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    days < 10 ? document.getElementById("dias").innerHTML = `0${days}` : document.getElementById("dias").innerHTML = days;
    hours < 10 ? document.getElementById("horas").innerHTML = `0${hours}` : document.getElementById("horas").innerHTML = hours;
    minutes < 10 ? document.getElementById("minutos").innerHTML = `0${minutes}` : document.getElementById("minutos").innerHTML = minutes;
    seconds < 10 ? document.getElementById("segundos").innerHTML = `0${seconds}` : document.getElementById("segundos").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("cuentaRegresiva").innerHTML = "¡¡¡Llego el día!!!";
    }
  }, 1000);
}

calcularTiempoRestante1();

// __________________________________________________________________________________________________________________________________
/* Configuración de la libreria de typed.js */
/* Primer mensaje en pantalla de PC */
var typed1 = new Typed('#typedFirstMessage', {
  stringsElement: '#textStrings1', 
  typeSpeed: 90,
  startDelay: 5000,
  backSpeed: 75,
  smartBackspace: false,
  shuffle: false,
  backDelay: 1500,
  loop: false,
  loopCount: 1,
  showCursor: true,
  cursorChar: '|',
  contentType: 'html',
});


// ___________________________________________________________________________________________________________________________________
// Slider
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Coloca el último elemento al inicio del slider

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);  //El primer elemento se mueve al final
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);  //El último elemento se mueve al inicio
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

// Esto hace que sea automático y es opcional
setInterval(function() {
  Next();
}, 5000);