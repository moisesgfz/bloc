<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = $_POST['content'];
    $filename = $_POST['filename'];

    if ($content !== null && $filename !== null) {
        $carpeta_destino = 'documento/'; // Ruta de destino
        $ruta_completa = $carpeta_destino . $filename;
        
        // Para guardar los cambios en el archivo original, asegúrate de que $filename incluya la ubicación completa del archivo original
        // Ejemplo: $filename = 'documento/archivo_original.txt';

        $guardado = file_put_contents($ruta_completa, $content);

        if ($guardado !== false) {
            echo 'Archivo guardado exitosamente.';
        } else {
            echo 'Error al guardar el archivo.';
        }
    } else {
        echo 'Faltan datos para guardar el archivo.';
    }
}
?>


