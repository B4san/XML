function cargarXML() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Biblioteca.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Verificar si la respuesta es XML válido
            if (!xhr.responseXML) {
                document.getElementById("resultado").innerHTML = "Error al procesar el XML: Respuesta no es un XML válido.";
                return;
            }
            // Parsear el XML
            const xmlDoc = xhr.responseXML;
            // Verificar si hubo errores en el parseo
            const parserError = xmlDoc.getElementsByTagName("parsererror");
            if (parserError.length > 0) {
                document.getElementById("resultado").innerHTML = "Error al procesar el XML: " + parserError[0].textContent;
                return;
            }
            // Obtener todos los libros
            const libros = xmlDoc.getElementsByTagName("Libro");
            let salida = "<h1>Lista de Libros</h1><ul>";
            for (let i = 0; i < libros.length; i++) {
                const Titulo = libros[i].getElementsByTagName("Titulo")[0].textContent;
                const Autor = libros[i].getElementsByTagName("Autor")[0].textContent;
                const anio = libros[i].getElementsByTagName("anio")[0].textContent;
                salida += `<li><strong>${Titulo}</strong> por ${Autor} (Año: ${anio})</li>`;
            }
            salida += "</ul>";
            document.getElementById("resultado").innerHTML = salida;
        }
    };
    xhr.send();
}