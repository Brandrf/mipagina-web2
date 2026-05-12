<?php
$conexion = new mysqli("localhost", "root", "", "sistema_web");

if($conexion->connect_error){
    die("Error de conexión: " . $conexion->connect_error);
}

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $email = $_POST['email'] ?? "";

    $sql = "INSERT INTO tb_newsletter (email) VALUES ('$email')";

    if ($conexion->query($sql) == TRUE){
        echo "✅ Suscripción exitosa. Gracias por unirte.";
    } else {
        echo "❌ Error: " . $conexion->error;
    }
} else {
    echo "❌ ACCESO NO PERMITIDO";
}

$conexion->close();
?>