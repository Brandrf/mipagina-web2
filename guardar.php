<?php
$conexion = new mysqli("localhost", "root", "", "sistema_web");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    // Usando la tabla "mensajes" (existe en tu BD)
    $sql = "INSERT INTO mensajes (nombre, telefono, correo, mensaje)
            VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

    if ($conexion->query($sql) === TRUE) {
        echo "✅ Mensaje guardado correctamente";
        echo "<br><a href='Contacto.html'>← Volver</a>";
    } else {
        echo "❌ Error: " . $conexion->error;
        echo "<br><a href='Contacto.html'>← Volver</a>";
    }
} else {
    echo "❌ No se recibieron datos";
    echo "<br><a href='Contacto.html'>← Ir al formulario</a>";
}

$conexion->close();
?>