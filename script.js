var currentFileName = "archivo_original.txt"; // Establece el nombre del archivo original

document.getElementById("archivo-menu").addEventListener("click", function() {
    var submenu = this.querySelector(".submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});

document.getElementById("fileInput").addEventListener("change", function(event) {
    var selectedFile = event.target.files[0];
    if (selectedFile) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("notepad-content").value = e.target.result;
        };

        reader.readAsText(selectedFile);

        // Actualiza el nombre del archivo actual al abrir un nuevo archivo
        currentFileName = selectedFile.name;
    }
});

var hasChanges = false;

document.getElementById("notepad-content").addEventListener("input", function() {
    hasChanges = true;
});

function saveFile(fileName, content) {
    // Comprueba si hay un archivo abierto
    var fileContent = document.getElementById("notepad-content").value;
    if (fileContent.trim() === "") {
        alert("No hay contenido para guardar.");
        return;
    }

    if (fileName) {
        var formData = new FormData();
        formData.append("content", content);
        formData.append("filename", fileName);

        fetch("save_file.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((result) => {
                alert(result); // Muestra la respuesta del servidor
            })
            .catch((error) => {
                console.error("Error al guardar el archivo: " + error);
            });
    }
}

document.getElementById("guardar-button").addEventListener("click", function() {
    if (hasChanges) {
        var fileName = currentFileName; // Utiliza el nombre del archivo actual
        if (fileName) {
            var fileContent = document.getElementById("notepad-content").value;
            saveFile(fileName, fileContent);
            hasChanges = false;
        }
    }
});


document.getElementById("guardar-como").addEventListener("click", function () {
    var contenido = document.getElementById("notepad-content").value;

    // Abre un cuadro de diálogo para ingresar el nombre del archivo
    var nombreArchivo = prompt("Nombre del archivo a guardar:", currentFileName);

    if (nombreArchivo) {
        currentFileName = nombreArchivo; // Actualiza el nombre del archivo actual
        var formData = new FormData();
        formData.append("content", contenido);
        formData.append("filename", nombreArchivo);

        fetch("save_file.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((result) => {
                alert(result); // Muestra la respuesta del servidor
            })
            .catch((error) => {
                console.error("Error al guardar el archivo: " + error);
            });
    }
});
