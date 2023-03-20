<?php 

  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "valeria.espinosa.medrano2008@gmail.com";

  // Variables del formulario
  $nombre = $_POST['nombre'];
  $asistir = $_POST['asistir'];
  $mensajeFormulario = $_POST['mensaje'];

  // Header
  $header = "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Asunto
  $contactoAsunto = "Confirmación de asistencia";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Te confirma que:";
  $mensaje .= "\r\n";

  if($asistir=="si"){
    $mensaje .= "Asistiré";
  }else{
    $mensaje .= "No asistiré";
  }

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Su mensaje es:";
  $mensaje .= "\r\n";
  $mensaje .= $mensajeFormulario;

  if (mail($destinatario, $contactoAsunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='./html/correoEnviado.html'\", 100)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='./html/correoNoEnviado.html'\", 100)</script>";
  }

?>