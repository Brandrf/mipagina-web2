<?php
$conexion = new mysqli("localhost", "root", "", "sistema_web");

if($conexion->connect_error){
    die("Error de conexión: " . $conexion->connect_error);
}

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $nombre = $_POST['nombre'] ?? "";
    $email = $_POST['email'] ?? "";
    $telefono = $_POST['telefono'] ?? "";
    $mensaje = $_POST['mensaje'] ?? "";

    $sql = "INSERT INTO tb_presupuestos (nombre, email, telefono, mensaje)
            VALUES ('$nombre', '$email', '$telefono', '$mensaje')";

    if ($conexion->query($sql) == TRUE){
        echo "✅ Presupuesto enviado. Te contactaré pronto.";
    } else {
        echo "❌ Error: " . $conexion->error;
    }
} else {
    echo "❌ ACCESO NO PERMITIDO";
}

$conexion->close();
?>