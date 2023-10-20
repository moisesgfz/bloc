<!DOCTYPE html>
<html>
<head>
    <title>Bloc de Notas Web</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="notepad">
        <h1>Bloc de Notas</h1>
        <div class="menu-bar">
            <div class="menu">
                <ul>
                    <li class="menu-item" id="archivo-menu">
                        <a href="#">Archivo</a>
                        <ul class="submenu">
                            <li>
                                <label for="fileInput"><a>Abrir</a></label>
                                <input type="file" id="fileInput" style="display: none" accept=".txt">
                            </li>
                            <li><a href="#">Nuevo</a></li>
                            <li><a href="#" id="guardar-button">Guardar</a></li>
                            <li><a href="#" id="guardar-como">Guardar Como</a></li>
                            <li><a href="#">Salir</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="work-area">
            <textarea name="notepad-content" id="notepad-content"></textarea>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
