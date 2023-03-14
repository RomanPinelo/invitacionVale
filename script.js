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
      document.getElementById("countdownTimer1").innerHTML = "EXPIRED";
    }
  }, 1000);
}

calcularTiempoRestante1();

